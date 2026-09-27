const path = require('node:path');
const slide = (name) => path.join(__dirname, 'slides', `${name}.png`);

module.exports = [
  {
    name: 'opening', duration: 7,
    card: { image: slide('slide-01') },
    vo: 'The shift is finished. But a worker may still be piecing together what was agreed, what arrived, and what is missing.',
  },
  {
    name: 'scattered-details', duration: 7,
    card: { image: slide('slide-02') },
    vo: 'An order may sit in one app, the agreed rate in a chat, a transfer in a bank history, and the timeline in memory.',
  },
  {
    name: 'one-record', duration: 6,
    card: { image: slide('slide-03') },
    vo: 'UpahKit gives each job one understandable record: when it happened, what was agreed, what was received, and what proof the worker has.',
  },
  {
    name: 'dashboard', session: 'upahkit', url: 'http://127.0.0.1:4173',
    actions: [
      { type: 'waitFor', sel: '#outstanding' },
      { type: 'hover', sel: '#outstanding' },
      { type: 'wait', ms: 4300 },
      { type: 'screenshot', path: '/home/yap/Hack/LexHack/video/dashboard.png' },
    ],
    vo: 'This fictional example keeps the arithmetic visible: eight hundred thirty-six ringgit agreed, four hundred thirty-two ringgit and fifty sen received, and four hundred four outstanding.',
  },
  {
    name: 'transparent-math', session: 'upahkit', duration: 6,
    card: { image: slide('slide-03') },
    vo: 'Each balance is calculated row by row: agreed pay minus payments recorded. It remains an estimate based only on what the user entered.',
  },
  {
    name: 'past-date-filter', session: 'upahkit',
    actions: [
      { type: 'waitFor', sel: '#filterSelect' },
      { type: 'click', sel: '#filterSelect' },
      { type: 'exec', js: "const f=document.querySelector('#filterSelect');f.value='pastdue';f.dispatchEvent(new Event('change',{bubbles:true}));" },
      { type: 'wait', ms: 4300 },
    ],
    vo: 'The past-date view is narrower. It highlights balances only when the worker chose a payment date and that date has passed.',
  },
  {
    name: 'date-is-not-verdict', session: 'upahkit', duration: 6,
    card: { image: slide('slide-04') },
    vo: 'No date entered, no overdue guess. A date passing is a reminder from the record; it does not decide anyone’s legal rights.',
  },
  {
    name: 'start-a-record', session: 'upahkit',
    actions: [
      { type: 'click', sel: '#addBtn' },
      { type: 'waitFor', sel: '#jobName' },
      { type: 'fill', sel: '#jobName', text: 'Market clean-up', typewrite: true, delay: 55 },
      { type: 'fill', sel: '#client', text: 'Goodside Events', typewrite: true, delay: 45 },
    ],
    vo: 'Let’s add a fictional event shift while the details are fresh. A job name and client make the work easier to recognize later.',
  },
  {
    name: 'terms-and-date', session: 'upahkit',
    actions: [
      { type: 'waitFor', sel: '#workDate' },
      { type: 'fill', sel: '#workDate', text: '2026-09-24' },
      { type: 'fill', sel: '#dueDate', text: '2026-09-25' },
    ],
    vo: 'Add the work date and an optional payment date chosen by the worker.',
  },
  {
    name: 'terms-and-rate', session: 'upahkit',
    actions: [
      { type: 'waitFor', sel: '#hours' },
      { type: 'fill', sel: '#hours', text: '4' },
      { type: 'fill', sel: '#agreedPay', text: '200' },
    ],
    vo: 'Hours and agreed pay have separate fields, so the record shows what was promised without guessing.',
  },
  {
    name: 'evidence-note-save', session: 'upahkit',
    actions: [
      { type: 'waitFor', sel: '#receivedPay' },
      { type: 'fill', sel: '#receivedPay', text: '0' },
      { type: 'fill', sel: '#notes', text: 'Rate and payout agreed by chat; event shift.', typewrite: true, delay: 28 },
      { type: 'exec', js: "const e=document.querySelector('#evidence');e.value='chat';e.dispatchEvent(new Event('change',{bubbles:true}));" },
      { type: 'click', sel: '#recordForm button[type=submit]' },
    ],
    vo: 'A short note captures context. The evidence label says whether a chat, order, or bank entry exists; UpahKit never uploads the file.',
  },
  {
    name: 'updated-overview', session: 'upahkit',
    actions: [
      { type: 'waitFor', sel: '#pastDue' },
      { type: 'hover', sel: '#pastDue' },
      { type: 'wait', ms: 4700 },
      { type: 'screenshot', path: '/home/yap/Hack/LexHack/video/record-added.png' },
    ],
    vo: 'The new two-hundred-ringgit shift joins the list. Because its entered payment date has passed, the past-due balance updates alongside the full outstanding total.',
  },
  {
    name: 'record-partial-payment', session: 'upahkit',
    actions: [
      { type: 'waitFor', sel: 'tr:has-text("Market clean-up")' },
      { type: 'click', sel: 'tr:has-text("Market clean-up")' },
      { type: 'waitFor', sel: '#receivedPay' },
      { type: 'fill', sel: '#receivedPay', text: '50' },
      { type: 'wait', ms: 1800 },
    ],
    vo: 'When fifty ringgit arrives, update the amount received. The remaining balance stays visible instead of disappearing inside a total.',
  },
  {
    name: 'recalculated-balance', session: 'upahkit',
    actions: [
      { type: 'waitFor', sel: '#recordForm button[type=submit]' },
      { type: 'click', sel: '#recordForm button[type=submit]' },
      { type: 'hover', sel: '#outstanding' },
      { type: 'wait', ms: 4600 },
    ],
    vo: 'The dashboard recalculates from that one change. Every figure still leads back to a job row the worker can review or correct.',
  },
  {
    name: 'portable-summary', session: 'upahkit',
    actions: [
      { type: 'waitFor', sel: '#exportBtn' },
      { type: 'click', sel: '#exportBtn' },
      { type: 'wait', ms: 3000 },
    ],
    vo: 'The record can leave as a CSV or printed summary for a conversation with a union, legal aid service, or qualified adviser.',
  },
  {
    name: 'privacy-and-next', duration: 8,
    card: { image: slide('slide-05') },
    vo: 'This prototype stores records in the browser. There is no account, evidence upload, tracking backend, or AI answer pretending to be law.',
  },
  {
    name: 'closing', duration: 7,
    card: { image: slide('slide-06') },
    vo: 'Next, validate the flow with Malaysian workers and advisers. UpahKit keeps the record clear; people guide the next step. The code is on GitHub.',
  },
];
