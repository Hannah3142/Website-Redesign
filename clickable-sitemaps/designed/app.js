var EVENTS = [
  { id: "event-grief", title: "Supporting Grief", when: "14–16 August 2026", blurb: "Time to rest, walk, and be held in loss — with other women, not alone with it." },
  { id: "event-writing", title: "Women’s Writing Weekends", when: "16–18 October 2026", blurb: "Space to write, share, and hear your own voice again. Three weekends across the year." },
  { id: "event-nature", title: "Nature Immersion", when: "6–8 November 2026", blurb: "Walks, ritual, rest and the black sand — a weekend of belonging to the land." },
  { id: "event-moving-on", title: "Moving On", when: "13–15 March 2026", blurb: "For a threshold: honour what has been, and step forward without rushing." },
  { id: "event-finances", title: "A Woman’s Finances", when: "12–14 June 2026", blurb: "Money, confidence and clarity, workshopped gently in Piha." },
  { id: "event-sewing", title: "Creative Sewing Weekend", when: "Dates TBC", blurb: "[Older / to confirm] Sew, talk, and let meals appear." },
  { id: "event-surfing", title: "Women’s Surfing Weekends", when: "Past programme", blurb: "[Archive] Ocean confidence and beginner-friendly surf." },
  { id: "event-roots", title: "Exploring Our Roots", when: "Past programme", blurb: "[Archive] A weekend with Piha’s wild ground." }
];

function $(id) { return document.getElementById(id); }

function ensureProtoBar() {
  if (document.querySelector(".proto-bar")) return;
  var bar = document.createElement("div");
  bar.className = "proto-bar";
  bar.innerHTML = '<a href="../../deliverables/sitemap-and-wireframes/tree.html">← Sitemap</a><span>Designed preview · not the live site</span>';
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
  if (id === "stay" || id === "group-hire") return "stay";
  if (id === "what-we-offer" || id === "check-in" || id.indexOf("event-") === 0) return "offer";
  if (id === "about") return "about";
  if (id === "news") return "news";
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
  return (
    '<a href="#home" class="' + cls("home").trim() + '">Home</a>' +
    '<a href="#stay" class="' + cls("stay").trim() + '">Stay</a>' +
    '<div class="nav-drop' + cls("offer") + '">' +
      '<a href="#what-we-offer">What we offer</a>' +
      '<div class="nav-menu">' +
        '<a href="#what-we-offer"' + allCurrent + ">All programmes</a>" +
        '<a href="#check-in"' + checkInCurrent + ">Check In</a>" +
        eventLinks +
      "</div>" +
    "</div>" +
    '<a href="#about" class="' + cls("about").trim() + '">About</a>' +
    '<a href="#news" class="' + cls("news").trim() + '">News</a>' +
    '<a href="#contact" class="' + cls("contact").trim() + '">Contact</a>' +
    btn("Book", "#book", "btn-primary" + cls("book")) +
    btn("Support", "#support", "btn-ghost" + cls("support"))
  );
}

function footerHtml() {
  return (
    '<div class="footer-grid">' +
      "<div><h2>Te Wāhi Ora</h2><p>129 Marine Parade North<br>Piha Beach, Auckland<br>Women’s retreat · Charitable trust</p></div>" +
      "<div><h2>Visit</h2><ul>" +
        '<li><a href="#stay">Stay</a></li>' +
        '<li><a href="#what-we-offer">What we offer</a></li>' +
        '<li><a href="#book">Book</a></li>' +
        '<li><a href="#group-hire">Hire the house</a></li>' +
      "</ul></div>" +
      "<div><h2>More</h2><ul>" +
        '<li><a href="#support">Support</a></li>' +
        '<li><a href="#news">News</a></li>' +
        '<li><a href="#contact">Contact</a></li>' +
        '<li><a href="#cancellation">Cancellation policy</a></li>' +
      "</ul></div>" +
    "</div>"
  );
}

function pageHero(title, lede) {
  return '<section class="page-hero"><div class="wrap" style="padding-top:0;padding-bottom:0"><h1>' + title + "</h1><p>" + lede + "</p></div></section>";
}

function eventCard(ev) {
  return (
    '<article class="card">' +
      '<p class="meta">' + ev.when + "</p>" +
      "<h3>" + ev.title + "</h3>" +
      "<p>" + ev.blurb + "</p>" +
      '<div class="actions">' + btn("Book", "#book", "btn-solid") + btn("Read more", "#" + ev.id, "btn-line") + "</div>" +
    "</article>"
  );
}

