# LexHack Project Instructions

## Project

Build a hackathon prototype for gig workers and freelancers in Malaysia to organize work, income, and unpaid wages. The working concept is **UpahKit**: a clear, mobile-friendly evidence organizer that turns fragmented order, hours, and payment records into a reviewable claim summary.

## Product goals

- Let a worker record jobs, hours, agreed pay, amounts received, dates, and notes.
- Calculate outstanding amounts transparently from the entered records.
- Show a timeline and an evidence checklist so users can see what supports each entry and what is missing.
- Produce a shareable, printable case summary for discussion with a union, legal aid provider, or other qualified adviser.
- Make the demo useful without requiring an account, paid API, or real personal data.

## Legal and safety boundaries

- This is an information and record-keeping tool, not a lawyer or a source of legal advice.
- Do not claim that a recorded amount is legally recoverable or that a user is an employee/contractor. Label calculations as user-entered estimates.
- Keep the prototype focused on Malaysia. Any legal or procedural statements must be linked to an authoritative, current source and dated; otherwise present them as questions for an adviser.
- Do not send user records to external services. Use fictional sample data in the demo and avoid collecting sensitive identifiers.
- Make corrections and uncertainty visible. Never invent missing dates, hours, agreements, or evidence.

## UX and visual direction

- Prioritize a quick, understandable mobile-first workflow for users who may be stressed or have limited time.
- Use plain English with clear currency formatting in MYR; keep labels concise and explain calculations inline.
- The interface should feel calm, trustworthy, and practical, with an obvious distinction between confirmed entries, estimates, and missing evidence.
- Core demo path: inspect sample records → add or edit a job/payment → review outstanding balance and evidence gaps → export/print a summary.

## Engineering

- Inspect the existing project before choosing or changing frameworks. Keep the first version small and runnable locally.
- Prefer existing dependencies and open-source components already in the project; avoid paid services and unnecessary infrastructure.
- Keep calculations deterministic and separately understandable from any AI feature. Do not make an LLM necessary for the core workflow.
- Preserve user changes and avoid destructive commands.
- Do not add or run tests unless the user requests testing or verification.

## Hackathon presentation

- Tell one concrete story: a gig worker has work records in several places and cannot quickly explain what remains unpaid.
- Demonstrate the full workflow with fictional data, explain how each total is calculated, and show the generated evidence summary.
- Be explicit about prototype limits, data sources, and any AI or third-party tools used.
