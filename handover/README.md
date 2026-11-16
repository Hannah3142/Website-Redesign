# Te Wāhi Ora website — handover

Paused **November 2026**.

If you are new to this work: you are looking at a **design phase**, not a finished website. The files in this folder were made so people could click around and decide how a new Te Wāhi Ora site should *feel* and how the pages should hang together. **The real site will be built in WordPress.** Nothing here is connected to the live site, and none of this layout or copy has been signed off as final.

The live site, which stays as it is until WordPress is ready, is [https://www.tewahiora.co.nz/](https://www.tewahiora.co.nz/).

Write the name **Te Wāhi Ora** with the macron. The logo itself does not have a macron.

## What to open

| File | What it is |
| --- | --- |
| [preview/index.html](preview/index.html) | Clickable design preview (the option we were improving) |
| [Te-Wahi-Ora-brief.pdf](Te-Wahi-Ora-brief.pdf) | Original website brief / intake |
| [Website-Initial-Content-and-Design-Direction-9-Sep-2026.pdf](Website-Initial-Content-and-Design-Direction-9-Sep-2026.pdf) | Jordan’s content and design direction (September 2026) |
| [Brand-style-guide-outlined.pdf](Brand-style-guide-outlined.pdf) | Colour and logo (The Bespoke Designer) |
| [still-open.md](still-open.md) | What is still open: unanswered questions, leftover meeting notes, booking and payment ideas |
| [booking-proposal/index.html](booking-proposal/index.html) | Visual draft of a booking and payment idea (not decided — also summarised in still-open.md) |

To view the preview on your own computer, open a terminal in this `handover` folder and run:

```bash
python3 -m http.server 8766
```

Then open `http://127.0.0.1:8766/preview/index.html` in a browser. Click the green header to move between pages. The address bar will show hashes such as `#home` or `#retreats` — that is only how this static preview works. WordPress will use real page URLs instead.

## How far the preview got

The look and the page structure have been **somewhat refined** for:

- **Home**
- **All Stay pages** (Stay overview, the individual room pages, and Nourishment)
- **What we offer** overview

Other pages in the preview are still rough: About, Library, Support, Book, Hire, the individual event pages, and Check In (Check In is further along than the rest of that list, but not finished). A lot of the writing is still placeholder Latin, or first-draft wording that has **not** been reviewed by Jordan. Real client copy is meant to be supplied and rewritten later.

This preview is ordinary HTML, CSS and a little JavaScript. It is a picture of a site, so that WordPress can be built to match it — it is not a custom application, and it should not be turned into one.

## People (so you know who to write to)

- **Jordan Good** — the project contact. She chooses, or mixes, what goes forward. `jordangood2067@gmail.com`
- **Harper Digital** — reviews the work, and would be the people to ask about WordPress and booking tools
- **Hans** — please CC him on emails to Jordan or Harper (`23486@tgs.school.nz`)
- **Hannah** — made this design preview as unpaid / learning work

Public contact for the house (from Jordan’s answers): tewahiora@gmail.com · 022 078 5757 · landline 09 812 8775 (forwards to the mobile) · 129 Marine Parade North, Piha Beach, Auckland.
