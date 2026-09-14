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
  { id: "letter-garden", kind: "Newsletter", title: "From the garden and the kitchen", date: "August 2026", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80" }
];
var BLOGS = [
  { id: "blog-table", kind: "Bev’s blog", title: "What the table holds", date: "July 2026", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80" },
  { id: "blog-wholeness", kind: "Bev’s blog", title: "A place to belong to", date: "May 2026", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80" }
];
var VOICES = [
  { id: "voices-write", kind: "Many Paths, Many Voices", title: "After the writing weekend", date: "April 2026", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80" }
];

function $(id) { return document.getElementById(id); }

function ensureProtoBar() {
  if (document.querySelector(".proto-bar")) return;
  var bar = document.createElement("div");
  bar.className = "proto-bar";
  bar.innerHTML = '<a href="../../deliverables/sitemap-and-wireframes/index.html#sitemap-b">← Back</a><span>Sep 2026 · not the live site</span>';
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
  if (id === "retreats" || id === "stay") return "retreats";
  if (id === "events" || id === "what-we-offer" || id === "check-in" || id === "group-hire" || id.indexOf("event-") === 0) return "events";
  if (id === "about" || id === "reading-room" || id === "voices" || id === "news" || id.indexOf("letter-") === 0 || id.indexOf("blog-") === 0 || id.indexOf("voices-") === 0) return "about";
  if (id === "support") return "support";
  if (id === "book") return "book";
  if (id === "contact") return "contact";
  return "";
}

function cls(section) {
  return navSection(parseHash()) === section ? " is-current" : "";
}

function headerNav() {
  var eventLinks = EVENTS.map(function (ev) {
    return '<a href="#' + ev.id + '"' + (parseHash() === ev.id ? ' class="is-current"' : "") + ">" + ev.title + "</a>";
  }).join("");
  return (
    '<a href="#home" class="' + cls("home").trim() + '">Home</a>' +
    '<a href="#retreats" class="' + cls("retreats").trim() + '">Retreats &amp; Stays</a>' +
    '<div class="nav-drop' + cls("events") + '">' +
      '<a href="#events">Events</a>' +
      '<div class="nav-menu">' +
        '<a href="#events"' + (parseHash() === "events" ? ' class="is-current"' : "") + ">Upcoming</a>" +
        '<a href="#check-in"' + (parseHash() === "check-in" ? ' class="is-current"' : "") + ">Check In</a>" +
        eventLinks +
        '<a href="#group-hire"' + (parseHash() === "group-hire" ? ' class="is-current"' : "") + ">Hire the place</a>" +
      "</div>" +
    "</div>" +
    '<a href="#about" class="' + cls("about").trim() + '">About</a>' +
    '<a href="#support" class="' + cls("support").trim() + '">Support us</a>' +
    '<a href="#contact" class="' + cls("contact").trim() + '">Contact</a>' +
    btn("Book", "#book", "btn-primary" + cls("book"))
  );
}

function footerHtml() {
  return (
    '<div class="footer-grid">' +
      "<div><h2>Te Wāhi Ora</h2><p>129 Marine Parade North<br>Piha Beach, Auckland<br>tewahiora@gmail.com<br>022 078 5757 · 09 812 8775</p></div>" +
      "<div><h2>More</h2><ul>" +
        '<li><a href="#cancellation">Cancellation policy</a></li>' +
        '<li><a href="#about">About</a></li>' +
      "</ul></div>" +
      "<div><h2>If you need to talk now</h2>" +
        "<p>Te Wāhi Ora is not a clinical service and is not staffed by medical professionals. Rest, meals and other women — the fence at the top of the cliff, not the ambulance at the bottom.</p>" +
        "<p>Call or text 1737 (24/7)<br>Lifeline 0800 543 354<br>Women’s Refuge 0800 733 843<br>Emergency 111</p>" +
      "</div>" +
    "</div>"
  );
}

function pageHero(title, lede) {
  return '<section class="page-hero has-photo"><div class="wrap" style="padding-top:0;padding-bottom:0"><h1>' + title + "</h1><p>" + lede + "</p></div></section>";
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

function articlePage(item) {
  return (
    pageHero(item.title, item.kind + " · " + item.date) +
    '<section class="wrap prose">' +
      '<img alt="" src="' + item.img + '" style="width:100%;max-width:42rem;margin-bottom:1.2rem">' +
      "<p>" + LOREM_LONG + "</p><p>" + LOREM + "</p>" +
      '<div class="actions">' + btn("Back to About", "#about", "btn-line") + "</div>" +
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

function stayTabs() {
  return (
    '<div class="stay-tabs">' +
      '<div class="tab-bar" role="tablist">' +
        '<button type="button" class="is-on" data-tab="overnight" aria-selected="true">Overnight</button>' +
        '<button type="button" data-tab="day" aria-selected="false">Day stay</button>' +
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
    "</div>"
  );
}

function stayForm(title) {
  return (
    '<form class="form form-center" onsubmit="event.preventDefault(); alert(\'Prototype only — this would send to Te Wāhi Ora.\');">' +
      "<p><strong>" + title + "</strong></p>" +
      '<p class="fine">Please fill out the form if you would like to stay. There is a minimum two-night stay for weekends (Friday and Saturday nights). Tell us special dietary needs when you book. If you are pregnant, please let us know.</p>' +
      '<label>What are you booking?<select><option>Rest stay (no programme)</option><option>Day stay</option><option>Check In</option><option>A listed event</option></select></label>' +
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
    '<form class="form form-center" onsubmit="event.preventDefault(); alert(\'Prototype only — hire enquiry would send to Te Wāhi Ora.\');">' +
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

function faqBlock() {
  return (
    '<section class="wrap faq">' +
      '<p class="kicker">Questions</p><h2 class="section-title">Before you come</h2>' +
      "<details open><summary>Can I come without an event?</summary><p>Yes. Many women come only to rest. Book a stay for a night, several nights, or a day.</p></details>" +
      "<details><summary>If I join a weekend, is that overnight or a day?</summary><p>Overnight means you sleep here (weekends: Friday and Saturday nights). A day stay is about 9:30am–5:30pm.</p></details>" +
      "<details><summary>Can I come alone?</summary><p>Yes. Most women do.</p></details>" +
      "<details><summary>What if I cannot pay the full rate?</summary><p>Ask. Subsidised rates and the Wynsome Fund exist so cost is not the only door.</p></details>" +
      "<details><summary>Is Te Wāhi Ora a clinical service?</summary><p>No. We are not a clinical facility and we are not staffed by medical professionals. The house is rest, meals and other women — the fence at the top of the cliff, not the ambulance at the bottom. Helpline numbers are in the footer if you need to talk now.</p></details>" +
    "</section>"
  );
}

var PAGES = {
  home: function () {
    return (
      '<section class="hero"><div class="hero-inner">' +
        '<p class="eyebrow">Piha · women for women</p>' +
        "<h1>A place to belong to while moving into wholeness.</h1>" +
        "<p class=\"lede\">A charitable retreat by the Tasman: rest, meals, and the company of other women — for a night, a day, or a gathering.</p>" +
        '<div class="actions">' + btn("Book", "#book", "btn-primary") + btn("Support us", "#support", "btn-ghost") + "</div>" +
      "</div></section>" +
      '<section class="wrap">' +
        '<p class="kicker">Four ways to come</p>' +
        "<h2 class=\"section-title\">Choose what fits.</h2>" +
        '<div class="grid grid-4">' +
          '<a class="card" href="#retreats"><h3>Retreats &amp; Stays</h3><p>Rest without a programme. Overnight or a day. Meals included.</p><span class="meta">See rooms and food →</span></a>' +
          '<a class="card" href="#check-in"><h3>Check In</h3><p>Free monthly gathering. Next: Saturday 26 or Sunday 27 September 2026.</p><span class="meta">Next dates →</span></a>' +
          '<a class="card" href="#events"><h3>Events</h3><p>Small themed weekends — writing, grief, nature, and more.</p><span class="meta">See what’s coming →</span></a>' +
          '<a class="card" href="#support"><h3>Support us</h3><p>Donations and time keep meals, staff, and funded stays possible.</p><span class="meta">Give or volunteer →</span></a>' +
        "</div></section>" +
      '<section class="band"><div class="wrap">' +
        '<p class="kicker">Cost and access</p>' +
        "<h2 class=\"section-title\">From $180 a night, meals included.</h2>" +
        "<p class=\"prose\">A day stay is $60. If money is the barrier, subsidised and funded stays exist. Paying the full rate helps another woman come. " + LOREM + "</p>" +
        '<div class="actions">' + btn("See stay options", "#retreats", "btn-solid") + "</div>" +
      "</div></section>" +
      '<section class="wrap"><blockquote class="quote">“I walked into Te Wāhi Ora alone. Happily alone. And because of this I have been able to experience one of the deepest, most wonderful experiences I’ve had.”<cite>A guest · from the current site</cite></blockquote></section>' +
      faqBlock() +
      '<section class="band-sky"><div class="wrap" style="text-align:center">' +
        "<h2 class=\"section-title\">Keep this place going</h2>" +
        "<p>Donations and time make meals, staff, and funded stays possible.</p>" +
        '<div class="actions" style="justify-content:center">' + btn("Support us", "#support", "btn-solid") + "</div>" +
      "</div></section>"
    );
  },
  retreats: function () {
    return (
      pageHero("Retreats &amp; Stays", "The house, the meals, the beach — whether you come to rest or for a programme.") +
      '<section class="wrap">' +
        '<div class="photo-row">' +
          '<img alt="Ocean and sky" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80">' +
          '<img alt="Garden path" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80">' +
          '<img alt="Table and food" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80">' +
        "</div>" +
        "<p class=\"lede-block\">This is the house you sleep in and the table you eat at. " + LOREM + "</p>" +
        '<p class="kicker">What’s included</p>' +
        '<div class="icons">' +
          "<div><span>🍽</span>Nourishing meals</div>" +
          "<div><span>🛏</span>Bed linen</div>" +
          "<div><span>🌊</span>Beach at the door</div>" +
          "<div><span>🫖</span>Tea and coffee</div>" +
        "</div>" +
        "<h2 class=\"section-title\">Choose how you stay</h2>" +
        stayTabs() +
        "<h2 class=\"section-title\" style=\"margin-top:2rem\">Nourishment</h2>" +
        "<p class=\"prose\">Meals are part of the care, not a hotel extra. " + LOREM_LONG + "</p>" +
        "<h2 class=\"section-title\">While you are here</h2>" +
        "<p class=\"prose\">Optional counselling, massage, Reiki, walks, the black sand. Gift vouchers and the digital cookbook can be bought from this page. For local Piha information we would link out to This is Piha, if they agree.</p>" +
      "</section>"
    );
  },
  stay: function () { return PAGES.retreats(); },
  events: function () {
    var cards = EVENTS.map(eventCard).join("");
    return (
      pageHero("Events", "Check Ins and themed weekends. Past dates drop off as we go.") +
      '<section class="wrap">' +
        '<div class="note"><p>The house, the rooms and the meals are described on <a href="#retreats">Retreats &amp; Stays</a> — that is where you sleep and eat, whether you came to rest or for a gathering. Groups and facilitators whose purpose fits can <a href="#group-hire">hire the place</a>; we will say whether the use belongs here.</p><p>' + LOREM + "</p>" +
        '<div class="photo-row" style="margin-top:1rem;margin-bottom:0">' +
          '<img alt="The house" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80">' +
          '<img alt="A bedroom" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=700&q=80">' +
          '<img alt="A meal" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80">' +
        "</div></div>" +
        '<div class="grid grid-3">' +
          '<article class="card"><img alt="" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"><p class="meta">Next: 26 or 27 September 2026</p><h3>Check In</h3><p>A free gathering on the last weekend of each month — Saturday or Sunday. Optional overnight at usual stay rates. Women together, a Listener if you want one, lunch at the table.</p><div class="actions card-actions">' + btn("Read more", "#check-in", "btn-line") + btn("Book", "#book", "btn-solid") + "</div></article>" +
          cards +
        "</div></section>"
    );
  },
  "what-we-offer": function () { return PAGES.events(); },
  "check-in": function () {
    return (
      pageHero("Check In", "A free monthly gathering — Saturday or Sunday, last weekend of the month.") +
      '<section class="wrap prose">' +
        "<h2>What it is</h2><p>Women together, without a course to complete. A Listener if you want to talk, the beach if you don’t, lunch at the table. Metaphor this year: air.</p>" +
        "<h2>Who it is for</h2><p>Any woman who wants a supported day among other women. You do not need a crisis to come. " + LOREM + "</p>" +
        "<h2>What happens</h2>" + checkInGlance() +
        "<h2>When</h2><p>Last weekend of each month, March to November. Next: Saturday 26 or Sunday 27 September 2026. Then 31 October / 1 November, and 28 or 29 November.</p>" +
        "<h2>Place</h2><p>Te Wāhi Ora, 129 Marine Parade North, Piha. If you stay overnight you are in the same house, at the usual stay rates — see Retreats &amp; Stays.</p>" +
        "<h2>Cost</h2><p>Day visitors: no charge. Overnight: usual stay rates. Subsidy if you need it.</p>" +
        '<div class="actions">' + btn("Book Check In", "#book", "btn-solid") + btn("See the house", "#retreats", "btn-line") + "</div>" +
      "</section>"
    );
  },
  about: function () {
    return (
      pageHero("About", "History, purpose, and the writing that comes out of the house.") +
      '<section class="wrap prose">' +
        "<h2>Who we are</h2><p>Creating Space for Women. Te Wāhi Ora means a healing place: a place to belong to while moving into wholeness. A charitable retreat run by women for women at Piha.</p><p>" + LOREM_LONG + "</p>" +
        "<h2>How it began</h2><p>Bev Holt and Wynsome Diprose imagined this in the late 1980s. The retreat has been offering stays since 1991. " + LOREM + "</p>" +
      "</section>" +
      '<section class="wrap">' +
        "<h2 class=\"section-title\">Newsletter</h2>" +
        '<div class="grid grid-2">' +
          '<form class="form" onsubmit="event.preventDefault(); alert(\'Prototype — Mailchimp would go here.\');"><p><strong>Join the newsletter</strong></p><p>Active now weekly; later about monthly. ' + LOREM + '</p><label>Email <input type="email" required></label><button type="submit">Subscribe</button></form>' +
          "<div><p class=\"lede-block\">Past letters live here so women can catch up. Placeholder images and lorem sit in until real issues are pasted in.</p></div>" +
        "</div>" +
        '<div class="grid grid-2" style="margin-top:1rem">' + LETTERS.map(articleCard).join("") + "</div>" +
        "<h2 class=\"section-title\" style=\"margin-top:2rem\">Bev’s blog</h2>" +
        "<p class=\"lede-block\">Longer pieces, so she can write again. Older posts can stay as an archive.</p>" +
        '<div class="grid grid-2">' + BLOGS.map(articleCard).join("") + "</div>" +
        "<h2 class=\"section-title\" style=\"margin-top:2rem\">Many Paths, Many Voices</h2>" +
        "<p class=\"lede-block\">Writing from the weekends and other voices around Te Wāhi Ora.</p>" +
        '<div class="grid grid-2">' + VOICES.map(articleCard).join("") + "</div>" +
      "</section>"
    );
  },
  "reading-room": function () { return PAGES.about(); },
  voices: function () { return PAGES.about(); },
  news: function () { return PAGES.about(); },
  support: function () {
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
        "<p class=\"lede-block\">People, trusts and organisations who keep the door open would be named here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere cubilia Curae.</p>" +
        "<p class=\"lede-block\">We would thank cooks, Listeners, gardeners, the 400 × $10 circle, and funders who make subsidised nights possible. Vestibulum id ligula porta felis euismod semper.</p>" +
        '<div class="grid grid-2">' +
          '<div class="card"><h3>Friends of the house</h3><p>' + LOREM + "</p></div>" +
          '<div class="card"><h3>Funders and partners</h3><p>' + LOREM + "</p></div>" +
        "</div>" +
      "</section>"
    );
  },
  book: function () {
    return (
      pageHero("Book", "Please fill out the form if you would like to stay. The team still confirm.") +
      '<section class="wrap">' + stayForm("Booking form") + "</section>"
    );
  },
  contact: function () {
    return (
      pageHero("Contact", "Write or text. Bookings use Book.") +
      '<section class="wrap grid grid-2">' +
        "<div>" +
          "<p class=\"lede-block\">Questions that are not a booking — volunteering, gifts, the Trust. " + LOREM + "</p>" +
          "<p>129 Marine Parade North, Piha<br>tewahiora@gmail.com<br>Mobile 022 078 5757 (text is welcome)<br>Landline 09 812 8775 (forwards to mobile)</p>" +
        "</div>" +
        '<form class="form" onsubmit="event.preventDefault(); alert(\'Prototype only.\');"><label>Name <input></label><label>Email <input type="email"></label><label>Message <textarea></textarea></label><button type="submit">Send</button></form>' +
      "</section>"
    );
  },
  "group-hire": function () {
    return (
      pageHero("Hire the place", "For groups and facilitators whose purpose fits.") +
      '<section class="wrap">' +
        "<p class=\"lede-block\">This is not a party house. If your gathering belongs with women’s rest, healing, or learning, enquire. Rooms and meals are on Retreats &amp; Stays.</p>" +
        "<p class=\"lede-block\">" + LOREM_LONG + "</p>" +
        hireForm() +
        '<div class="actions" style="justify-content:center">' + btn("See the house", "#retreats", "btn-line") + "</div>" +
      "</section>"
    );
  },
  cancellation: function () {
    return pageHero("Cancellation policy", "Notice, deposits, refunds — linked from Book.") + '<section class="wrap prose"><p>Placeholder for the rules they already publish.</p><p>' + LOREM_LONG + "</p></section>";
  }
};

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
        '<div class="actions">' + btn("Book", "#book", "btn-solid") + btn("The house", "#retreats", "btn-line") + "</div>" +
      "</section>"
    );
  };
});

LETTERS.concat(BLOGS, VOICES).forEach(function (item) {
  PAGES[item.id] = function () { return articlePage(item); };
});

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
  $("footer").innerHTML = footerHtml();
  var view = PAGES[id];
  $("main").innerHTML = view ? view() : PAGES.home();
  bindStayTabs();
  document.title = (id === "home" ? "Home" : document.querySelector("#main h1").textContent) + " — Te Wāhi Ora";
  window.scrollTo(0, 0);
  $("nav").classList.remove("open");
  $("menu-toggle").setAttribute("aria-expanded", "false");
}

$("menu-toggle").addEventListener("click", function () {
  var open = $("nav").classList.toggle("open");
  this.setAttribute("aria-expanded", open ? "true" : "false");
});

window.addEventListener("hashchange", render);
render();
