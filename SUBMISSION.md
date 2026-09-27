# UpahKit — Devpost submission copy

## Project name

UpahKit

## Elevator pitch

A private, browser-based pay ledger that helps Malaysian gig workers organize shifts, partial payments, and proof of what remains unpaid.

## Thumbnail

Upload [`video/thumbnail.png`](video/thumbnail.png) (PNG, 1536 × 1024, 3:2, about 1.8 MB).

## About the project

### Inspiration

After a shift, the story of the work and the pay can be split across a platform, a chat, a bank transfer, and memory. We wanted to make it easier to gather those details into a clear record before a worker talks with a union, legal-aid provider, or another qualified adviser.

Tools such as [Gridwise](https://gridwise.io/features) help gig workers bring earnings, mileage, and work insights together; [Everlance](https://www.everlance.com/partner/uber) focuses on mileage and expense records. UpahKit takes a narrower path: one shift at a time, what was agreed, what arrived, what evidence the worker has, and what remains to explain. It does not connect to those services or import their data.

### What it does

UpahKit lets a worker record a job, client or platform, work date, hours, agreed pay, payments received, notes, and the kind of supporting evidence they have. A due date is optional and entered by the worker.

The dashboard shows agreed earnings, received payments, a job-by-job outstanding estimate, a recent-activity timeline, and an evidence checklist. The calculation is transparent:

$$\text{outstanding} = \max(\text{agreed pay} - \text{payments recorded}, 0)$$

The “past due” view only uses a due date the worker entered; it is a record-keeping reminder, not a legal finding. Workers can search and filter records, update them as payments arrive, export a CSV, or print a summary to discuss with an adviser.

The demo uses fictional Malaysian ringgit records. It starts with RM836.50 agreed, RM432.50 received, and RM404.00 outstanding. No account is required. Records stay in the current browser; evidence files are not uploaded.

### How we built it

The prototype uses vanilla HTML, CSS, and JavaScript. Browser `localStorage` keeps the records on the device, a deterministic calculation derives balances from the entered amounts, CSV export creates a local download, and print styles produce a paper-friendly summary. There is no runtime backend, external API, or AI feature.

Playwright with Firefox is used for development end-to-end checks. The narrated demo was captured with the demo-recorder Playwright workflow and compiled with FFmpeg. The thumbnail artwork was generated with OpenAI image generation; the demo narration is synthetic English speech (`en-SG-LunaNeural`). No worker records or personal data were sent to these tools—the video uses fictional sample data.

### Challenges we ran into

The main product challenge was showing a useful “past due” signal without implying a legal conclusion. We made the date optional, only compare against a date entered by the worker, and explain inline that the signal does not establish legal rights or recoverability.

We also had to make the evidence checklist useful without asking people to upload sensitive files. The prototype records the type of evidence a person says they have, while keeping the files themselves outside the app.

### Accomplishments that we're proud of

- A complete no-account workflow: review sample records, add a shift, record a partial payment, see the totals update, and export or print a summary.
- Every balance can be traced to user-entered agreed and received amounts.
- A calm, mobile-friendly interface with a visible evidence checklist and clear prototype boundaries.
- A 2 minute 49 second narrated product demo with designed slides, animated cursor, focus zoom, and captions.

### What we learned

Even simple arithmetic needs to be explainable when someone is under stress. Showing the agreed amount and payments beside each balance makes errors easier to spot and correct. We also learned that missing information should stay visibly missing: an absent due date should not become an invented overdue status, and an evidence note should not be presented as proof the app has verified.

### What's next for UpahKit

Validate the flow and wording with Malaysian gig workers, worker organizations, and qualified advisers. Next, improve accessibility and Bahasa Malaysia support, then explore privacy-conscious backup and reminders only if workers find them useful. Any legal guidance or referral content would need review against current Malaysian sources by qualified advisers.

## Built with

JavaScript · HTML · CSS

## Try it out

- **Source code and local run instructions:** https://github.com/Georgefifth/upahkit

There is no hosted live app yet; the repository README explains how to run the static prototype locally.

## Image gallery

Recommended uploads (all PNGs):

- `video/dashboard.png` — sample dashboard and evidence checklist.
- `video/record-added.png` — fictional shift added and past-date filter applied.
- `video/slides/slide-03.png` — transparent balance calculation.
- `video/slides/slide-05.png` — privacy boundary and next steps.

## Demo video

Upload [`video/UpahKit-demo.mp4`](video/UpahKit-demo.mp4) (2:49, 1080p, about 9.8 MB). It meets the 2–3 minute demo-video limit listed for [LexHack 2026](https://lexhack-2026.devpost.com/).
