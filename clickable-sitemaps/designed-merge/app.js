var LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl vitae erat dictum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
var LOREM_LONG = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere cubilia Curae.";

var EVENTS = [
  {
    id: "event-writing",
    title: "Women’s Writing Weekends",
    when: "16–18 October 2026",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    blurb: "Three weekends a year to write, share, and hear your own voice again. Next: 16–18 October 2026.",
    who: "Women who want time to write — beginners and long-time writers. You do not need a project already underway.",
    happens: "Quiet writing time, optional sharing, and meals at the table. Evenings are unhurried. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    place: "Te Wāhi Ora, 129 Marine Parade North, Piha. Same house and meals as any other stay.",
    cost: "Usual stay rates from $180 a night including meals, or $60 for the day. Ask if you need a subsidy."
  },
  {
    id: "event-nature",
    title: "Nature Immersion",
    when: "6–8 November 2026",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    blurb: "Walks, ritual, rest and the black sand — a weekend of belonging to the land. Next: 6–8 November 2026.",
    who: "Women who want to be outside and unhurried. No fitness test; the beach and garden set the pace.",
    happens: "Guided time on the whenua, rest, and simple ritual. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    place: "Te Wāhi Ora and the Piha foreshore, weather allowing.",
    cost: "Usual stay rates unless a koha is listed for that weekend. Day visitors as published."
  }
];

