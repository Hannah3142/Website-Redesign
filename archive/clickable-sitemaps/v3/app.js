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
  "Cost (day / overnight if relevant)",
  "Book (button) — pre-selects this event; ask if they want a room or day only"
];

function pages() {
  var all = {
    home: {
      title: "Home",
      headings: [
        "Hero image (one still) + catch phrase (e.g. a place to belong to while moving into wholeness)",
        "Short description under it: women-only charitable retreat in Piha — rest, meals, optional programmes",
        "On / just under the hero: Book (button) · What’s on (link)",
        "Three ways to come (boxes, each links through): Stay without an event · Check In · Events / weekends",
        "Money: from $X including meals · funded / subsidised stays if cost is a barrier",
        "Guest testimonial",
        "FAQ (who it’s for, come without an event?, come alone?, day vs night, not a clinic — if they agree)",
        "Support (button) — short strip"
      ]
    },
    stay: {
      title: "Stay",
      headings: [
        "Mood: photos of house, garden, beach (can rotate later — inviting, not a booking bar)",
        "You can come without an event",
        "Coming for Check In or a weekend? Book from What’s on — it will ask overnight or day",
        "Then the comparison table below (overnight / day / hire)"
      ]
    },
    "whats-on": {
      title: "What’s on",
      headings: [
        "You can also stay any time without an event → Stay",
        "Check In — what it is + dates (card: image, title, dates, short line, Book (button), Read more)",
        "Event cards — image, heading, date/time, short info, Book (button), Read more",
        "[Older events] as past cards or archive"
      ]
    },
    "check-in": {
      title: "Check In",
      headings: [
        "What it is",
        "Who it is for",
        "What happens / timetable",
        "When — dates",
        "Cost — free as a day visitor; overnight at usual room rates",
        "Book (button) — Check In + overnight or day only"
      ]
    },
    about: {
      title: "About",
      headings: [
        "Who we are",
        "Who it is for (and who it is not, if they agree)",
        "Our name",
        "How it began (short)",
        "How we work — care, rest, women together (rewritten values, not the 2016 essay)",
        "People — Bev, patrons, the wider circle",
        "Charitable trust"
      ]
    },
    support: {
      title: "Support us",
      headings: [
        "Why this place needs money and time (one section)",
        "One-off donation (button → online payment)",
        "Monthly 400 × $10 (button)",
        "Fund a stay / Wynsome (button)",
        "Give a Little (button)",
        "Volunteer / donated time",
        "Bequests",
        "Thank you to donors, funders, volunteers, organisations",
        "[Project Dishwasher]"
      ]
    },
    book: {
      title: "Book",
      headings: [
        "Not a live room calendar — staff confirm the date (small house)",
        "What are you booking? (dropdown: rest stay / day stay / Check In / a listed event / hire the house)",
        "If event or Check In: overnight or day only",
        "Name, email, phone, dates",
        "Room (if overnight)",
        "Diet",
        "Message",
        "Payment — online (and bank transfer if they keep it). Weekend two-night rule, pregnancy note"
      ]
    },
    "group-hire": {
      title: "Hire the house",
      headings: ["Aligned groups and facilitators", "Capacity", "Enquiry"]
    },
    contact: {
      title: "Contact",
      headings: [
        "Address, phone, emails",
        "Getting here / Piha Rides",
        "Contact form (not a booking — booking uses Book)",
        "Do you need help? / crisis line (if they agree)"
      ]
    },
    newsletter: { title: "Newsletter", headings: ["What you get", "Sign-up"] },
    cancellation: { title: "Cancellation policy", headings: ["Notice", "Deposits / refunds", "How to cancel"] },
    "need-help": { title: "Do you need help?", headings: ["What we can offer", "What we are not", "Helplines"] },
    links: { title: "[Links]", headings: ["External links"] },
    blog: {
      title: "[Blog]",
      headings: ["Only if they will keep posting", "Index of posts", "Or keep linking out to Bev’s existing blog"]
    }
  };

  EVENTS.forEach(function (ev) {
    all[ev.id] = { title: ev.title, headings: EVENT_HEADINGS };
  });
  return all;
}

