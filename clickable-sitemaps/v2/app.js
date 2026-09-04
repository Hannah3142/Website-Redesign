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

var EVENT_HEADINGS = [
  "What it is",
  "Who it is for",
  "What happens",
  "When",
  "Cost",
  "Book (button) — same form idea as Check In: the event, optional room"
];

function pages() {
  var all = {
    home: {
      title: "Home",
      headings: [
        "Hero: one still image (house or beach or women — not a slideshow)",
        "On / just under the hero: Book (button) · See what’s on (link)",
        "What this is: women for women, Piha, meals, rest / healing / community",
        "You can come without an event: a night, several nights, or a day (weekend minimum two nights)",
        "If cost is a barrier, funded / subsidised stays exist",
        "Rooms from $X, meals included",
        "Next Check In / upcoming weekend (not the first thing on the page)",
        "Guest testimonial",
        "Support (button) — short strip only; full thanks live on Support"
      ]
    },
    stay: {
      title: "Stay",
      headings: [
        "Book (button) — top of page, not the middle",
        "You can come without an event; stay as long as there is a room",
        "Chooser: Overnight · Day stay · Hire the house",
        "Overnight — rooms and prices",
        "Overnight — gift a stay",
        "Day stay — hours, $60, lunch; no room list",
        "Hire the house — groups and facilitators + enquiry (button)",
        "What is included — meals / food, linen (overnight), facilities",
        "While you’re here — counselling, massage, Reiki, walks",
        "About Piha",
        "If you need help to come — subsidised stays / Wynsome (not “fund a stay for someone else”)",
        "Cancellation",
        "Book (button) — bottom of page"
      ]
    },
    "whats-on": {
      title: "What’s on",
      headings: [
        "You can also come any time without an event → Stay",
        "Check In — next date + what it is (link to Check In page)",
        "Upcoming retreats (this is Events + the 2026 calendar, one page — no extra calendar URL)",
        "Past / [older events]"
      ]
    },
    "check-in": {
      title: "Check In",
      headings: [
        "What it is",
        "Who it is for",
        "What happens / timetable",
        "When — 2026 dates + Book (button) next to dates",
        "Cost — free as a day visitor",
        "Book form on this page: which day(s), lunch, optional room / overnight, message"
      ]
    },
    about: {
      title: "About",
      headings: [
        "Jump links for this page (About us, Name, Ethos, Beliefs, Vision, Patrons, Testimonials)",
        "About us — first section open",
        "Our name — collapsible",
        "Our ethos — collapsible",
        "Our beliefs — collapsible (to be rewritten)",
        "Our vision — collapsible (to be rewritten)",
        "Our guests / patrons — collapsible",
        "Testimonials — collapsible, includes [I go alone]"
      ]
    },
    support: {
      title: "Support us",
      headings: [
        "Why money is needed",
        "Why time is needed",
        "One-off donation (button → online payment)",
        "Monthly 400 × $10 (button → online payment)",
        "Fund a stay / Wynsome (button → online payment)",
        "Give a Little (button)",
        "Gift a stay (link to voucher on Stay)",
        "Volunteer / donated time",
        "Bequests",
        "Thank you to donors, funders, volunteers, organisations",
        "[Project Dishwasher]"
      ]
    },
    book: {
      title: "Book a stay",
      headings: [
        "Request, not live calendar",
        "Overnight, day stay, or say you are coming for an event",
        "Name, email, phone",
        "Dates / which day",
        "Room (if overnight)",
        "Diet",
        "Message",
        "Weekend two-night minimum, pregnancy, payment (no EFTPOS)"
      ]
    },
    "group-hire": {
      title: "Hire the house",
      headings: [
        "Aligned groups and facilitators",
        "Capacity",
        "Enquiry form (button send)"
      ]
    },
    newsletter: { title: "Newsletter", headings: ["What you get", "Sign-up form (button)"] },
    cancellation: { title: "Cancellation policy", headings: ["Notice", "Deposits", "How to cancel"] },
    "need-help": {
      title: "Do you need help?",
      headings: ["What this place can offer", "What it is not (if they agree)", "NZ helplines"]
    },
    links: { title: "[Links]", headings: ["External / related links"] }
  };

  EVENTS.forEach(function (ev) {
    all[ev.id] = { title: ev.title, headings: EVENT_HEADINGS };
  });
  return all;
}

