const { test, expect } = require('@playwright/test');
const fs = require('node:fs');

test('records, balances, exports, printing, and responsive layouts work', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.goto('/');

  await expect(page).toHaveTitle('UpahKit — Know what’s still owed');
  await expect(page.locator('#outstanding')).toHaveText('RM 404.00');
  await expect(page.locator('#pastDue')).toHaveText('RM 84.00');
  await expect(page.locator('#recordsBody tr')).toHaveCount(6);

  fs.mkdirSync('screenshots', { recursive: true });
  await page.screenshot({ path: 'screenshots/upahkit-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator('#outstanding')).toBeVisible();
  await page.screenshot({ path: 'screenshots/upahkit-mobile.png', fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1000 });

  await page.getByRole('button', { name: 'Add work record' }).click();
  await page.getByLabel('Type of work').fill('Garden clean-up');
  await page.getByLabel('Client or platform').fill('Demo client');
  await page.getByLabel('Date worked').fill('2026-09-20');
  await page.getByLabel('Payment due (optional)').fill('2026-09-22');
  await page.getByLabel('Hours (optional)').fill('4');
  await page.getByLabel('Agreed pay (RM)').fill('200');
  await page.getByLabel('Received so far (RM)').fill('0');
  await page.getByLabel('Notes or payment terms').fill('=HYPERLINK("https://example.invalid")');
  await page.getByLabel('Proof you have').selectOption('chat');
  await page.getByRole('button', { name: 'Save record' }).click();
  await expect(page.locator('#outstanding')).toHaveText('RM 604.00');
  await expect(page.locator('#pastDue')).toHaveText('RM 284.00');
  await expect(page.locator('#recordsBody tr')).toHaveCount(7);

  await page.locator('#searchInput').fill('Garden clean-up');
  await expect(page.locator('#recordsBody tr')).toHaveCount(1);
  await page.locator('#searchInput').fill('no matching item');
  await expect(page.locator('#emptyState')).toBeVisible();
  await page.locator('#searchInput').fill('');
  await page.locator('#filterSelect').selectOption('pastdue');
  await expect(page.locator('#recordsBody tr')).toHaveCount(2);
  await expect(page.locator('#recordsBody')).toContainText('Garden clean-up');
  await page.locator('#filterSelect').selectOption('open');
  await expect(page.locator('#recordsBody tr')).toHaveCount(3);
  await page.locator('#filterSelect').selectOption('partial');
  await expect(page.locator('#recordsBody tr')).toHaveCount(2);
  await page.locator('#filterSelect').selectOption('settled');
  await expect(page.locator('#recordsBody tr')).toHaveCount(2);
  await page.getByRole('button', { name: 'View all' }).click();
  await expect(page.locator('#recordsBody tr')).toHaveCount(7);

  await page.locator('#recordsBody tr').filter({ hasText: 'Garden clean-up' }).click();
  await page.getByLabel('Received so far (RM)').fill('50');
  await page.getByRole('button', { name: 'Save record' }).click();
  await expect(page.locator('#outstanding')).toHaveText('RM 554.00');
  await expect(page.locator('#pastDue')).toHaveText('RM 234.00');

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export records' }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('upahkit-work-records.csv');
  const csv = fs.readFileSync(await download.path(), 'utf8');
  expect(csv).toContain("'=HYPERLINK");
  expect(csv).toContain('Payment due');

  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('th.print-only-col')).toBeVisible();
  await page.emulateMedia({ media: 'screen' });
  await page.evaluate(() => { window.__printCalls = 0; window.print = () => { window.__printCalls += 1; }; });
  await page.getByRole('button', { name: 'Print summary' }).click();
  expect(await page.evaluate(() => window.__printCalls)).toBe(1);

  await page.locator('#recordsBody tr').filter({ hasText: 'Garden clean-up' }).click();
  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: 'Delete record' }).click();
  await expect(page.locator('#outstanding')).toHaveText('RM 404.00');
  await expect(page.locator('#pastDue')).toHaveText('RM 84.00');
  await expect(page.locator('#recordsBody tr')).toHaveCount(6);

  await page.getByRole('button', { name: 'Add work record' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await expect(page.locator('#modalBackdrop')).toBeHidden();
  await page.getByRole('button', { name: 'Add work record' }).click();
  await page.keyboard.press('Escape');
  await expect(page.locator('#modalBackdrop')).toBeHidden();

  expect(pageErrors).toEqual([]);
});