var PAGES = pages();

function parseHash() {
  return (location.hash || "#home").replace(/^#/, "") || "home";
}

function pageHref(id) {
  return "#" + id;
}

function el(tag, attrs, kids) {
  var n = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs.html;
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

  var drop = el("details");
  drop.appendChild(el("summary", { text: "What’s on" }));
  var box = el("div");
  box.appendChild(el("div", null, [link("What’s on (all cards)", "whats-on", false)]));
  box.appendChild(el("div", null, [link("Check In", "check-in", false)]));
  EVENTS.forEach(function (ev) {
    box.appendChild(el("div", null, [link(ev.title, ev.id, false)]));
  });
  drop.appendChild(box);
  nav.appendChild(drop);

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
  f.appendChild(el("p", { text: "129 Marine Parade North, Piha · phone · emails" }));
  var ul = el("ul");
  [
    ["Book", "book", true],
    ["Support", "support", true],
    ["Contact", "contact", false],
    ["Newsletter", "newsletter", false],
    ["Cancellation policy", "cancellation", false],
    ["Do you need help?", "need-help", false],
    ["[Blog]", "blog", false],
    ["[Links]", "links", false]
  ].forEach(function (item) {
    ul.appendChild(el("li", null, [link(item[0], item[1], item[2])]));
  });
  f.appendChild(ul);
}

function stayTable() {
  var table = el("table");
  var head = el("tr");
  ["", "Overnight rest stay", "Day stay", "Hire the house"].forEach(function (t) {
    head.appendChild(el("th", { text: t }));
  });
  table.appendChild(el("thead", null, [head]));
  var rows = [
    ["Who", "A woman coming to rest, with or without an event", "A woman coming for the day only", "A group or facilitator whose kaupapa fits"],
    ["Length", "One or more nights (weekends: Fri + Sat nights)", "About 9:30am–5:30pm", "By arrangement"],
    ["Rooms / price", "Named rooms, from $X including meals", "$60 including lunch — no room list", "Whole house / capacity — price by enquiry"],
    ["Included", "Meals, linen, facilities, food", "Lunch, snacks, facilities — no linen", "To be confirmed with them"],
    ["While you’re here / Piha", "Yes", "Yes", "Yes, if the group wants it"],
    ["Gift a stay", "Voucher for a night (or day)", "Day voucher possible", "—"],
    ["If cost is a barrier", "Subsidised / Wynsome — ask", "Ask", "—"],
    ["Book", "Book (button) → rest stay", "Book (button) → day stay", "Hire enquiry (button)"]
  ];
  var body = el("tbody");
  rows.forEach(function (r) {
    var tr = el("tr");
    r.forEach(function (cell, i) {
      tr.appendChild(el(i === 0 ? "th" : "td", { text: cell }));
    });
    body.appendChild(tr);
  });
  table.appendChild(body);
  return table;
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
  document.title = page.title + " — Chosen sitemap v3";
  main.appendChild(el("h1", { text: page.title }));

  var ol = el("ol");
  page.headings.forEach(function (h) {
    ol.appendChild(el("li", null, [el("h2", { text: h })]));
  });
  main.appendChild(ol);

  if (id === "stay") {
    main.appendChild(el("h2", { text: "If you choose each option, the page would show:" }));
    main.appendChild(stayTable());
    main.appendChild(el("p", null, [link("Hire enquiry", "group-hire", true)]));
  }

  if (id === "whats-on") {
    main.appendChild(el("p", { text: "Cards / dropdown targets:" }));
    var ul = el("ul");
    ul.appendChild(el("li", null, [link("Check In", "check-in", false), document.createTextNode(" "), link("Book", "book", true)]));
    EVENTS.forEach(function (ev) {
      var li = el("li");
      li.appendChild(link(ev.title, ev.id, false));
      li.appendChild(document.createTextNode(" "));
      li.appendChild(link("Book", "book", true));
      ul.appendChild(li);
    });
    main.appendChild(ul);
  }
}

function render() {
  renderHeader();
  renderMain();
  renderFooter();
}

window.addEventListener("hashchange", render);
if (!location.hash) location.hash = "#home";
else render();