var LETTERS = [
  { id: "letter-checkin", kind: "Newsletter", title: "Check In this month — air", date: "September 2026", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" },
  { id: "letter-garden", kind: "Newsletter", title: "From the garden and the kitchen", date: "August 2026", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80" },
  { id: "letter-winter", kind: "Newsletter", title: "Quiet weeks and funded stays", date: "July 2026", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80" },
  { id: "letter-writing", kind: "Newsletter", title: "Writing weekends are filling", date: "June 2026", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80" },
  { id: "letter-volunteers", kind: "Newsletter", title: "Hands in the garden this Friday", date: "May 2026", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80" },
  { id: "letter-autumn", kind: "Newsletter", title: "Autumn at the black sand", date: "April 2026", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80" }
];
var BLOGS = [
  { id: "blog-table", kind: "Bev’s blog", title: "What the table holds", date: "July 2026", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80" },
  { id: "blog-wholeness", kind: "Bev’s blog", title: "A place to belong to", date: "May 2026", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80" },
  { id: "blog-alone", kind: "Bev’s blog", title: "On arriving alone", date: "April 2026", img: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=900&q=80" },
  { id: "blog-listen", kind: "Bev’s blog", title: "Listening at Piha", date: "March 2026", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
  { id: "blog-cook", kind: "Bev’s blog", title: "Why we cook for you", date: "February 2026", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80" },
  { id: "blog-rain", kind: "Bev’s blog", title: "The garden after rain", date: "January 2026", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80" },
  { id: "blog-winter", kind: "Bev’s blog", title: "Winter in the house", date: "June 2025", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80" },
  { id: "blog-name", kind: "Bev’s blog", title: "The name we carry", date: "November 2025", img: "https://images.unsplash.com/photo-1502082553048-f009c37129c9?auto=format&fit=crop&w=900&q=80" }
];
var VOICES = [
  { id: "voices-write", kind: "Many Paths, Many Voices", title: "After the writing weekend", date: "April 2026", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80" },
  { id: "voices-tide", kind: "Many Paths, Many Voices", title: "A letter from the tide line", date: "March 2026", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" },
  { id: "voices-kitchen", kind: "Many Paths, Many Voices", title: "Night in the kitchen", date: "February 2026", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80" },
  { id: "voices-walk", kind: "Many Paths, Many Voices", title: "Walking Lion Rock", date: "December 2025", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80" },
  { id: "voices-rest", kind: "Many Paths, Many Voices", title: "What rest sounded like", date: "October 2025", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=80" }
];

var ROOMS = [
  {
    id: "room-seaview",
    title: "Sea View / Daisy",
    rate: "$260 a night including meals",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    blurb: "The sea-facing room. Linen, three meals, tea and coffee. Placeholder — this page is not final."
  },
  {
    id: "room-garden",
    title: "Garden Room",
    rate: "From $180 a night including meals",
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    blurb: "A quieter room toward the garden. Linen, three meals, tea and coffee. Placeholder — this page is not final."
  },
  {
    id: "room-chalet",
    title: "Garden Chalet",
    rate: "$195 a night including meals",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7a9f7e1?auto=format&fit=crop&w=1200&q=80",
    blurb: "A chalet in the garden. Linen, three meals, tea and coffee. Placeholder — this page is not final."
  },
  {
    id: "room-caravan",
    title: "Retro Caravan",
    rate: "$195 a night including meals",
    img: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=1200&q=80",
    blurb: "The caravan in the garden. Linen, three meals, tea and coffee. Placeholder — this page is not final."
  }
];

function $(id) { return document.getElementById(id); }

function ensureProtoBar() {
  if (document.querySelector(".proto-bar")) return;
  var bar = document.createElement("div");
  bar.className = "proto-bar";
  bar.innerHTML = '<a href="../../deliverables/sitemap-and-wireframes/index.html#sitemap-c">← Back</a><span>Sep 2026 · not the live site</span>';
  var header = document.querySelector(".site-header");
  var wrap = document.createElement("div");
  wrap.className = "chrome";
  header.parentNode.insertBefore(wrap, header);
  wrap.appendChild(bar);
  wrap.appendChild(header);
}

function parseHash() {
  return (location.hash || "#home").replace(/^#/, "") || "home";
}

function btn(label, href, kind) {
  return '<a class="btn ' + kind + '" href="' + href + '">' + label + "</a>";
}

function navSection(id) {
  if (id === "home") return "home";
  if (id === "retreats" || id === "stay" || id === "nourishment" || id === "group-hire" || id.indexOf("room-") === 0) return "stay";
  if (id === "what-we-offer" || id === "check-in" || id.indexOf("event-") === 0) return "offer";
  if (id === "about") return "about";
  if (id === "library" || id === "from-the-house" || id === "news" || id.indexOf("letter-") === 0 || id.indexOf("blog-") === 0 || id.indexOf("voices-") === 0 || id.indexOf("writing-") === 0) return "library";
  if (id === "contact") return "contact";
  if (id === "book") return "book";
  if (id === "support") return "support";
  return "";
}

function cls(section) {
  return navSection(parseHash()) === section ? " is-current" : "";
}

function headerNav() {
  var eventLinks = EVENTS.map(function (ev) {
    return '<a href="#' + ev.id + '"' + (parseHash() === ev.id ? ' class="is-current"' : "") + ">" + ev.title + "</a>";
  }).join("");
  var checkInCurrent = parseHash() === "check-in" ? ' class="is-current"' : "";
  var allCurrent = parseHash() === "what-we-offer" ? ' class="is-current"' : "";
  var roomLinks = ROOMS.map(function (room) {
    return '<a class="nav-indent' + (parseHash() === room.id ? " is-current" : "") + '" href="#' + room.id + '">' + room.title + "</a>";
  }).join("");
  var caret = '<span class="nav-caret" aria-hidden="true"></span>';
  function dropTrigger(label) {
    return '<button type="button" class="nav-trigger" aria-expanded="false" aria-haspopup="true">' + label + caret + "</button>";
  }
  return (
    '<a href="#home" class="' + cls("home").trim() + '">Home</a>' +
    '<div class="nav-drop' + cls("stay") + '">' +
      dropTrigger("Retreats &amp; Stay") +
      '<div class="nav-menu">' +
        '<a href="#retreats"' + (parseHash() === "retreats" || parseHash() === "stay" ? ' class="is-current"' : "") + ">Overview</a>" +
        '<a href="#nourishment"' + (parseHash() === "nourishment" ? ' class="is-current"' : "") + ">Nourishment</a>" +
        '<span class="nav-menu-label">Rooms</span>' +
        roomLinks +
      "</div>" +
    "</div>" +
    '<div class="nav-drop' + cls("offer") + '">' +
      dropTrigger("What we offer") +
      '<div class="nav-menu">' +
        '<a href="#what-we-offer"' + allCurrent + ">Overview</a>" +
        '<a href="#check-in"' + checkInCurrent + ">Check In weekend</a>" +
        eventLinks +
      "</div>" +
    "</div>" +
    '<a href="#about" class="' + cls("about").trim() + '">About us</a>' +
    '<div class="nav-drop' + cls("library") + '">' +
      dropTrigger("Library") +
      '<div class="nav-menu">' +
        '<a href="#library"' + (parseHash() === "library" || parseHash() === "from-the-house" ? ' class="is-current"' : "") + ">Overview</a>" +
        '<a href="#writing-letters"' + (parseHash() === "writing-letters" ? ' class="is-current"' : "") + ">Newsletters</a>" +
        '<a href="#writing-blog"' + (parseHash() === "writing-blog" ? ' class="is-current"' : "") + ">Bev’s blog</a>" +
        '<a href="#writing-voices"' + (parseHash() === "writing-voices" ? ' class="is-current"' : "") + ">Many Paths, Many Voices</a>" +
        '<a href="#writing-all"' + (parseHash() === "writing-all" ? ' class="is-current"' : "") + ">All writing</a>" +
      "</div>" +
    "</div>" +
    '<a href="#contact" class="' + cls("contact").trim() + '">Contact</a>'
  );
}

function icon(name) {
  var paths = {
    pin: '<path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>',
    mail: '<path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>',
    phone: '<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.1.4 2.3.6 3.5.6.5 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1.1L6.6 10.8z"/>',
    facebook: '<path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.6.4-1 1-1z"/>',
    instagram: '<path d="M7 3h10c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4zm10 2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.2 7.1a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z"/>'
  };
  return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (paths[name] || "") + "</svg>";
}

function socialLinks(extraClass) {
  return (
    '<div class="social-links' + (extraClass ? " " + extraClass : "") + '">' +
      '<a href="https://www.facebook.com/tewahiora" target="_blank" rel="noopener noreferrer" aria-label="Facebook">' + icon("facebook") + "</a>" +
      '<a href="https://www.instagram.com/tewahiora" target="_blank" rel="noopener noreferrer" aria-label="Instagram">' + icon("instagram") + "</a>" +
    "</div>"
  );
}

function headerActions() {
  return btn("Book", "#book", "btn-primary" + cls("book")) + btn("Support", "#support", "btn-ghost" + cls("support"));
}

function footerHtml() {
  return (
    '<div class="footer-grid">' +
      "<div><h2>Te Wāhi Ora</h2>" +
        '<ul class="footer-contact">' +
          "<li>" + icon("pin") + "<span>129 Marine Parade North<br>Piha Beach, Auckland</span></li>" +
          "<li>" + icon("mail") + '<a href="mailto:tewahiora@gmail.com">tewahiora@gmail.com</a></li>' +
          "<li>" + icon("phone") + "<span>022 078 5757 · 09 812 8775</span></li>" +
        "</ul>" +
        socialLinks("footer-social") +
        '<p><a href="#cancellation">Cancellation policy</a></p></div>' +
      "<div><h2>Need to talk?</h2>" +
        "<p>Te Wāhi Ora is not a clinical service and is not staffed by medical professionals. Rest, meals and other women — the fence at the top of the cliff, not the ambulance at the bottom.</p>" +
      "</div>" +
      '<div class="footer-numbers">' +
        "<h2>Helplines</h2>" +
        "<p>Call or text 1737 (24/7)<br>Lifeline 0800 543 354<br>Women’s Refuge 0800 733 843<br>Emergency 111</p>" +
      "</div>" +
    "</div>"
  );
}

function pageHero(title, lede, extra) {
  return '<section class="page-hero has-photo"><div class="wrap" style="padding-top:0;padding-bottom:0"><h1>' + title + "</h1>" + (extra || "") + "<p>" + lede + "</p></div></section>";
}

function eventCard(ev) {
  return (
    '<article class="card">' +
      '<img alt="" src="' + ev.img + '">' +
      '<p class="meta">' + ev.when + "</p>" +
      "<h3>" + ev.title + "</h3>" +
      "<p>" + ev.blurb + "</p>" +
      '<div class="actions card-actions">' + btn("Read more", "#" + ev.id, "btn-line") + btn("Book", "#book", "btn-solid") + "</div>" +
    "</article>"
  );
}

function articleCard(item) {
  return (
    '<article class="card">' +
      '<img alt="" src="' + item.img + '">' +
      '<p class="meta">' + item.kind + " · " + item.date + "</p>" +
      "<h3>" + item.title + "</h3>" +
      "<p>" + LOREM + "</p>" +
      '<div class="actions card-actions">' + btn("Read", "#" + item.id, "btn-line") + "</div>" +
    "</article>"
  );
}

function writingRail(title, items, allHref) {
  return (
    '<div class="rail-head"><h2 class="section-title">' + title + "</h2>" + btn("See all", allHref, "btn-line") + "</div>" +
    '<div class="scroll-row">' + items.map(articleCard).join("") + "</div>"
  );
}

function archivePage(title, lede, items) {
  return (
    pageHero(title, lede) +
    '<section class="wrap">' +
      '<div class="actions" style="margin-top:0">' + btn("Library", "#library", "btn-line") + btn("All writing", "#writing-all", "btn-solid") + "</div>" +
      '<div class="grid grid-3" style="margin-top:1.4rem">' + items.map(articleCard).join("") + "</div>" +
    "</section>"
  );
}

function articlePage(item) {
  return (
    pageHero(item.title, item.kind + " · " + item.date) +
    '<section class="wrap prose">' +
      '<img alt="" src="' + item.img + '" style="width:100%;max-width:42rem;margin-bottom:1.2rem">' +
      "<p>" + LOREM_LONG + "</p><p>" + LOREM + "</p>" +
      '<div class="actions">' + btn("Back to Library", "#library", "btn-line") + btn("All writing", "#writing-all", "btn-solid") + "</div>" +
    "</section>"
  );
}

function weekendGlance() {
  return (
    '<div class="weekend-glance">' +
      "<article><strong>Friday</strong><p>Arrive from about 4pm. Settle into your room, walk to the beach if you like, dinner at the table.</p></article>" +
      "<article><strong>Saturday</strong><p>Breakfast, lunch and dinner cooked for you. The day is yours — rest, the sand, or a programme if you came for one.</p></article>" +
      "<article><strong>Sunday</strong><p>Breakfast, a last walk if you want it, lunch, leave around 2pm. Weekends are Friday and Saturday nights (two nights minimum).</p></article>" +
    "</div>"
  );
}

function checkInGlance() {
  return (
    '<div class="weekend-glance">' +
      "<article><strong>10:00</strong><p>Arrive and morning tea.</p></article>" +
      "<article><strong>10:30</strong><p>A theme for the day. Time with a Listener, or time alone. Simple lunch.</p></article>" +
      "<article><strong>Around 2:15</strong><p>Home — unless you are staying overnight in the house at the usual rates.</p></article>" +
    "</div>"
  );
}

function stayTabs(includeHire) {
  var hireBtn = includeHire ? '<button type="button" data-tab="hire" aria-selected="false">Hire the house</button>' : "";
  var hirePanel = includeHire
    ? '<div class="tab-panel" data-panel="hire" hidden><h3>Hire the house</h3><p>For groups and facilitators whose purpose fits women’s rest, healing or learning — not a party house.</p><p>' + LOREM + "</p>" +
      '<img alt="The house" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80" style="width:100%;margin:1rem 0">' +
      "<p>Dates, meals and rooms are agreed together. Use the hire enquiry on Hire the house.</p>" +
      '<div class="actions">' + btn("Hire enquiry", "#group-hire", "btn-solid") + "</div></div>"
    : "";
  return (
    '<div class="stay-tabs">' +
      '<div class="tab-bar" role="tablist">' +
        '<button type="button" class="is-on" data-tab="overnight" aria-selected="true">Overnight</button>' +
        '<button type="button" data-tab="day" aria-selected="false">Day stay</button>' +
        hireBtn +
      "</div>" +
      '<div class="tab-panel" data-panel="overnight">' +
        "<h3>Overnight</h3>" +
        "<p>A woman sleeping here, with or without a programme. From $180 a night including meals. Sea View / Daisy $260. Chalets and caravan $195. Linen, three meals, tea and coffee.</p>" +
        '<img alt="A bedroom" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80" style="width:100%;margin:1rem 0;border-radius:12px">' +
        "<p>Weekends: Friday and Saturday nights. If cost is hard, ask about a $140 subsidy or the Wynsome Fund.</p>" +
        '<p class="kicker">Your weekend at a glance</p>' +
        weekendGlance() +
        '<div class="actions">' + btn("Book a stay", "#book", "btn-solid") + "</div>" +
      "</div>" +
      '<div class="tab-panel" data-panel="day" hidden>' +
        "<h3>Day stay</h3>" +
        "<p>About 9:30am–5:30pm. $60 including lunch, snacks, the house and garden. No linen. The beach and optional extras (counselling, massage, Reiki) are the same as overnight.</p>" +
        '<img alt="The table" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80" style="width:100%;margin:1rem 0;border-radius:12px">' +
        "<p>" + LOREM + "</p>" +
        '<div class="actions">' + btn("Book a day stay", "#book", "btn-solid") + "</div>" +
      "</div>" +
      hirePanel +
    "</div>"
  );
}

function stayForm(title) {
  return (
    '<form class="form" onsubmit="event.preventDefault(); alert(\'Prototype only — this would send to Te Wāhi Ora.\');">' +
      "<p><strong>" + title + "</strong></p>" +
      '<p class="fine">Please fill out the form if you would like to stay. There is a minimum two-night stay for weekends (Friday and Saturday nights). Tell us special dietary needs when you book. If you are pregnant, please let us know.</p>' +
      '<label>What are you booking?<select><option>Rest stay (no programme)</option><option>Day stay</option><option>Check In weekend</option><option>A listed event</option></select></label>' +
      "<label>Overnight or day only?<select><option>Overnight</option><option>Day only</option></select></label>" +
      '<label>Name <input required></label>' +
      '<label>Email <input type="email" required></label>' +
      '<label>Phone <input></label>' +
      '<label>Arrival date <input placeholder="e.g. 16 October 2026"></label>' +
      '<label>Departure date <input></label>' +
      '<label>Preferred room <input placeholder="If you have one in mind"></label>' +
      '<label>Dietary needs <textarea></textarea></label>' +
      "<label>Are you pregnant?<select><option>No</option><option>Yes</option><option>Prefer not to say</option></select></label>" +
      '<label>Anything else we should know? <textarea></textarea></label>' +
      "<button type=\"submit\">Send request</button>" +
    "</form>"
  );
}

function hireForm() {
  return (
    '<form class="form" onsubmit="event.preventDefault(); alert(\'Prototype only — hire enquiry would send to Te Wāhi Ora.\');">' +
      "<p><strong>Hire enquiry</strong></p>" +
      '<p class="fine">Tell us what you have in mind. Staff will say whether it fits. If it does, payment is by bank transfer.</p>' +
      '<label>Your name <input required></label>' +
      '<label>Group or organisation <input></label>' +
      '<label>Email <input type="email" required></label>' +
      '<label>Phone <input></label>' +
      '<label>Preferred dates <input></label>' +
      '<label>About how many women? <input></label>' +
      '<label>What do you want to do here? <textarea required></textarea></label>' +
      "<button type=\"submit\">Send hire enquiry</button>" +
    "</form>"
  );
}

function faqItem(question, answer, open) {
  return (
    "<details" + (open ? " open" : "") + ">" +
      "<summary>" + question + "</summary>" +
      '<div class="faq-panel"><div class="faq-panel-inner"><p>' + answer + "</p></div></div>" +
    "</details>"
  );
}

function faqBlock() {
  return (
    '<section class="home-faq"><div class="wrap faq">' +
      '<p class="kicker">Questions</p><h2 class="section-title">Before you come</h2>' +
      faqItem("Can I come without an event?", "Yes. Many women come only to rest. Book a stay for a night, several nights, or a day.", true) +
      faqItem("If I join a weekend, is that overnight or a day?", "Overnight means you sleep here (weekends: Friday and Saturday nights). A day stay is about 9:30am–5:30pm.") +
      faqItem("Can I come alone?", "Yes. Most women do.") +
      faqItem("What if I have a disability?", 'Please enquire so we can talk through access and what would help. Email <a href="mailto:tewahiora@gmail.com">tewahiora@gmail.com</a>.') +
      faqItem("What if I cannot pay the full rate?", "Ask. Subsidised rates and the Wynsome Fund exist so cost is not the only door.") +
      faqItem("Is Te Wāhi Ora a clinical service?", "No. We are not a clinical facility and we are not staffed by medical professionals. The house is rest, meals and other women — the fence at the top of the cliff, not the ambulance at the bottom. Helpline numbers are in the footer if you need to talk now.") +
    "</div></section>"
  );
}

function supportPage() {
  return (
    pageHero("Support us", "Money and time keep meals, staff, and funded stays possible.") +
    '<section class="wrap">' +
      '<p class="lede-block">' + LOREM_LONG + "</p>" +
      '<p class="lede-block">' + LOREM + "</p>" +
      '<div class="grid grid-3">' +
        '<div class="card"><h3>Give once</h3><p>Online, or Give a Little. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' + btn("Donate", "#support", "btn-solid") + "</div>" +
        '<div class="card"><h3>400 × $10</h3><p>Monthly giving toward staffing. Lorem ipsum dolor sit amet.</p>' + btn("Give monthly", "#support", "btn-solid") + "</div>" +
        '<div class="card"><h3>Wynsome Fund</h3><p class="subhead">Fund a stay — so another woman can come.</p><p>Named for Wynsome Diprose. Your gift helps a woman stay who could not otherwise pay.</p>' + btn("Fund a stay", "#support", "btn-solid") + "</div>" +
        '<div class="card"><h3>Time</h3><p>Garden, kitchen, overnight cover, admin. ' + LOREM + "</p>" + btn("Volunteer", "#contact", "btn-line") + "</div>" +
        '<div class="card"><h3>Bequests</h3><p>A gift in a will. ' + LOREM + "</p>" + btn("Ask us", "#contact", "btn-line") + "</div>" +
      "</div>" +
      "<h2 class=\"section-title\" style=\"margin-top:2.4rem\">Thank you</h2>" +
      "<p class=\"lede-block\">People, trusts and organisations who keep the door open would be named here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere cubilia Curae; Donec id elit non mi porta gravida at eget metus.</p>" +
      "<p class=\"lede-block\">We would thank cooks, Listeners, gardeners, the 400 × $10 circle, and funders who make subsidised nights possible. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>" +
      '<div class="grid grid-2">' +
        '<div class="card"><h3>Friends of the house</h3><p>' + LOREM + "</p></div>" +
        '<div class="card"><h3>Funders and partners</h3><p>' + LOREM + "</p></div>" +
      "</div>" +
    "</section>"
  );
}

var PAGES = {
  home: function () {
    return (
      '<section class="hero"><div class="hero-inner">' +
        '<p class="eyebrow">Welcome · Piha · women for women</p>' +
        "<h1>A place to belong to while moving into wholeness.</h1>" +
        "<p class=\"lede\">A charitable retreat by the Tasman: rest, meals, and the company of other women — for a night, a day, or a gathering.</p>" +
        '<div class="actions">' + btn("What we offer", "#what-we-offer", "btn-ghost") + btn("Book", "#book", "btn-primary") + "</div>" +
      "</div></section>" +
      '<section class="home-ways"><div class="wrap">' +
        '<p class="kicker">Four ways to come</p>' +
        "<h2 class=\"section-title\">Choose what fits.</h2>" +
        '<div class="grid grid-4">' +
          '<a class="card card-photo" href="#retreats"><img alt="" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"><h3>Retreats &amp; Stay</h3><p>Rest without a programme. Overnight or a day. Meals included.</p><span class="meta">See rooms and food →</span></a>' +
          '<a class="card card-photo" href="#check-in"><img alt="" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"><h3>Check In weekend</h3><p>Free monthly gathering. Next: Saturday 26 or Sunday 27 September 2026.</p><span class="meta">Next dates →</span></a>' +
          '<a class="card card-photo" href="#what-we-offer"><img alt="" src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"><h3>Events</h3><p>Small themed weekends — writing, grief, nature, and more.</p><span class="meta">See the diary →</span></a>' +
          '<a class="card card-photo" href="#group-hire"><img alt="" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"><h3>Hire the house</h3><p>For groups and facilitators whose purpose fits the Trust.</p><span class="meta">Enquire →</span></a>' +
        "</div></div></section>" +
      '<section class="home-panel home-panel-foam"><div class="wrap home-split">' +
        "<div>" +
          '<p class="kicker">Stay and subsidy</p>' +
          "<h2 class=\"section-title\">Come to stay</h2>" +
          '<p class="section-sub">even if the full rate is hard.</p>' +
          "<p>You can come alone — most women do. A weekend is Friday and Saturday nights. Paying the full rate helps another woman come.</p>" +
          '<div class="home-facts">' +
            "<div><p class=\"home-facts-value\">From $180</p><p class=\"home-facts-label\">Overnight</p><p>Meals included</p></div>" +
            "<div><p class=\"home-facts-value\">$60</p><p class=\"home-facts-label\">Day stay</p><p>About 9:30am–5:30pm</p></div>" +
            "<div class=\"home-facts-ask\"><p class=\"home-facts-value\">Ask</p><p class=\"home-facts-label\">If cost is hard</p><p>Subsidy or Wynsome Fund</p></div>" +
          "</div>" +
          '<div class="actions">' + btn("See stay options", "#retreats", "btn-line") + btn("Book", "#book", "btn-solid") + "</div>" +
        "</div>" +
        '<img alt="" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=80">' +
      "</div></section>" +
      '<section class="home-panel home-panel-white"><div class="wrap home-center">' +
        '<blockquote class="quote">“I walked into Te Wāhi Ora alone. Happily alone. And because of this I have been able to experience one of the deepest, most wonderful experiences I’ve had.”</blockquote>' +
      "</div></section>" +
      faqBlock() +
      '<section class="home-support"><div class="wrap home-center">' +
        '<p class="kicker">Support</p>' +
        "<h2 class=\"section-title\">Keep this place going</h2>" +
        "<p>Donations and time make meals, staff, and funded stays possible.</p>" +
        '<div class="actions">' + btn("Support us", "#support", "btn-solid") + "</div>" +
      "</div></section>"
    );
  },
  retreats: function () {
    var roomCards = ROOMS.map(function (room) {
      return '<a class="card" href="#' + room.id + '"><img alt="" src="' + room.img + '"><p class="meta">' + room.rate + "</p><h3>" + room.title + "</h3><p>" + room.blurb + '</p><span class="meta">See this room →</span></a>';
    }).join("");
    return (
      pageHero("Retreats & Stay", "The house, the meals, the beach — whether you come to rest or for a programme.") +
      '<section class="wrap">' +
        '<div class="photo-row">' +
          '<img alt="Ocean and sky" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80">' +
          '<img alt="Garden path" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80">' +
          '<img alt="Table and food" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80">' +
        "</div>" +
        "<p class=\"lede-block\">This is the house you sleep in and the table you eat at. " + LOREM + "</p>" +
        "<h2 class=\"section-title\">Choose how you stay</h2>" +
        stayTabs(true) +
        '<p class="kicker" style="margin-top:2.2rem">Rooms</p>' +
        "<h2 class=\"section-title\">A page for each room.</h2>" +
        "<p class=\"lede-block\">Not final — placeholders so we can see how a room sits in the tree.</p>" +
        '<div class="grid grid-2">' + roomCards + "</div>" +
        '<div class="grid grid-2" style="margin-top:1.1rem">' +
          '<a class="card" href="#nourishment"><h3>Nourishment</h3><p>Meals are part of the care, not a hotel extra.</p><span class="meta">See food →</span></a>' +
          '<a class="card" href="#group-hire"><h3>Hire the house</h3><p>For groups whose purpose fits. Enquiry, not Book.</p><span class="meta">Enquire →</span></a>' +
        "</div>" +
        "<h2 class=\"section-title\" style=\"margin-top:2.2rem\">While you are here</h2>" +
        "<p class=\"prose\">Optional counselling, massage, Reiki, walks, the black sand. Gift vouchers and the digital cookbook can be bought from this page. For local Piha information we would link out to This is Piha, if they agree.</p>" +
      "</section>"
    );
  },
  stay: function () { return PAGES.retreats(); },
  "what-we-offer": function () {
    var cards = EVENTS.map(eventCard).join("");
    return (
      pageHero("What we offer", "The Check In weekend and themed gatherings. You can also come with no programme at all.") +
      '<section class="band-bark">' +
        '<div class="wrap">' +
          '<div class="note"><p>Rooms, meals and the rhythm of a night in the house live on <a href="#retreats">Retreats &amp; Stay</a>. If you are bringing a group, <a href="#group-hire">hire the house</a> is the enquiry path — we will say whether the use fits.</p><p>' + LOREM + "</p>" +
          '<div class="photo-row" style="margin-top:1rem;margin-bottom:0">' +
            '<img alt="The house" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80">' +
            '<img alt="A bedroom" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=700&q=80">' +
            '<img alt="A meal" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80">' +
          "</div></div>" +
        "</div>" +
        '<div class="events-options"><div class="wrap">' +
          '<p class="kicker">What’s on</p>' +
          "<h2 class=\"section-title\">Choose a gathering.</h2>" +
          '<div class="grid grid-3">' +
            '<article class="card"><img alt="" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"><p class="meta">Next: 26 or 27 September 2026</p><h3>Check In weekend</h3><p>A free gathering on the last weekend of each month — Saturday or Sunday. Optional overnight at usual stay rates. Women together, a Listener if you want one, lunch at the table.</p><div class="actions card-actions">' + btn("Read more", "#check-in", "btn-line") + btn("Book", "#book", "btn-solid") + "</div></article>" +
            cards +
          "</div>" +
        "</div></div>" +
      "</section>" +
      '<section class="band-fern"><div class="wrap events-also">' +
        '<p class="kicker">Also here</p>' +
        "<h2 class=\"section-title\">Come to rest, or bring a group.</h2>" +
        '<div class="grid grid-3">' +
          '<a class="card" href="#retreats"><h3>Retreats &amp; Stay</h3><p>Sleep in the house with no programme. Overnight or a day. Meals included.</p><span class="meta">See the house →</span></a>' +
          '<a class="card" href="#group-hire"><h3>Hire the house</h3><p>For groups and facilitators whose purpose fits. We will say whether the use belongs here.</p><span class="meta">Enquire →</span></a>' +
          '<a class="card" href="#book"><h3>Book</h3><p>Stays, the Check In weekend and listed events use Book. Hire uses its own enquiry.</p><span class="meta">Book →</span></a>' +
        "</div>" +
      "</div></section>"
    );
  },
  "check-in": function () {
    return (
      pageHero("Check In weekend", "A free monthly gathering — Saturday or Sunday, last weekend of the month.") +
      '<section class="wrap prose">' +
        "<h2>What it is</h2><p>Women together, without a course to complete. A Listener if you want to talk, the beach if you don’t, lunch at the table. Metaphor this year: air.</p>" +
        "<h2>Who it is for</h2><p>Any woman who wants a supported day among other women. You do not need a crisis to come. " + LOREM + "</p>" +
        "<h2>What happens</h2>" + checkInGlance() +
        "<h2>When</h2><p>Last weekend of each month, March to November. Next: Saturday 26 or Sunday 27 September 2026. Then 31 October / 1 November, and 28 or 29 November.</p>" +
        "<h2>Place</h2><p>Te Wāhi Ora, 129 Marine Parade North, Piha. If you stay overnight you are in the same house, at the usual stay rates — see Retreats &amp; Stay.</p>" +
        "<h2>Cost</h2><p>Day visitors: no charge. Overnight: usual stay rates. Subsidy if you need it.</p>" +
        '<div class="actions">' + btn("Book Check In weekend", "#book", "btn-solid") + btn("See the house", "#retreats", "btn-line") + "</div>" +
      "</section>"
    );
  },
  about: function () {
    return (
      pageHero("About us", "A retreat run by women for women, in a house by Piha’s black sand.") +
      '<section class="wrap prose">' +
        "<h2>Who we are</h2><p><em>Proposal — they will rewrite.</em> Creating Space for Women. Te Wāhi Ora means a healing place: a place to belong to while moving into wholeness. Charitable trust, women for women.</p><p>" + LOREM_LONG + "</p>" +
        "<h2>Who it is for</h2><p>Women who need time away — tired, in transition, curious, or simply ready to breathe. You do not need a crisis to come.</p>" +
        "<h2>How it began</h2><p>Bev Holt and Wynsome Diprose imagined this in the late 1980s. The retreat has been offering stays since 1991. Wynsome died the year it began; her name still marks the fund that helps women who cannot pay.</p>" +
        "<h2>People</h2><p>Bev, cooks, Listeners, trustees, patrons, volunteers — a circle around the house, not a corporate team page. " + LOREM + "</p>" +
        "<h2>Charitable trust</h2><p>Fees do not cover everything. Donations, the 400×$10, and time keep the door open. The full give path is on Support.</p>" +
        "<h2>Follow the house</h2><p>Pictures and notes from Piha, between letters.</p>" + socialLinks("social-inline") +
      "</section>"
    );
  },
  library: function () {
    return (
      pageHero("Library", "Letters from Te Wāhi Ora, Bev’s writing, and Many Paths, Many Voices.") +
      '<section class="wrap">' +
        '<div class="grid grid-2">' +
          '<form class="form" onsubmit="event.preventDefault(); alert(\'Prototype — Mailchimp would go here.\');"><p><strong>Join the newsletter</strong></p><p>About monthly. ' + LOREM + '</p><label>Email <input type="email" required></label><button type="submit">Subscribe</button></form>' +
          "<div><p class=\"lede-block\">This is not a newsroom. It is how the house keeps in touch — a letter, a longer piece from Bev, writing from the weekends. Between letters, the house is on Facebook and Instagram.</p>" + socialLinks("social-inline") + '<div class="actions" style="margin-top:1rem">' + btn("See all writing", "#writing-all", "btn-solid") + "</div></div>" +
        "</div>" +
        writingRail("Newsletters", LETTERS, "#writing-letters") +
        writingRail("Bev’s blog", BLOGS, "#writing-blog") +
        writingRail("Many Paths, Many Voices", VOICES, "#writing-voices") +
      "</section>"
    );
  },
  "writing-all": function () {
    return archivePage("All writing", "Every letter, blog post and voice in one grid.", LETTERS.concat(BLOGS, VOICES));
  },
  "writing-letters": function () {
    return archivePage("Newsletters", "Past letters from the house. Lorem ipsum until real issues are pasted in.", LETTERS);
  },
  "writing-blog": function () {
    return archivePage("Bev’s blog", "Longer pieces, so she can write again.", BLOGS);
  },
  "writing-voices": function () {
    return archivePage("Many Paths, Many Voices", "Writing from the weekends and other voices around Te Wāhi Ora.", VOICES);
  },
  "from-the-house": function () { return PAGES.library(); },
  news: function () { return PAGES.library(); },
  nourishment: function () {
    return (
      pageHero("Nourishment", "Meals at the table — part of the care, not a hotel extra.") +
      '<section class="wrap prose">' +
        '<p class="draft-note">Not final</p>' +
        '<img alt="The table" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80" style="width:100%;max-width:42rem;margin-bottom:1.2rem;border-radius:12px">' +
        "<p>" + LOREM_LONG + "</p>" +
        "<p>Breakfast, lunch and dinner are cooked for overnight guests. A day stay includes lunch and snacks. Tell us dietary needs when you book.</p>" +
        "<p>" + LOREM + "</p>" +
        '<div class="actions">' + btn("Book", "#book", "btn-solid") + btn("Retreats & Stay", "#retreats", "btn-line") + "</div>" +
      "</section>"
    );
  },
  support: supportPage,
  book: function () {
    return (
      pageHero("Book", "Choose how you are coming, then send dates. We still confirm — until a live calendar exists.") +
      '<section class="wrap">' +
        '<p class="draft-note">WordPress: keep cancellation on this page (paragraph + link under the form), not only in the footer.</p>' +
        '<p class="kicker">How you are coming</p>' +
        '<div class="book-flow">' +
          '<div class="card"><h3>Rest stay</h3><p>No programme. Overnight or a day. Meals included.</p></div>' +
          '<div class="card"><h3>Check In weekend or an event</h3><p>The gathering is free or ticketed; a bed is the usual stay rate if you sleep here.</p></div>' +
          '<div class="card"><h3>Hire</h3><p>Groups use the hire form, not this one.</p>' + btn("Hire enquiry", "#group-hire", "btn-line") + "</div>" +
        "</div>" +
        stayForm("Tell us what you need") +
        '<p class="book-policy">Please read the <a href="#cancellation">cancellation policy</a> before you send dates.</p>' +
      "</section>"
    );
  },
  "group-hire": function () {
    return (
      pageHero("Hire the house", "For groups and facilitators whose purpose fits.") +
      '<section class="wrap">' +
        "<p class=\"lede-block\">This is not a party house. If your gathering belongs with women’s rest, healing, or learning, enquire. Rooms, meals and Piha are described on Retreats &amp; Stay.</p>" +
        "<p class=\"lede-block\">" + LOREM_LONG + "</p>" +
        hireForm() +
        '<div class="actions">' + btn("See the house", "#retreats", "btn-line") + "</div>" +
      "</section>"
    );
  },
  contact: function () {
    return (
      pageHero("Contact", "Questions that are not a booking. Stays, Check In weekends and events use Book.") +
      '<section class="wrap grid grid-2">' +
        "<div>" +
          "<p class=\"lede-block\">Write or text if you are not sure which stay fits, or if you want to volunteer, gift a stay, or ask about the Trust. " + LOREM + "</p>" +
          "<p><strong>Te Wāhi Ora Women’s Retreat</strong><br>129 Marine Parade North<br>Piha Beach, Auckland</p>" +
          "<p>tewahiora@gmail.com<br>Mobile 022 078 5757 (text is welcome)<br>Landline 09 812 8775 (forwards to the mobile)</p>" +
          "<p>Find us on Facebook and Instagram</p>" + socialLinks("social-inline") +
          "<p>Piha Rides for airport and city runs — details as on the current site.</p>" +
          '<img alt="Map placeholder" src="https://images.unsplash.com/photo-1524661132064-ba1964bfce30?auto=format&fit=crop&w=900&q=80" style="width:100%;margin-top:1rem;border-radius:12px">' +
        "</div>" +
        '<form class="form" onsubmit="event.preventDefault(); alert(\'Prototype only.\');"><p><strong>Send a message</strong></p><label>Name <input required></label><label>Email <input type="email" required></label><label>Phone <input></label><label>Message <textarea required></textarea></label><button type="submit">Send</button></form>' +
      "</section>"
    );
  },
  cancellation: function () {
    return pageHero("Cancellation policy", "Notice, deposits, refunds — linked from Book.") + '<section class="wrap prose"><p>Placeholder for the rules they already publish.</p><p>' + LOREM_LONG + "</p></section>";
  }
};

ROOMS.forEach(function (room) {
  PAGES[room.id] = function () {
    return (
      pageHero(room.title, room.rate) +
      '<section class="wrap prose">' +
        '<p class="draft-note">Not final</p>' +
        '<img alt="" src="' + room.img + '" style="width:100%;max-width:42rem;margin-bottom:1.2rem;border-radius:12px">' +
        "<p>" + room.blurb + "</p>" +
        "<p>" + LOREM_LONG + "</p>" +
        "<p>Weekends: Friday and Saturday nights (two nights). If cost is hard, ask about a subsidy or the Wynsome Fund.</p>" +
        '<div class="actions">' + btn("Book this room", "#book", "btn-solid") + btn("All rooms", "#retreats", "btn-line") + "</div>" +
      "</section>"
    );
  };
});

EVENTS.forEach(function (ev) {
  PAGES[ev.id] = function () {
    return (
      pageHero(ev.title, ev.blurb) +
      '<section class="wrap prose">' +
        '<img alt="" src="' + ev.img + '" style="width:100%;max-width:42rem;margin-bottom:1.2rem">' +
        "<h2>What it is</h2><p>" + ev.blurb + "</p><p>" + LOREM + "</p>" +
        "<h2>Who it is for</h2><p>" + ev.who + "</p>" +
        "<h2>What happens</h2><p>" + ev.happens + "</p>" +
        '<p class="kicker">Your weekend at a glance</p>' + weekendGlance() +
        "<h2>When</h2><p>" + ev.when + "</p>" +
        "<h2>Place</h2><p>" + ev.place + "</p>" +
        "<h2>Cost</h2><p>" + ev.cost + "</p>" +
        '<div class="actions">' + btn("Book", "#book", "btn-solid") + btn("Retreats & Stay", "#retreats", "btn-line") + "</div>" +
      "</section>"
    );
  };
});

LETTERS.concat(BLOGS, VOICES).forEach(function (item) {
  PAGES[item.id] = function () { return articlePage(item); };
});

function bindFaq() {
  var items = document.querySelectorAll(".faq details");
  function closeDetail(detail) {
    var panel = detail.querySelector(".faq-panel");
    if (!detail.open) return;
    detail.classList.remove("is-open");
    var done = false;
    var finish = function () {
      if (done) return;
      done = true;
      detail.removeAttribute("open");
      if (panel) panel.removeEventListener("transitionend", finish);
    };
    if (panel) panel.addEventListener("transitionend", finish);
    window.setTimeout(finish, 400);
  }
  items.forEach(function (detail) {
    var panel = detail.querySelector(".faq-panel");
    if (!panel) return;
    if (detail.open) detail.classList.add("is-open");
    detail.querySelector("summary").addEventListener("click", function (event) {
      event.preventDefault();
      if (detail.open) {
        closeDetail(detail);
      } else {
        items.forEach(function (other) {
          if (other !== detail) closeDetail(other);
        });
        detail.setAttribute("open", "");
        window.requestAnimationFrame(function () {
          detail.classList.add("is-open");
        });
      }
    });
  });
}

function bindStayTabs() {
  var root = document.querySelector(".stay-tabs");
  if (!root) return;
  var tabs = root.querySelectorAll("[data-tab]");
  var panels = root.querySelectorAll("[data-panel]");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var id = tab.getAttribute("data-tab");
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle("is-on", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach(function (p) {
        p.hidden = p.getAttribute("data-panel") !== id;
      });
    });
  });
}

function render() {
  ensureProtoBar();
  var id = parseHash();
  $("nav").innerHTML = headerNav();
  $("header-actions").innerHTML = headerActions();
  $("footer").innerHTML = footerHtml();
  var view = PAGES[id];
  $("main").innerHTML = view ? view() : PAGES.home();
  $("main").className = id === "what-we-offer" ? "page-offer" : id === "home" ? "page-home" : "";
  bindStayTabs();
  bindFaq();
  document.title = (id === "home" ? "Home" : document.querySelector("#main h1").textContent) + " — Te Wāhi Ora";
  window.scrollTo(0, 0);
  $("nav").classList.remove("open");
  $("menu-toggle").setAttribute("aria-expanded", "false");
}

$("menu-toggle").addEventListener("click", function () {
  var open = $("nav").classList.toggle("open");
  this.setAttribute("aria-expanded", open ? "true" : "false");
  if (!open) {
    $("nav").querySelectorAll(".nav-drop.is-open").forEach(function (drop) {
      drop.classList.remove("is-open");
      var btn = drop.querySelector(".nav-trigger");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }
});

function closeNavDrops(except) {
  $("nav").querySelectorAll(".nav-drop.is-open").forEach(function (drop) {
    if (drop === except) return;
    drop.classList.remove("is-open");
    var otherBtn = drop.querySelector(".nav-trigger");
    if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
  });
}

$("nav").addEventListener("click", function (e) {
  var btn = e.target.closest(".nav-trigger");
  if (!btn) {
    if (e.target.closest(".nav-menu a") || e.target.closest(".nav > a")) closeNavDrops();
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  var drop = btn.closest(".nav-drop");
  var open = !drop.classList.contains("is-open");
  closeNavDrops(open ? drop : null);
  drop.classList.toggle("is-open", open);
  btn.setAttribute("aria-expanded", open ? "true" : "false");
});

document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-drop") || e.target.closest(".menu-toggle")) return;
  closeNavDrops();
});

document.querySelector(".site-header").addEventListener("wheel", function (e) {
  if (e.ctrlKey) return;
  e.preventDefault();
  window.scrollBy(0, e.deltaY);
}, { passive: false });

window.addEventListener("hashchange", render);
render();
