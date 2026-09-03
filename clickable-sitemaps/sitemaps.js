/* global SITEMAPS */
var EVENT_HEADINGS = [
  "When",
  "Who it is for",
  "What happens",
  "Cost / koha",
  "Stay overnight or come for the day",
  "How to book"
];

var EVENTS = [
  { id: "event-grief", title: "Supporting Grief 2026" },
  { id: "event-writing", title: "Women’s Writing Weekends 2026" },
  { id: "event-nature", title: "Nature Immersion Weekends 2026" },
  { id: "event-moving-on", title: "Moving On Weekend Retreat" },
  { id: "event-finances", title: "A Woman’s Finances" },
  { id: "event-sewing", title: "[Creative Sewing Weekend]" },
  { id: "event-surfing", title: "[Women’s Surfing Weekends]" },
  { id: "event-roots", title: "[Exploring Our Roots]" }
];

function eventPages() {
  var pages = {};
  EVENTS.forEach(function (ev) {
    pages[ev.id] = {
      title: ev.title,
      headings: EVENT_HEADINGS
    };
  });
  return pages;
}

function eventLinks() {
  return EVENTS.map(function (ev) {
    return { label: ev.title, page: ev.id };
  });
}

var FOOTER_LINKS_BASE = [
  { label: "Book a stay", page: "book" },
  { label: "Donate", page: "donate" },
  { label: "Next Check In", page: "check-in" },
  { label: "Newsletter", page: "newsletter" },
  { label: "Cancellation policy", page: "cancellation" },
  { label: "Do you need help?", page: "need-help" },
  { label: "[Links]", page: "links" },
  { label: "[Bev’s Blog]", href: "https://beverly-holt.tewahiora.co.nz/" },
  { label: "[Many Paths Many Voices]", href: "https://writers.tewahiora.co.nz/" }
];

