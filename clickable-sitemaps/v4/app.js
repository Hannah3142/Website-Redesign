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

var EVENT_BLOCKS = [
  { heading: "What it is", body: "A few sentences on this weekend’s purpose." },
  { heading: "Who it is for", body: "Who would feel at home here, without implying everyone else is excluded." },
  { heading: "What happens", body: "Shape of the days — not a minute-by-minute timetable unless they have one." },
  { heading: "When", body: "Dates and arrival/departure times." },
  { heading: "The place", body: "Short pointer: rooms, meals and Piha are on Stay — you still sleep and eat here as an overnight or day guest." },
  { heading: "Cost", body: "Programme fee or koha if any, plus overnight vs day rates (or “usual stay rates”)." },
  { heading: "Book", body: "Button. Form asks: this event, then overnight or day only, then room if overnight." }
];

function eventPages() {
  var o = {};
  EVENTS.forEach(function (ev) {
    o[ev.id] = { title: ev.title, blocks: EVENT_BLOCKS };
  });
  return o;
}

var PAGES = Object.assign({
  home: {
    title: "Home",
    blocks: [
      {
        heading: "Hero",
        body: "One still image. Catch phrase (their line on belonging / wholeness, or a new short line). Under it, one factual sentence: a women-only charitable retreat in Piha, with meals, rest, and optional programmes."
      },
      {
        heading: "Hero actions",
        body: "Book (button) and What we offer (link), on or just under the hero. Support stays in the header, not as a third hero button."
      },
      {
        heading: "Four ways to come",
        body: "Four boxes, equal weight: (1) Stay without an event — rest overnight or for a day. (2) Check In — free monthly gathering. (3) Events / weekends — themed retreats. (4) Hire the house — groups and facilitators. Each box: one line of contrast + link to Stay, Check In, What we offer, or Hire."
      },
      {
        heading: "Cost and access",
        body: "From $X a night including meals. Day stay $60. If money is the barrier, subsidised and funded stays exist — one sentence, not a full donate pitch."
      },
      {
        heading: "Guest testimonial",
        body: "One or two short quotes from women who have stayed. Not a wall of letters."
      },
      {
        heading: "FAQ",
        body: "Can I come without an event? Overnight or day if I join a weekend? Can I come alone? What if I cannot pay the full rate? Is this a clinic or refuge? (Last one only if they agree.)"
      },
      {
        heading: "Support",
        body: "Short strip + Support (button). Thanks and payment options live on the Support page."
      }
    ]
  },
  stay: {
    title: "Stay",
    blocks: [
      {
        heading: "Mood",
        body: "Photos of house, garden, beach, food — inviting, can rotate later. This page is for everyone who wants to know what it is like to be here, including women coming to Check In or a weekend."
      },
      {
        heading: "How a stay works",
        body: "You can rest here with no programme, or come for Check In / a themed weekend. Either way you are in the same house, eating the same meals. Overnight = you sleep here (weekends: Friday and Saturday nights). Day stay = 9:30am–5:30pm, no room. If you are booking a programme, pick overnight or day from that — it is only whether you sleep over, not a different place."
      },
      {
        heading: "Overnight, day, or hire",
        body: "Use the table below. Shared things (food, extras, Piha) sit in more than one column because they apply to more than one option. Gift a stay sits with overnight/day. Hire is groups, not a personal rest stay."
      }
    ]
  },
  "what-we-offer": {
    title: "What we offer",
    blocks: [
      {
        heading: "Also a rest stay",
        body: "You do not need a programme to come. Stay explains the house, rooms, food and Piha."
      },
      {
        heading: "Check In card",
        body: "Image, title, what it is in one line, next dates, Book (button), Read more → Check In page."
      },
      {
        heading: "Event cards",
        body: "Each weekend: image, heading, date/time, one-line info, Book (button), Read more → that event’s page. This page replaces the old Events list + 2026 calendar dump."
      },
      {
        heading: "Past programmes",
        body: "[Older events] in an archive if they still want them public."
      }
    ]
  },
  "check-in": {
    title: "Check In",
    blocks: [
      { heading: "What it is", body: "Free monthly gathering, last weekend of the month, Saturday and/or Sunday." },
      { heading: "Who it is for", body: "Women who want company, a Listener, and a light structure — not a course." },
      { heading: "What happens", body: "Timetable (morning tea, theme, Listener / beach / rest, lunch)." },
      { heading: "When", body: "The year’s dates." },
      { heading: "The place", body: "Same house as Stay. Day visitors are free. Overnight is a normal room booking." },
      { heading: "Cost", body: "Day: no charge. Overnight: usual stay rates / subsidy if needed." },
      { heading: "Book", body: "Button. Form: which day(s), lunch, overnight or day only, room if overnight." }
    ]
  },
  about: {
    title: "About",
    blocks: [
      {
        heading: "Who we are",
        body: "Women for women, Piha, charitable trust, the purpose of the place. Include the meaning of the name (Te Kawerau ā Maki, belonging / wholeness) as part of this story, not a separate page. Include values / how we work here too: rest, meals, listening, no one is taught a creed — rewritten, not the 2016 essay pasted in."
      },
      {
        heading: "Who it is for",
        body: "Women wanting rest, connection, or a programme. Who it is not (clinic, refuge, emergency) — only if they agree to say so."
      },
      {
        heading: "How it began",
        body: "Short origin: Bev, Wynsome, 1991, why the house exists. Not the full 2015 letter on the first screen; that can be “read more” if they want it kept."
      },
      {
        heading: "People",
        body: "Bev, patrons, the wider circle of cooks, Listeners, trustees — light, not a staff directory unless they want one."
      },
      {
        heading: "Charitable trust",
        body: "Registered charity, accessibility, how stays and donations connect. Deep donate path is Support, not here."
      }
    ]
  },
  news: {
    title: "News",
    blocks: [
      { heading: "Sign up", body: "Mailchimp / newsletter form — what they asked for in the brief." },
      { heading: "Letters and news", body: "Past newsletters on this site so they are not only in email." },
      { heading: "From Bev / the blog", body: "Bev’s writing and any ongoing posts, on this website (not only a separate subdomain). [Link out to the old blog if they still want that archive.]" }
    ]
  },
  support: {
    title: "Support us",
    blocks: [
      { heading: "Why we need support", body: "One section: money and time — meals, staff, subsidised stays, keeping the house going." },
      { heading: "Give money", body: "One-off (button → online pay). Monthly 400×$10 (button). Fund a stay / Wynsome (button). Give a Little (button). Gift vouchers are on Stay, not here." },
      { heading: "Give time", body: "Volunteer and donated time — what they actually need." },
      { heading: "Bequests", body: "Leaving a gift in a will." },
      { heading: "Thank you", body: "Donors, funders, volunteers, organisations. [Project Dishwasher] only if still relevant." }
    ]
  },
  book: {
    title: "Book",
    blocks: [
      {
        heading: "How booking works",
        body: "To confirm with them: the brief ticked optional Events calendar/tickets and an online booking system. Until they say otherwise, this page is a request they answer by email — not a live “room is free” calendar. Payment can still be online after they accept. Ask: live availability vs request; same or different for rest stay, Check In, paid weekends, hire."
      },
      {
        heading: "What are you booking?",
        body: "Dropdown: rest stay (no programme) / day stay / Check In / a listed event / hire the house. Check In is in this list. If they pick Check In or an event: overnight or day only."
      },
      {
        heading: "Your details",
        body: "Name, email, phone, dates, room if overnight, diet, message. Weekend two-night rule and pregnancy note."
      },
      {
        heading: "Payment",
        body: "If they want online pay: card/wallet here or after confirmation. Bank transfer can stay as a backup. “We have no EFTPOS” only if they still will not take cards."
      }
    ]
  },
  "group-hire": {
    title: "Hire the house",
    blocks: [
      { heading: "Who this is for", body: "Groups and facilitators whose purpose fits the Trust — not a party house." },
      { heading: "What you get", body: "The house, meals if agreed, capacity. Detail of rooms and Piha is on Stay." },
      { heading: "Enquire", body: "Form or the Book dropdown pre-set to hire." }
    ]
  },
  contact: {
    title: "Contact",
    blocks: [
      { heading: "Find us", body: "Address, one phone, bookings email, general email, map if useful, Piha Rides / getting here." },
      { heading: "Write to us", body: "Contact form for questions that are not a booking. Bookings use Book so they do not mix." },
      { heading: "Newsletter", body: "Short signup or link to News." },
      { heading: "If you need urgent help", body: "Only if they agree: we are not a crisis service + NZ helplines." }
    ]
  },
  newsletter: {
    title: "Newsletter",
    blocks: [{ heading: "Join the letter", body: "Same Mailchimp sign-up as News. Can redirect to News instead of a separate page." }]
  },
  cancellation: {
    title: "Cancellation policy",
    blocks: [{ heading: "The rules", body: "Notice, deposits, refunds. Linked from Book and the footer because it is a policy, not a reason to visit." }]
  },
  "need-help": {
    title: "Do you need help?",
    blocks: [{ heading: "Care vs crisis", body: "What Te Wāhi Ora can offer. What it cannot. Helplines if they want that on the record." }]
  },
  links: {
    title: "[Links]",
    blocks: [{ heading: "Related links", body: "Only if still useful after About and News exist." }]
  }
}, eventPages());

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
  drop.appendChild(el("summary", { text: "What we offer" }));
  var box = el("div");
  box.appendChild(el("div", null, [link("What we offer (all cards)", "what-we-offer", false)]));
  box.appendChild(el("div", null, [link("Check In", "check-in", false)]));
  EVENTS.forEach(function (ev) {
    box.appendChild(el("div", null, [link(ev.title, ev.id, false)]));
  });
  drop.appendChild(box);
  nav.appendChild(drop);

  nav.appendChild(link("About", "about", false));
  nav.appendChild(link("News", "news", false));
  nav.appendChild(link("Contact", "contact", false));
  nav.appendChild(document.createTextNode(" "));
  nav.appendChild(link("Book", "book", true));
  nav.appendChild(link("Support", "support", true));
}