var PAGES = pages();

function parseHash() {
  var id = (location.hash || "#home").replace(/^#/, "") || "home";
  return id;
}

function pageHref(id) {
  return "#" + id;
}

function el(tag, attrs, kids) {
  var n = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
  }
  (kids || []).forEach(function (c) {
    if (c) n.appendChild(c);
  });
  return n;
}

function link(label, page, isButton) {
  var a = el("a", { href: pageHref(page), text: label });
  if (isButton) a.className = "btn";
  return a;
}

function renderHeader() {
  var nav = document.getElementById("header-nav");
  nav.innerHTML = "";
  nav.appendChild(link("Home", "home", false));
  nav.appendChild(link("Stay", "stay", false));
  nav.appendChild(link("What’s on", "whats-on", false));
  nav.appendChild(link("About", "about", false));
  nav.appendChild(document.createTextNode(" "));
  nav.appendChild(link("Book", "book", true));
  nav.appendChild(document.createTextNode(" "));
  nav.appendChild(link("Support", "support", true));
}

function renderFooter() {
  var f = document.getElementById("footer");
  f.innerHTML = "";
  f.appendChild(el("h2", { text: "Footer" }));
  f.appendChild(el("p", { text: "129 Marine Parade North, Piha · one phone · bookings email · general email" }));
  f.appendChild(el("p", { text: "Facebook · Instagram" }));
  var ul = el("ul");
  [
    ["Book", "book", true],
    ["Support", "support", true],
    ["Newsletter", "newsletter", false],
    ["Cancellation policy", "cancellation", false],
    ["Do you need help?", "need-help", false],
    ["[Links]", "links", false]
  ].forEach(function (item) {
    ul.appendChild(el("li", null, [link(item[0], item[1], item[2])]));
  });
  var blogs = el("li");
  blogs.appendChild(el("a", { href: "https://beverly-holt.tewahiora.co.nz/", text: "[Bev’s Blog]", target: "_blank", rel: "noopener" }));
  blogs.appendChild(document.createTextNode(" · "));
  blogs.appendChild(el("a", { href: "https://writers.tewahiora.co.nz/", text: "[Many Paths Many Voices]", target: "_blank", rel: "noopener" }));
  ul.appendChild(blogs);
  f.appendChild(ul);
}

function extraLinks(id) {
  if (id === "whats-on") {
    var wrap = el("div");
    wrap.appendChild(el("p", { text: "On this diary:" }));
    var ul = el("ul");
    ul.appendChild(el("li", null, [link("Check In", "check-in", false)]));
    EVENTS.forEach(function (ev) {
      ul.appendChild(el("li", null, [link(ev.title, ev.id, false)]));
    });
    wrap.appendChild(ul);
    return wrap;
  }
  if (id === "stay") {
    var s = el("p");
    s.appendChild(link("Hire enquiry", "group-hire", true));
    return s;
  }
  return null;
}

function renderMain() {
  var id = parseHash();
  var page = PAGES[id];
  var main = document.getElementById("main");
  main.innerHTML = "";
  if (!page) {
    main.appendChild(el("h1", { text: "Unknown page" }));
    main.appendChild(link("Home", "home", false));
    return;
  }
  document.title = page.title + " — Chosen sitemap v2";
  main.appendChild(el("h1", { text: page.title }));
  var ol = el("ol");
  page.headings.forEach(function (h) {
    ol.appendChild(el("li", null, [el("h2", { text: h })]));
  });
  main.appendChild(ol);
  var extra = extraLinks(id);
  if (extra) main.appendChild(extra);
}

function render() {
  renderHeader();
  renderMain();
  renderFooter();
}

window.addEventListener("hashchange", render);
if (!location.hash) location.hash = "#home";
else render();