var SITEMAPS = {
  1: {
    name: "Sitemap 1 — Guest product",
    home: "home",
    header: [
      { type: "dropdown", label: "Stay", page: "stay", items: [
        { label: "Stay (whole page)", page: "stay" },
        { label: "Rooms and prices", page: "stay", hash: "rooms" },
        { label: "Food", page: "stay", hash: "food" },
        { label: "While you’re here", page: "stay", hash: "extras" },
        { label: "About Piha", page: "stay", hash: "piha" },
        { label: "Gift a stay", page: "stay", hash: "gift" },
        { label: "Book the location / groups", page: "stay", hash: "groups" },
        { label: "Cancellation", page: "stay", hash: "cancellation" }
      ]},
      { type: "dropdown", label: "What’s on", page: "whats-on", items: [
        { label: "What’s on", page: "whats-on" },
        { label: "Check In", page: "check-in" },
        { label: "Calendar", page: "calendar" }
      ].concat(eventLinks()) },
      { type: "dropdown", label: "About", page: "about", items: [
        { label: "About us", page: "about" },
        { label: "Our name", page: "our-name" },
        { label: "Our ethos", page: "our-ethos" },
        { label: "Our beliefs", page: "our-beliefs" },
        { label: "Our vision", page: "our-vision" },
        { label: "Our guests / patrons", page: "patrons" },
        { label: "Testimonials", page: "testimonials" }
      ]},
      { type: "dropdown", label: "Support us", page: "support", items: [
        { label: "How to give", page: "support" },
        { label: "400 × $10", page: "four-hundred" },
        { label: "The Wynsome Fund", page: "wynsome" },
        { label: "Give time", page: "give-time" },
        { label: "Bequests", page: "bequests" },
        { label: "Thanking our supporters", page: "thank-you" }
      ]},
      { type: "cta", label: "Book a stay", page: "book" },
      { type: "cta", label: "Donate", page: "donate" }
    ],
    footer: FOOTER_LINKS_BASE,
    pages: Object.assign({
      home: {
        title: "Home",
        headings: [
          "Hero: house / beach / women + tagline",
          "Buttons: Book a stay | See rooms | Free Check In",
          "What this is (women, Piha, meals included)",
          "Healing / rest / community (second band, not the top)",
          "Rooms from $X, meals in, subsidy in one line",
          "Next Check In (date + free, RSVP)",
          "This month’s retreat weekend",
          "Gift a stay",
          "Support strip: 400×$10 + Wynsome",
          "One guest quote"
        ]
      },
      stay: {
        title: "Stay",
        headings: [
          "Book this stay (button)",
          "Rooms and prices (Accommodation + Retreat Rates, merged)",
          "What is included (meals, linen, facilities)",
          "Subsidised stays",
          "Day stay",
          "Food",
          "While you’re here (counselling, massage, Reiki, yoga, walks)",
          "About Piha",
          "Gift a stay",
          "Book the location — groups and facilitators",
          "Cancellation policy",
          "Book this stay (button again)"
        ]
      },
      "whats-on": {
        title: "What’s on",
        headings: [
          "Next Check In",
          "Upcoming retreat weekends",
          "Link to full calendar",
          "Link to Check In page (info + RSVP)"
        ]
      },
      "check-in": {
        title: "Check In",
        headings: [
          "What Check In is (free, last weekend of the month)",
          "Who it is for",
          "Timetable",
          "2026 dates",
          "Stay overnight on a Check In weekend (link to Stay)",
          "RSVP form: name, email, phone, Saturday or Sunday, lunch, message"
        ]
      },
      calendar: {
        title: "Events calendar",
        headings: [
          "Year / month view as cards (not a prose dump)",
          "Check In dates",
          "Themed weekends (links to each event page)",
          "[Older events archive]"
        ]
      },
      about: {
        title: "About us",
        headings: [
          "Who Te Wāhi Ora is",
          "Women for women, charitable trust",
          "What we are not (if they agree: not a clinic / refuge)",
          "Links to name, ethos, beliefs, vision"
        ]
      },
      "our-name": { title: "Our name", headings: ["Meaning of Te Wāhi Ora", "Te Kawerau ā Maki (kept, not the theme)", "Bev"] },
      "our-ethos": { title: "Our ethos", headings: ["From groups and workshops to rest", "Wynsome and Bev", "Where we are today"] },
      "our-beliefs": { title: "Our beliefs", headings: ["Everyday life as spiritual practice", "Choice while on retreat", "Dated July 2016 — [keep / shorten]"] },
      "our-vision": { title: "Our vision", headings: ["How it began", "Wynsome", "Letter from Bev — [December 2015]"] },
      patrons: { title: "Our guests / patrons", headings: ["What patrons are", "Anita Karauria", "Angela Walter"] },
      testimonials: { title: "Testimonials", headings: ["Guest quotes", "[I go alone]"] },
      support: {
        title: "Support us — how to give",
        headings: [
          "Why give",
          "One-off donation (NZ bank + international)",
          "Give a Little",
          "Monthly 400×$10 (link)",
          "Wynsome Fund (link)",
          "Gift a stay (same voucher content)",
          "Volunteer / donated time (link)"
        ]
      },
      donate: {
        title: "Donate",
        headings: [
          "Same content as How to give (this is the header button)",
          "One-off",
          "Recurring",
          "Give a Little",
          "Tax receipt"
        ]
      },
      "four-hundred": { title: "400 × $10", headings: ["What it pays for", "How to set up $10 / month", "Tax receipt"] },
      wynsome: { title: "The Wynsome Fund", headings: ["Who Wynsome was", "Sponsored stays", "How to give to this fund"] },
      "give-time": { title: "Give time", headings: ["Volunteer programme", "Donated time", "How to offer"] },
      bequests: { title: "Bequests", headings: ["Leaving a gift in a will", "Contact"] },
      "thank-you": { title: "Thanking our supporters", headings: ["Donors, funders, organisations", "[Project Dishwasher]"] },
      book: {
        title: "Book a stay",
        headings: [
          "This is a request, not live availability",
          "Name, email, phone",
          "Arrival / departure",
          "Which room",
          "Dietary needs",
          "Message",
          "Note: 2-night weekends, pregnancy, no EFTPOS"
        ]
      },
      "group-hire": {
        title: "Book the location (groups)",
        headings: ["Who this is for (aligned groups / facilitators)", "Capacity", "What is included", "Enquiry form"]
      },
      newsletter: { title: "Newsletter", headings: ["What the letter is", "Sign-up form"] },
      cancellation: { title: "Cancellation policy", headings: ["Notice", "Deposits", "How to cancel"] },
      "need-help": { title: "Do you need help?", headings: ["If you are in crisis", "What Te Wāhi Ora can and cannot offer", "NZ helplines — if they agree"] },
      links: { title: "[Links]", headings: ["External / related links"] }
    }, eventPages())
  },

  2: {
    name: "Sitemap 2 — Diary first",
    home: "home",
    header: [
      { type: "dropdown", label: "This month", page: "this-month", items: [
        { label: "This month", page: "this-month" },
        { label: "Calendar", page: "calendar" }
      ].concat(eventLinks()) },
      { type: "link", label: "Check In", page: "check-in" },
      { type: "dropdown", label: "Stay", page: "stay", items: [
        { label: "Stay", page: "stay" },
        { label: "Hire the house", page: "group-hire" }
      ]},
      { type: "link", label: "About", page: "about" },
      { type: "cta", label: "RSVP / Book", page: "book-or-rsvp" },
      { type: "cta", label: "Donate", page: "donate" }
    ],
    footer: FOOTER_LINKS_BASE.concat([{ label: "Hire the house", page: "group-hire" }]),
    pages: Object.assign({
      home: {
        title: "Home (the diary)",
        headings: [
          "Next date, large: Check In or named weekend",
          "Buttons: RSVP or Book that weekend",
          "Strip of upcoming cards",
          "Or come any time for a rest stay → Stay",
          "One photo of the house",
          "Donate / volunteer line",
          "Short FAQ: who it’s for (healing here, not a sermon)"
        ]
      },
      "this-month": {
        title: "This month",
        headings: [
          "Everything happening soon, as cards",
          "Check In this month",
          "Retreat weekends this month",
          "Link to full calendar"
        ]
      },
      calendar: {
        title: "Events calendar",
        headings: [
          "Cards for the year",
          "Check In dates",
          "Themed weekends",
          "[Older events archive]"
        ]
      },
      "check-in": {
        title: "Check In",
        headings: [
          "What Check In is",
          "Timetable",
          "Dates",
          "RSVP form on this page"
        ]
      },
      stay: {
        title: "Stay",
        headings: [
          "Rooms and prices (merged)",
          "What’s included (food + extras)",
          "About Piha",
          "Gift a stay",
          "Hire the house (groups)",
          "Cancellation",
          "Book a stay form (or button to Book)"
        ]
      },
      "group-hire": {
        title: "Hire the house",
        headings: ["Aligned groups and facilitators", "Capacity", "Enquiry form"]
      },
      about: {
        title: "About (one long page)",
        headings: [
          "About us",
          "Our name",
          "Our ethos",
          "Our beliefs",
          "Our vision",
          "Our guests / patrons",
          "Testimonials (+ [I go alone])",
          "[Links]"
        ]
      },
      "book-or-rsvp": {
        title: "RSVP / Book",
        headings: [
          "Choose: Check In RSVP or book a stay",
          "Or two short forms on one page"
        ]
      },
      book: {
        title: "Book a stay",
        headings: ["Request dates", "Room", "Diet", "Message"]
      },
      donate: {
        title: "Donate",
        headings: [
          "One-off",
          "Recurring 400×$10",
          "Wynsome",
          "Bequests",
          "Give a Little",
          "Thanking supporters",
          "[Project Dishwasher]",
          "Volunteer / donated time"
        ]
      },
      newsletter: { title: "Newsletter", headings: ["Sign-up form"] },
      cancellation: { title: "Cancellation policy", headings: ["Policy headings"] },
      "need-help": { title: "Do you need help?", headings: ["Crisis vs retreat", "Helplines"] },
      links: { title: "[Links]", headings: ["External links"] },
      "four-hundred": { title: "400 × $10", headings: ["Monthly giving"] },
      wynsome: { title: "The Wynsome Fund", headings: ["Sponsored stays"] },
      "give-time": { title: "Give time", headings: ["Volunteer", "Donated time"] },
      bequests: { title: "Bequests", headings: ["Wills"] },
      "thank-you": { title: "Thanking our supporters", headings: ["Names / organisations", "[Project Dishwasher]"] }
    }, eventPages())
  },

  3: {
    name: "Sitemap 3 — Come / Help",
    home: "home",
    header: [
      { type: "dropdown", label: "Come", page: "come", items: [
        { label: "Come (whole hub)", page: "come" },
        { label: "Stay", page: "come", hash: "stay" },
        { label: "Check In", page: "come", hash: "check-in" },
        { label: "Events", page: "come", hash: "events" },
        { label: "The place (Piha)", page: "come", hash: "piha" },
        { label: "Our story", page: "come", hash: "story" },
        { label: "Groups / book the location", page: "group-hire" }
      ].concat(eventLinks()) },
      { type: "dropdown", label: "Help", page: "help", items: [
        { label: "Help (whole hub)", page: "help" },
        { label: "Donate money", page: "help", hash: "money" },
        { label: "400 × $10", page: "help", hash: "monthly" },
        { label: "Wynsome Fund", page: "help", hash: "wynsome" },
        { label: "Bequests", page: "help", hash: "bequests" },
        { label: "Gift a stay", page: "help", hash: "gift" },
        { label: "Give time", page: "help", hash: "time" },
        { label: "Thanking supporters", page: "help", hash: "thanks" }
      ]},
      { type: "cta", label: "Book a stay", page: "book" },
      { type: "cta", label: "Give", page: "help" }
    ],
    footer: FOOTER_LINKS_BASE.concat([{ label: "Come", page: "come" }, { label: "Help", page: "help" }, { label: "Book the location", page: "group-hire" }]),
    pages: Object.assign({
      home: {
        title: "Home (sorter only)",
        headings: [
          "Photo of Piha / the house",
          "Door: I want to come",
          "Door: I want to help",
          "Facilitators: you can book the house",
          "One sentence on healing / rest (under the doors, not the hero)"
        ]
      },
      come: {
        title: "Come",
        headings: [
          "Stay: rooms and prices",
          "Stay: food and extras",
          "Stay: gift a stay",
          "Stay: cancellation",
          "Check In: what it is + timetable + dates",
          "Check In: RSVP form (on this page)",
          "Events: calendar + links to event pages",
          "The place: About Piha",
          "Our story: About us, name, ethos, beliefs, vision, patrons, testimonials [I go alone]",
          "Practical: getting here, Do you need help?, newsletter",
          "Groups and facilitators — book the location"
        ]
      },
      help: {
        title: "Help",
        headings: [
          "How to donate (all methods + Give a Little)",
          "Monthly giving — 400 × $10",
          "The Wynsome Fund",
          "Bequests",
          "Gift a stay (same voucher as Come)",
          "Volunteer + donated time",
          "Thanking supporters",
          "[Project Dishwasher]",
          "Why this exists (short, for funders)"
        ]
      },
      book: {
        title: "Book a stay",
        headings: ["Request a room", "Dates", "Diet", "Message"]
      },
      "group-hire": {
        title: "Book the location",
        headings: ["Groups and facilitators", "Values fit", "Enquiry form"]
      },
      "check-in": {
        title: "Check In (also a section on Come)",
        headings: ["Same headings as the Check In block on Come", "RSVP form"]
      },
      calendar: { title: "Events calendar", headings: ["All upcoming weekends", "Links to event pages"] },
      newsletter: { title: "Newsletter", headings: ["Sign-up form"] },
      cancellation: { title: "Cancellation policy", headings: ["Policy"] },
      "need-help": { title: "Do you need help?", headings: ["Crisis vs retreat"] },
      links: { title: "[Links]", headings: ["External links"] },
      donate: { title: "Give", headings: ["Jumps to Help — donate money"] }
    }, eventPages())
  }
};