function formBlock(title) {
  return (
    '<form class="form" onsubmit="event.preventDefault(); alert(\'Prototype only — this would send to Te Wāhi Ora.\');">' +
      "<p><strong>" + title + "</strong></p>" +
      '<label>What are you booking?<select><option>Rest stay (no programme)</option><option>Day stay</option><option>Check In</option><option>A listed event</option><option>Hire the house</option></select></label>' +
      "<label>Overnight or day only?<select><option>Overnight</option><option>Day only</option></select></label>" +
      '<label>Name <input required></label>' +
      '<label>Email <input type="email" required></label>' +
      '<label>Phone <input></label>' +
      '<label>Dates <input placeholder="Arrival and departure"></label>' +
      '<label>Message <textarea></textarea></label>' +
      "<button type=\"submit\">Send request</button>" +
    "</form>"
  );
}

var PAGES = {
  home: function () {
    return (
      '<section class="hero"><div class="hero-inner">' +
        '<p class="eyebrow">Piha · women for women</p>' +
        "<h1>A place to belong to while moving into wholeness.</h1>" +
        "<p class=\"lede\">A charitable retreat by the Tasman: rest, meals, and the company of other women — for a night, a day, or a gathering.</p>" +
        '<div class="actions">' + btn("Book", "#book", "btn-primary") + btn("What we offer", "#what-we-offer", "btn-ghost") + "</div>" +
      "</div></section>" +
      '<section class="wrap">' +
        '<p class="kicker">Four ways to come</p>' +
        "<h2 class=\"section-title\">Choose what fits.</h2>" +
        '<div class="grid grid-4">' +
          '<a class="card" href="#stay"><h3>Stay</h3><p>Rest without a programme. Overnight or a day. Meals included.</p><span class="meta">See rooms and food →</span></a>' +
          '<a class="card" href="#check-in"><h3>Check In</h3><p>Free monthly gathering. Saturday or Sunday. Optional overnight.</p><span class="meta">Next dates →</span></a>' +
          '<a class="card" href="#what-we-offer"><h3>Events</h3><p>Small themed weekends — writing, grief, nature, and more.</p><span class="meta">See the diary →</span></a>' +
          '<a class="card" href="#group-hire"><h3>Hire the house</h3><p>For groups and facilitators whose purpose fits the Trust.</p><span class="meta">Enquire →</span></a>' +
        "</div></section>" +
      '<section class="band"><div class="wrap">' +
        '<p class="kicker">Cost and access</p>' +
        "<h2 class=\"section-title\">From $180 a night, meals included.</h2>" +
        "<p class=\"prose\">A day stay is $60. If money is the barrier, subsidised and funded stays exist. Paying the full rate helps another woman come.</p>" +
        '<div class="actions">' + btn("See stay options", "#stay", "btn-solid") + "</div>" +
      "</div></section>" +
      '<section class="wrap"><blockquote class="quote">“I walked into Te Wāhi Ora alone. Happily alone. And because of this I have been able to experience one of the deepest, most wonderful experiences I’ve had.”<cite>A guest · from the current site</cite></blockquote></section>' +
      '<section class="wrap faq">' +
        '<p class="kicker">Questions</p><h2 class="section-title">Before you come</h2>' +
        "<details open><summary>Can I come without an event?</summary><p>Yes. Many women come only to rest. Book a stay for a night, several nights, or a day.</p></details>" +
        "<details><summary>If I join a weekend, is that overnight or a day?</summary><p>Same house either way. Overnight means you sleep here (weekends: Friday and Saturday nights). A day stay is about 9:30am–5:30pm.</p></details>" +
        "<details><summary>Can I come alone?</summary><p>Yes. Most women do.</p></details>" +
        "<details><summary>What if I cannot pay the full rate?</summary><p>Ask. Subsidised rates and the Wynsome Fund exist so cost is not the only door.</p></details>" +
      "</section>" +
      '<section class="band-sky"><div class="wrap" style="text-align:center">' +
        "<h2 class=\"section-title\">Keep this place going</h2>" +
        "<p>Donations and time make meals, staff, and funded stays possible.</p>" +
        '<div class="actions" style="justify-content:center">' + btn("Support us", "#support", "btn-solid") + "</div>" +
      "</div></section>"
    );
  },
  stay: function () {
    return (
      pageHero("Stay", "The house, the meals, the beach — whether you come to rest or for a programme.") +
      '<section class="wrap">' +
        '<div class="photo-row">' +
          '<img alt="Ocean and sky" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80">' +
          '<img alt="Garden path" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80">' +
          '<img alt="Table and food" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80">' +
        "</div>" +
        '<p class="note">Coming for Check In or a weekend? You still stay in this house and eat these meals. Overnight or day only means whether you sleep here — not a different place.</p>' +
        "<h2 class=\"section-title\">Overnight, day, or hire</h2>" +
        "<table class=\"compare\"><thead><tr><th></th><th>Overnight</th><th>Day stay</th><th>Hire the house</th></tr></thead><tbody>" +
        "<tr><th>Who</th><td>A woman sleeping here, with or without a programme</td><td>A woman here for the day only</td><td>A group whose purpose fits</td></tr>" +
        "<tr><th>Length</th><td>One or more nights. Weekends: Friday and Saturday nights</td><td>About 9:30am–5:30pm</td><td>By arrangement</td></tr>" +
        "<tr><th>Price</th><td>From $180 including meals. Sea View / Daisy $260. Chalets and caravan $195</td><td>$60 including lunch</td><td>Enquire</td></tr>" +
        "<tr><th>Included</th><td>Room, three meals, linen, tea and coffee</td><td>Lunch, snacks, the house and garden — no linen</td><td>Agreed together</td></tr>" +
        "<tr><th>Piha & extras</th><td>Beach, walks, optional counselling, massage, Reiki</td><td>The same</td><td>If the group wants it</td></tr>" +
        "<tr><th>If cost is hard</th><td>Ask about $140 subsidy / Wynsome</td><td>Ask</td><td>—</td></tr>" +
        "</tbody></table>" +
        '<div class="actions" style="margin-top:1.2rem">' + btn("Book a stay", "#book", "btn-solid") + btn("Hire enquiry", "#group-hire", "btn-line") + "</div>" +
      "</section>"
    );
  },
  "what-we-offer": function () {
    var cards = EVENTS.map(eventCard).join("");
    return (
      pageHero("What we offer", "Check In and themed weekends. You can also come with no programme at all.") +
      '<section class="wrap">' +
        '<p class="note">The house, rooms and meals are on <a href="#stay">Stay</a>.</p>' +
        '<div class="grid grid-3">' +
          '<article class="card"><p class="meta">Last weekend of each month</p><h3>Check In</h3><p>Free day gathering. Optional overnight at usual rates.</p><div class="actions">' + btn("Book", "#book", "btn-solid") + btn("Read more", "#check-in", "btn-line") + "</div></article>" +
          cards +
        "</div></section>"
    );
  },
  "check-in": function () {
    return (
      pageHero("Check In", "A free monthly gathering — Saturday or Sunday, last weekend of the month.") +
      '<section class="wrap prose">' +
        "<h2>What it is</h2><p>Women together, without a course to complete. A Listener if you want to talk, the beach if you don’t, lunch at the table.</p>" +
        "<h2>What happens</h2><p>10:00 arrive and morning tea. 10:30 theme for the day. Time with a Listener or time alone. Simple lunch. Home around 2:15.</p>" +
        "<h2>When</h2><p>2026 dates run March to November on the last weekend of each month. Metaphor this year: air.</p>" +
        "<h2>Cost</h2><p>Day visitors: no charge. Overnight: usual stay rates. Subsidy if you need it.</p>" +
        '<div class="actions">' + btn("Book Check In", "#book", "btn-solid") + btn("See the house", "#stay", "btn-line") + "</div>" +
      "</section>"
    );
  },
  about: function () {
    return (
      pageHero("About", "A retreat run by women for women, in a house by Piha’s black sand.") +
      '<section class="wrap prose">' +
        "<h2>Who we are</h2><p>Te Wāhi Ora means a healing place: a place to belong to while moving into wholeness — a name given with Te Kawerau ā Maki. We are a charitable trust. We cook, make beds, and hold space. Values live in that work: rest without earning it, meals you did not cook, women listening to women. We do not teach a creed.</p>" +
        "<h2>Who it is for</h2><p>Women who need time away — tired, in transition, curious, or simply ready to breathe. You do not need a crisis to come.</p>" +
        "<h2>How it began</h2><p>Bev Holt and Wynsome Diprose imagined this in the late 1980s. The retreat has been offering stays since 1991. Wynsome died the year it began; her name still marks the fund that helps women who cannot pay.</p>" +
        "<h2>People</h2><p>Bev, cooks, Listeners, trustees, patrons, volunteers — a circle around the house, not a corporate team page.</p>" +
        "<h2>Charitable trust</h2><p>Fees do not cover everything. Donations, the 400×$10, and time keep the door open. The full give path is on Support.</p>" +
      "</section>"
    );
  },
  news: function () {
    return (
      pageHero("News", "Letters from Piha, and Bev’s writing, on this site — not only in email.") +
      '<section class="wrap grid grid-2">' +
        '<form class="form" onsubmit="event.preventDefault(); alert(\'Prototype — Mailchimp would go here.\');"><p><strong>Join the newsletter</strong></p><label>Email <input type="email" required></label><button type="submit">Subscribe</button></form>' +
        '<div class="card"><h3>Recent letters</h3><p>Placeholder list: March Check In · Celebration day · Writing weekend reminder. Past issues would live here.</p></div>' +
        '<div class="card"><h3>From Bev</h3><p>Longer pieces can be published here instead of only on a separate blog. The old blog can remain as an archive link.</p></div>' +
      "</section>"
    );
  },
  support: function () {
    return (
      pageHero("Support us", "Money and time keep meals, staff, and funded stays possible.") +
      '<section class="wrap">' +
        "<p class=\"prose\">Te Wāhi Ora is a charitable trust. Paying guests help. So do $10 a month, a funded night for someone else, and Friday in the garden.</p>" +
        '<div class="grid grid-3">' +
          '<div class="card"><h3>Give once</h3><p>Online, or Give a Little.</p>' + btn("Donate", "#support", "btn-solid") + "</div>" +
          '<div class="card"><h3>400 × $10</h3><p>Monthly giving toward staffing.</p>' + btn("Give monthly", "#support", "btn-solid") + "</div>" +
          '<div class="card"><h3>Fund a stay</h3><p>The Wynsome Fund — so another woman can come.</p>' + btn("Fund a stay", "#support", "btn-solid") + "</div>" +
          '<div class="card"><h3>Time</h3><p>Garden, kitchen, overnight cover, admin.</p>' + btn("Volunteer", "#contact", "btn-line") + "</div>" +
          '<div class="card"><h3>Bequests</h3><p>A gift in a will.</p>' + btn("Ask us", "#contact", "btn-line") + "</div>" +
        "</div>" +
        "<h2 class=\"section-title\" style=\"margin-top:2rem\">Thank you</h2><p>Donors, funders, volunteers and organisations who keep the door open would be named here.</p>" +
      "</section>"
    );
  },
  book: function () {
    return (
      pageHero("Book", "A request we answer — until they confirm a live calendar. Online payment can still follow.") +
      '<section class="wrap">' + formBlock("Tell us what you need") + "</section>"
    );
  },
  "group-hire": function () {
    return (
      pageHero("Hire the house", "For groups and facilitators whose purpose fits.") +
      '<section class="wrap prose">' +
        "<p>This is not a party house. If your gathering belongs with women’s rest, healing, or learning, enquire. Rooms, meals and Piha are described on Stay.</p>" +
        '<div class="actions">' + btn("Enquire", "#book", "btn-solid") + btn("See the house", "#stay", "btn-line") + "</div>" +
      "</section>"
    );
  },
  contact: function () {
    return (
      pageHero("Contact", "Questions that are not a booking. Bookings use Book.") +
      '<section class="wrap grid grid-2">' +
        "<div><p>129 Marine Parade North, Piha<br>Phone (one number, to confirm)<br>bookings.tewahiora@gmail.com<br>tewahiorapiha@gmail.com</p>" +
        "<p>Piha Rides for airport and city runs — details as on the current site.</p></div>" +
        '<form class="form" onsubmit="event.preventDefault(); alert(\'Prototype only.\');"><label>Name <input></label><label>Email <input type="email"></label><label>Message <textarea></textarea></label><button type="submit">Send</button></form>' +
      "</section>"
    );
  },
  cancellation: function () {
    return pageHero("Cancellation policy", "Notice, deposits, refunds — linked from Book.") + '<section class="wrap prose"><p>Placeholder for the rules they already publish.</p></section>';
  },
  "need-help": function () {
    return pageHero("Do you need help?", "What this place can offer, and what it is not.") + '<section class="wrap prose"><p>Draft only if they agree: we are not a crisis or clinical service. Helplines can sit here.</p></section>';
  }
};

EVENTS.forEach(function (ev) {
  PAGES[ev.id] = function () {
    return (
      pageHero(ev.title, ev.when + " · " + ev.blurb) +
      '<section class="wrap prose">' +
        "<h2>What it is</h2><p>" + ev.blurb + "</p>" +
        "<h2>The place</h2><p>You stay in the same house as any other guest. Overnight or day is only whether you sleep here. See Stay for rooms, meals and Piha.</p>" +
        "<h2>Cost</h2><p>Usual stay rates unless a koha or extra fee is listed. Day visitors: as published for that weekend.</p>" +
        '<div class="actions">' + btn("Book", "#book", "btn-solid") + btn("Stay", "#stay", "btn-line") + "</div>" +
      "</section>"
    );
  };
});

function render() {
  ensureProtoBar();
  var id = parseHash();
  $("nav").innerHTML = headerNav();
  $("footer").innerHTML = footerHtml();
  var view = PAGES[id];
  $("main").innerHTML = view ? view() : PAGES.home();
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
