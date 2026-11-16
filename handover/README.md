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

## Still open

- **Copy:** almost all of it will be rewritten. About will be rewritten — they can write it, or someone can draft for them to correct.
- **Newsletter archive:** the newsletter is active (heading toward about monthly). Whether past issues should live on the website is still open.
- **Cookbook:** Jordan’s written answer said digital; the live site still describes a printed book at $20 plus postage, proceeds to the Trust. Also still to discuss: “ask us” versus a small shop. Gift vouchers stay with Support; the cookbook stays with Nourishment.
- **Photos:** they can supply a larger, more recent set.
- **Booking tools:** they would like something easier than email-and-wait. Budget is open. Not decided.
- **Look:** keep using images on purpose so the eye has somewhere to land. An earlier version felt too clean / too even.
- **Support:** look into whether WordPress can simply do Women’s Healing Sanctuary-style extras (counting numbers, on-site donation, “adopt a cost,” a rolling donor banner). Not checked yet.
- **Cancellation:** keep a short paragraph plus a link on the Book page itself, not only in the footer.
- **Still to ask Jordan** (and double-check with Bev): how they want to handle trans people / wording, including anything in a FAQ.