function renderFooter() {
  var f = document.getElementById("footer");
  f.innerHTML = "";
  f.appendChild(el("h2", { text: "Footer" }));
  f.appendChild(el("p", { text: "Address · phone · emails · Facebook · Instagram" }));
  var ul = el("ul");
  [
    ["Book", "book", true],
    ["Support", "support", true],
    ["Contact", "contact", false],
    ["News / newsletter", "news", false],
    ["Cancellation policy", "cancellation", false],
    ["Do you need help?", "need-help", false],
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
    ["Who", "A woman sleeping here — with or without a programme", "A woman here for the day only — with or without a programme", "A group or facilitator whose purpose fits"],
    ["Length", "One or more nights (weekends: Fri + Sat)", "About 9:30am–5:30pm", "By arrangement"],
    ["Rooms / price", "Named rooms, from $X including meals", "$60 including lunch — no room list", "Whole house — price by enquiry"],
    ["Included", "Meals, linen, facilities", "Lunch, snacks, facilities — no linen", "Agreed with them"],
    ["Food, extras, Piha", "Yes — same house", "Yes — same house", "If the group wants it"],
    ["Gift a stay", "Night voucher", "Day voucher possible", "—"],
    ["If cost is a barrier", "Ask about subsidy / Wynsome", "Ask", "—"],
    ["Book", "Book (button)", "Book (button)", "Hire enquiry (button)"]
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
  document.title = page.title + " — Chosen sitemap v4";
  main.appendChild(el("h1", { text: page.title }));

  page.blocks.forEach(function (block) {
    var wrap = el("div", { "class": "block" });
    wrap.appendChild(el("h2", { text: block.heading }));
    wrap.appendChild(el("p", { text: block.body }));
    main.appendChild(wrap);
  });

  if (id === "stay") {
    main.appendChild(el("h2", { text: "What each option would show" }));
    main.appendChild(stayTable());
    main.appendChild(el("p", null, [link("Hire enquiry", "group-hire", true)]));
  }

  if (id === "what-we-offer") {
    main.appendChild(el("p", { text: "Cards link through to:" }));
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
