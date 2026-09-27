# UpahKit — Devpost submission draft

## Short summary

UpahKit helps Malaysian gig workers and freelancers organize shifts, agreed pay, partial payments, and the proof they already have into a clear, exportable record.

## The problem

When a worker is paid late or receives only part of what they expected, the details can be scattered across platform screens, chat messages, bank transfers, and memory. That makes it harder to understand the gap or explain the timeline to someone who can help.

## What we built

UpahKit is a mobile-friendly income and evidence organizer. Workers can record a job, date, optional agreed payment date, hours, client or platform, agreed amount, payments received, notes, and the kind of supporting proof they have. The dashboard calculates a transparent outstanding estimate, highlights balances past the date entered by the user, and helps users spot evidence gaps. Records can be searched, filtered, updated, exported as CSV, or printed for a conversation with a union, legal aid provider, or qualified adviser.

The prototype uses fictional Malaysian ringgit examples. It keeps records in the current browser and does not send them to an AI model or a server.

## Why this approach

Legal-tech projects such as Clearclaim show the value of guiding people through a specific legal workflow, while FairVio highlights how important accessibility is for underserved workers. General gig-work tools such as Gridwise focus on cross-platform income insights, market comparisons, mileage, and expenses; Everlance focuses on mileage and expense records. UpahKit focuses on a different, narrower step: turning job-by-job agreements, partial payments, due dates, and evidence notes into a reviewable timeline. The core calculation is deterministic, and each amount can be traced back to the user-entered record.

## How to try it

Open `index.html` in a modern browser, or run `python3 -m http.server 4173` from the project folder and visit `http://localhost:4173`.

Suggested demo: show the RM404.00 sample balance, add a fictional unpaid shift, filter to unpaid work, record a partial payment, then print the updated summary.

## Built with

HTML, CSS, JavaScript, browser `localStorage`, CSV download, and the browser print dialog. Playwright with Firefox is used for development-only end-to-end checks. No external API, paid service, or AI model is required at runtime.

## Safety and limitations

UpahKit is a record-keeping prototype, not legal advice. Its totals are user-entered estimates; they do not decide whether someone is an employee or contractor, whether a payment is legally owed, or whether it can be recovered. It records the type of proof a user has but does not upload files. The sample data is fictional. Any future legal guidance or referral flow needs review against current Malaysian sources by qualified advisers.

## Demo video outline (about 2 minutes)

1. **The situation (20 sec):** a worker has completed shifts but the work details and payments are spread across apps and messages.
2. **The overview (20 sec):** show agreed earnings, received payments, and the outstanding estimate, and explain the simple calculation.
3. **Add a record (35 sec):** enter a fictional shift and agreed rate, note that no payment arrived, and record the evidence type.
4. **Update a payment (25 sec):** open the record, add a partial payment, and show the updated balance and status.
5. **Take the information with you (20 sec):** export CSV or print the adviser-ready summary.
6. **State the limits (10 sec):** records remain in this browser; the estimate is not a legal determination.

## Inspiration and references

- [LexHack 2026 challenge and judging criteria](https://lexhack-2026.devpost.com/)
- [Clearclaim — SMU LIT Legal-Tech Hackathon 2026, first place](https://devpost.com/software/claimwarrior)
- [FairVio — legal assistance for migrant workers](https://devpost.com/software/hack-the-globe-2025)
- [Lawgorithm — legal workflow automation award winner](https://devpost.com/software/lawgorithm-815k2x)
- [Gridwise — gig and hourly worker earnings app](https://gridwise.io/)
- [Everlance — mileage and expense tracking](https://www.everlance.com/)
- [JTKSM — Department of Labour Peninsular Malaysia](https://jtksm.mohr.gov.my/)
