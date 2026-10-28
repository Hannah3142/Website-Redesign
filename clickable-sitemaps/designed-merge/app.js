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
    title: "Sea View",
    rate: "$260 a night including meals",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    blurb: "Ensuite, double bed, a deck to the Tasman. The house also calls it Daisy.",
    feel: "The sea in the window. Private, spacious, a soak in the house bath if you want it.",
    bath: "Your own ensuite."
  },
  {
    id: "room-garden",
    title: "Garden Room",
    rate: "$180 a night including meals",
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    blurb: "A cosy single in the house, garden deck, near the bathroom. The kitchen is close — lively, not silent.",
    feel: "Close to the hub of the house. Best if you like being near people; less so if you need hush.",
    bath: "In the house, close by."
  },
  {
    id: "room-chalet",
    title: "Garden Chalet",
    rate: "$195 a night including meals",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    blurb: "Your own chalet in the garden — single bed, desk, armchair. Shared bathroom a few steps away.",
    feel: "A little house of your own among the trees. Quiet, private, not inside the main house.",
    bath: "Shared, a few steps outside."
  },
  {
    id: "room-caravan",
    title: "Retro Caravan",
    rate: "$195 a night including meals",
    img: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=1200&q=80",
    blurb: "A redecorated caravan in the garden — double bed, nostalgic, the sea close by. Shared bathroom.",
    feel: "Sleep in a caravan by the sea. Simple, a little playful, still looked after.",
    bath: "Shared, a few steps outside."
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
        '<a href="#what-we-offer">Gift vouchers &amp; cookbook</a>' +
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
        '<p class="footer-policy"><a href="#cancellation">Cancellation policy</a></p>' +
        socialLinks("footer-social") +
      "</div>" +
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

function glanceBoard(title, img, days, cta, lede) {
  var items = days.map(function (day, i) {
    var rows = day.rows.map(function (row) {
      if (row && row.need) {
        return (
          '<li class="glance-slot">' +
            '<span class="glance-time">' + (row.when || "—") + "</span>" +
            '<p class="glance-need">' + row.need + "</p>" +
          "</li>"
        );
      }
      if (!row || (!row.when && !row.what)) {
        return (
          '<li class="glance-slot">' +
            '<span class="glance-time">—</span>' +
            '<p class="glance-need">Need: the clock time, and what happens here.</p>' +
          "</li>"
        );
      }
      return (
        "<li>" +
          '<span class="glance-time">' + (row.when || "") + "</span>" +
          "<p>" + (row.what || "") + "</p>" +
        "</li>"
      );
    }).join("");
    return (
      '<li class="glance-break' + (i === 0 ? " is-first" : "") + '"><span>' + day.title + "</span></li>" +
      rows
    );
  }).join("");
  return (
    '<div class="glance-split">' +
      '<img alt="" src="' + img + '">' +
      '<div class="glance-copy">' +
        '<h3 class="glance-heading">' + title + "</h3>" +
        (lede ? '<div class="glance-lede">' + lede + "</div>" : "") +
        '<ol class="glance-times">' + items + "</ol>" +
        (cta ? '<div class="actions glance-cta">' + cta + "</div>" : "") +
      "</div>" +
    "</div>"
  );
}

function glanceCols(days) {
  return (
    '<div class="weekend-glance">' +
      days.map(function (day) {
        var rows = day.rows.map(function (row) {
          return '<li><span class="glance-when">' + row.when + '</span><span class="glance-what">' + row.what + "</span></li>";
        }).join("");
        return (
          "<article>" +
            '<p class="glance-label">' + day.label + "</p>" +
            "<h3>" + day.title + "</h3>" +
            '<ul class="glance-list">' + rows + "</ul>" +
          "</article>"
        );
      }).join("") +
    "</div>"
  );
}

function weekendGlance() {
  return glanceCols([
    {
      label: "Day 1",
      title: "Friday",
      rows: [
        { when: "From 4:00pm", what: "Arrive, settle into your room." },
        { when: "Afternoon", what: "Walk to the black sand if you like." },
        { when: "Evening", what: "Dinner at the table. The house is yours." }
      ]
    },
    {
      label: "Day 2",
      title: "Saturday",
      rows: [
        { when: "Morning", what: "Breakfast at your own rhythm." },
        { when: "The day", what: "Rest, Waitākere bush, the Tasman, or nothing at all." },
        { when: "Meals", what: "Lunch and dinner cooked for you." }
      ]
    },
    {
      label: "Going home",
      title: "Sunday",
      rows: [
        { when: "Morning", what: "Breakfast, and a last walk if you want it." },
        { when: "Lunch", what: "At the table." },
        { when: "Around 2:00pm", what: "Time to go. Weekends are Friday and Saturday nights — two nights — so you have time to arrive." }
      ]
    }
  ]);
}

function timeGlance() {
  return glanceCols([
    { label: "Whenever you wake", title: "Morning", rows: [
      { when: "No programme", what: "Tea, the garden, the Tasman — or stay in bed." }
    ]},
    { label: "The table", title: "Meals", rows: [
      { when: "Cooked for you", what: "Other women, or quiet. Lunch if you came for the day; dinner if you are sleeping here." }
    ]},
    { label: "When you are ready", title: "Leaving", rows: [
      { when: "About 2:00pm", what: "After lunch, if you stayed the night." },
      { when: "By 5:30pm", what: "If you came for the day." }
    ]}
  ]);
}

function stayInvite() {
  return (
    '<section class="home-panel home-panel-foam"><div class="wrap home-split">' +
      "<div>" +
        '<p class="kicker">You are welcome</p>' +
        "<h2 class=\"section-title\">You can still come.</h2>" +
        '<p class="section-sub">even if money is tight.</p>' +
        "<p>Most women arrive alone. Overnight is from $180, with meals. A day is $60. If that is more than you can pay, write to us — we will try to arrange something that fits. Sometimes the whole stay can be covered.</p>" +
        '<div class="actions">' + btn("Enquire", "#contact", "btn-clay") + "</div>" +
      "</div>" +
      '<img alt="" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=80">' +
    "</div></section>"
  );
}

function overnightLede() {
  return (
    "<p>You can sleep here any night of the week. Monday, Thursday — it does not have to be a weekend. One night is a stay. Meals are included.</p>" +
    "<p>Weekends are the only extra rule: you book Friday night and Saturday night together. That is so Saturday is a whole day in the house, not a rush. After a weekend you leave Sunday after lunch, about 2pm.</p>"
  );
}

function overnightDays() {
  return [
    {
      title: "Day 1",
      rows: [
        { when: "4:00pm", what: "The house is ready from about 4pm. Settle into your room, have a cup of tea, walk to the black sand if you have the energy." },
        { when: "Afternoon", what: "The garden, or over the dunes to the beach. Nothing is scheduled. You do not have to go anywhere." },
        { when: "—", need: "Dinner time. Meals are cooked — what clock do they sit down?" }
      ]
    },
    {
      title: "Day 2",
      rows: [
        { when: "—", need: "Breakfast time. Live site says personally chosen, at leisure, sometimes brought to the room." },
        { when: "The day", what: "There is no programme. Bush, the beach, a book, or nothing at all. Lunch and dinner still appear." },
        { when: "—", need: "Lunch time on a weekday stay." },
        { when: "—", need: "Weekday check-out. A night is priced as 24 hours — confirm if she leaves after lunch, or 24 hours after 4pm." },
        { when: "2:00pm", what: "If you came for the weekend: Sunday after lunch is time to leave." }
      ]
    }
  ];
}

function dayStayDays() {
  return [
    {
      title: "Morning",
      rows: [
        { when: "9:30am", what: "Arrive. Tea, the garden, the black sand — or sit until you are ready to move." },
        { when: "—", need: "Anything timed before lunch, or is 9:30am until lunch unstructured?" }
      ]
    },
    {
      title: "Midday",
      rows: [
        { when: "—", need: "Lunch time for a day stay. $60 includes lunch at the table." },
        { when: "If you like", what: "A Listener, massage or Reiki — extra, arranged if you ask. Or a book and the deck. You can also do nothing." }
      ]
    },
    {
      title: "Leaving",
      rows: [
        { when: "—", need: "The afternoon until 5:30pm — rest, beach, extras?" },
        { when: "5:30pm", what: "Time to leave." }
      ]
    }
  ];
}

function eventDays() {
  return [
    {
      title: "Morning",
      rows: [
        { when: "10:00am", what: "Arrive. Morning tea with other women. There is no course to complete." },
        { when: "10:30am", what: "A theme for the day. Time with a Listener if you want to talk, or time alone if you don’t." },
        { when: "—", need: "What fills 10:30am until lunch — a second session, beach, rest?" }
      ]
    },
    {
      title: "Lunch",
      rows: [
        { when: "1:15pm", what: "Light lunch at the table, until about 2:00pm." }
      ]
    },
    {
      title: "Leaving",
      rows: [
        { when: "—", need: "Anything after lunch, or is lunch the close of the day?" },
        { when: "2:00pm", what: "The gathering ends. Time to leave — or sleep here, at the usual stay rate." }
      ]
    }
  ];
}

function timeHere() {
  return (
    '<section class="home-panel home-panel-foam"><div class="wrap">' +
      '<p class="kicker">Your time here</p>' +
      "<h2 class=\"section-title\">How a stay unfolds.</h2>" +
      '<div class="stay-tabs time-here">' +
        '<div class="tab-bar" role="tablist">' +
          '<button type="button" class="is-on" data-tab="overnight" aria-selected="true">Overnight</button>' +
          '<button type="button" data-tab="day" aria-selected="false">Day stay</button>' +
          '<button type="button" data-tab="event" aria-selected="false">Event</button>' +
        "</div>" +
        '<div class="tab-panel" data-panel="overnight">' +
          glanceBoard(
            "A night at a glance",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
            overnightDays(),
            btn("Book a stay", "#book", "btn-clay"),
            overnightLede()
          ) +
        "</div>" +
        '<div class="tab-panel" data-panel="day" hidden>' +
          glanceBoard(
            "Your day at a glance",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            dayStayDays(),
            btn("Book a day", "#book", "btn-clay"),
            "<p>Come for the day — not a night. About 9:30am until 5:30pm. $60, including lunch.</p>"
          ) +
        "</div>" +
        '<div class="tab-panel" data-panel="event" hidden>' +
          glanceBoard(
            "A Check In at a glance",
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
            eventDays(),
            btn("What’s on", "#what-we-offer", "btn-clay"),
            "<p>A monthly gathering, 10am until 2pm, Saturday or Sunday of the last weekend. The day is free. A bed that night is the usual stay rate.</p>"
          ) +
        "</div>" +
      "</div>" +
    "</div></section>"
  );
}

function comeStayTry() {
  return (
    '<section class="come-try" id="ways-to-come">' +
      '<div class="wrap">' +
        '<p class="kicker">Ways to come</p>' +
        '<h2 class="section-title">A night, a day, or a gathering.</h2>' +
        "<p class=\"section-intro\">Pick overnight, a day, a Check In, or hire. The line under the tab is what this way of coming is. The timetable is what those hours look like.</p>" +
        '<div class="come-try-box">' +
          '<div class="stay-tabs time-here">' +
            '<div class="tab-bar" role="tablist">' +
              '<button type="button" class="is-on" data-tab="overnight" aria-selected="true">Overnight</button>' +
              '<button type="button" data-tab="day" aria-selected="false">Day stay</button>' +
              '<button type="button" data-tab="event" aria-selected="false">Event</button>' +
              '<button type="button" data-tab="hire" aria-selected="false">Hire</button>' +
            "</div>" +
            '<div class="tab-panel" data-panel="overnight">' +
              '<p class="come-try-lead"><strong>A bed and meals, no programme.</strong> From $180 a night. Any night of the week. A weekend is Friday night and Saturday night together.</p>' +
              glanceBoard(
                "From about 4pm, until you leave",
                "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
                overnightDays(),
                btn("Book a stay", "#book", "btn-clay"),
                overnightLede()
              ) +
            "</div>" +
            '<div class="tab-panel" data-panel="day" hidden>' +
              '<p class="come-try-lead"><strong>A day in the house, not a bed.</strong> About 9:30am until 5:30pm. $60, including lunch.</p>' +
              glanceBoard(
                "9:30am until 5:30pm",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
                dayStayDays(),
                btn("Book a day", "#book", "btn-clay"),
                ""
              ) +
            "</div>" +
            '<div class="tab-panel" data-panel="event" hidden>' +
              '<p class="come-try-lead"><strong>A Check In, or a themed gathering.</strong> Check In is free as a day visitor, last weekend of the month. A bed that night is the usual stay rate.</p>' +
              glanceBoard(
                "10am until 2pm",
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
                eventDays(),
                btn("What’s on", "#what-we-offer", "btn-clay"),
                ""
              ) +
            "</div>" +
            '<div class="tab-panel" data-panel="hire" hidden>' +
              '<p class="come-try-lead"><strong>The house for a group of women.</strong> Purpose needs to fit rest, healing or learning — not a party house.</p>' +
              '<div class="glance-split">' +
                '<img alt="" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80">' +
                "<div class=\"glance-copy\">" +
                  '<h3 class="glance-heading">Dates, meals and rooms, agreed together</h3>' +
                  "<p class=\"glance-lede\">There is no public timetable. You shape the days with the house. Use the hire enquiry — not the stay form.</p>" +
                  '<div class="actions glance-cta">' + btn("Hire enquiry", "#group-hire", "btn-clay") + "</div>" +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</section>"
  );
}

function checkInGlance() {
  return glanceCols([
    { label: "Arrive", title: "10:00am", rows: [{ when: "Morning tea", what: "Other women, no course to complete." }] },
    { label: "The day", title: "10:30am", rows: [{ when: "A theme", what: "Time with a Listener, or time alone." }] },
    { label: "Lunch", title: "1:15pm", rows: [{ when: "Light lunch", what: "At the table, until about 2:00pm." }] },
    { label: "Going home", title: "2:00pm", rows: [{ when: "Unless you sleep here", what: "Overnight is at the usual stay rates." }] }
  ]);
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
        "<p>A woman sleeping here, with or without a programme. From $180 a night including meals. Sea View $260. Chalets and caravan $195. Linen, three meals, tea and coffee.</p>" +
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
      '<div class="faq-panel"><div class="faq-panel-inner">' + answer + "</div></div>" +
    "</details>"
  );
}

function faqBlock() {
  return (
    '<section class="home-faq"><div class="wrap faq">' +
      '<p class="kicker">Questions</p><h2 class="section-title">Before you come</h2>' +
      faqItem("Can I come without an event?", "<p>Yes. Many women come only to rest. Book a stay for a night, several nights, or a day.</p>", true) +
      faqItem("If I join a weekend, is that overnight or a day?", "<p>Overnight means you sleep here (weekends: Friday and Saturday nights). A day stay is about 9:30am–5:30pm.</p>") +
      faqItem("Can I come alone?", "<p>Yes. Most women do.</p>") +
      faqItem("What if I have a disability?", '<p>Please enquire so we can talk through access and what would help. Email <a href="mailto:tewahiora@gmail.com">tewahiora@gmail.com</a>.</p>') +
      faqItem("What if I cannot pay the full rate?", "<p>Write to us. We will try to arrange something that fits — sometimes the whole stay can be covered.</p>") +
      faqItem(
        "What if I need to cancel?",
        "<p>Life changes. If you cannot come, write as soon as you can — they make up the bed and buy the food with you in mind, so a little notice helps.</p>" +
        "<p>Seven days or more before you arrive, your money can usually go toward another date, or come back to you less a small fee. Inside seven days the deposit may be lost; the rest can often still be moved or returned. If something sudden happens, tell them. They will talk it through.</p>" +
        '<p><a class="faq-policy-link" href="#cancellation">Read the cancellation policy</a></p>'
      ) +
      faqItem("Is Te Wāhi Ora a clinical service?", "<p>No. We are not a clinical facility and we are not staffed by medical professionals. The house is rest, meals and other women — the fence at the top of the cliff, not the ambulance at the bottom. Helpline numbers are in the footer if you need to talk now.</p>") +
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
      "<h2 class=\"section-title\" style=\"margin-top:2.4rem\">Cookbook and vouchers</h2>" +
      "<p class=\"lede-block\">Gifts from the house — not part of booking a stay. The cookbook is digital; vouchers can be digital or printed.</p>" +
      '<div class="grid grid-2">' +
        '<div class="card"><h3>Cookbook</h3><p>$20 plus postage. Recipes from the table. Proceeds go to the Trust, and help them help other women.</p>' + btn("Buy the cookbook", "#nourishment", "btn-line") + "</div>" +
        '<div class="card"><h3>Gift vouchers</h3><p>Give a night, a day, or a contribution toward a stay. Digital or printed.</p>' + btn("Ask about a voucher", "#contact", "btn-line") + "</div>" +
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
        "<p class=\"lede\">If you are tired, carrying too much, or you simply want a break — come. Meals appear, the Tasman is at the door, and you do not have to hold it all alone.</p>" +
        '<div class="actions">' +
          '<a class="btn btn-ghost" href="#home" data-jump="ways-to-come">Choose what fits</a>' +
          btn("Book", "#book", "btn-primary") +
        "</div>" +
      "</div></section>" +
      '<section class="home-ways" id="ways-to-come"><div class="wrap">' +
        '<p class="kicker">Four ways to come</p>' +
        "<h2 class=\"section-title\">Choose what fits.</h2>" +
        "<p class=\"section-intro\">A night in the house, a day to put things down, a gathering with other women, or the house for your group. You do not have to be in crisis to come.</p>" +
        '<div class="grid grid-4">' +
          '<a class="card card-photo" href="#retreats"><img alt="" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"><h3>Retreats &amp; Stay</h3><p>Rest without a programme. Overnight or a day. Meals included.</p><span class="meta">See rooms and food →</span></a>' +
          '<a class="card card-photo" href="#check-in"><img alt="" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"><h3>Check In weekend</h3><p>Free monthly gathering. Next: Saturday 26 or Sunday 27 September 2026.</p><span class="meta">Next dates →</span></a>' +
          '<a class="card card-photo" href="#what-we-offer"><img alt="" src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"><h3>Events</h3><p>Small themed weekends — writing, grief, nature, and more.</p><span class="meta">See the diary →</span></a>' +
          '<a class="card card-photo" href="#group-hire"><img alt="" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"><h3>Hire the house</h3><p>For groups of women whose gathering belongs here.</p><span class="meta">Enquire →</span></a>' +
        "</div></div></section>" +
      stayInvite() +
      '<section class="home-panel home-panel-white"><div class="wrap home-center">' +
        '<p class="kicker">From women who came</p>' +
        '<blockquote class="quote">“I walked into Te Wāhi Ora alone. Happily alone. And because of this I have been able to experience one of the deepest, most wonderful experiences I’ve had.”<cite>A woman who stayed</cite></blockquote>' +
      "</div></section>" +
      faqBlock() +
      '<section class="home-support"><div class="wrap home-center">' +
        '<p class="kicker">Support</p>' +
        "<h2 class=\"section-title\">Keep the table set</h2>" +
        "<p>Fees do not cover everything. A donation or a gift voucher helps keep the door open. Cookbook sales go to the Trust, and help them help other women.</p>" +
        '<div class="actions">' + btn("Support us", "#support", "btn-clay") + "</div>" +
      "</div></section>"
    );
  },
  retreats: function () {
    var roomCards = ROOMS.map(function (room) {
      var price = (room.rate.match(/^\$\d+/) || [""])[0];
      return (
        '<article>' +
          '<a class="room-pic" href="#' + room.id + '"><img alt="" src="' + room.img + '"></a>' +
          '<h3><a href="#' + room.id + '">' + room.title + "</a></h3>" +
          '<p class="room-price">' + price + "</p>" +
          '<p class="room-feel">' + room.blurb + "</p>" +
          '<div class="room-bath">' +
            "<h4>Bathroom</h4>" +
            "<p>" + room.bath + "</p>" +
          "</div>" +
          '<ul class="room-includes">' +
            "<li>All meals included</li>" +
            "<li>Linen included</li>" +
          "</ul>" +
          '<a class="room-see" href="#' + room.id + '">See this room <span class="room-see-arrow" aria-hidden="true">→</span></a>' +
        "</article>"
      );
    }).join("");
    return (
      pageHero("Retreats & Stay", "A bed, a table, and time by the Tasman — with no programme you have to complete.") +
      stayInvite() +
      comeStayTry() +
      '<section class="rooms-section" id="rooms-list"><div class="wrap">' +
        '<p class="kicker">Rooms</p>' +
        "<h2 class=\"section-title\">A bed in the house.</h2>" +
        '<div class="rooms-board">' + roomCards + "</div>" +
      "</div></section>" +
      '<section class="stay-nourish"><div class="wrap home-split">' +
        '<img alt="" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=80">' +
        "<div>" +
          '<p class="kicker">Nourishment</p>' +
          "<h2 class=\"section-title\">Meals appear. Dishes disappear.</h2>" +
          "<p>Women cook for women — with love, and with the garden when it gives. Breakfast at your own rhythm, sometimes in your room. Lunch in the garden or on the deck above the surf. Dinner upstairs in summer; by the fire in winter.</p>" +
          "<p>You do not lift a finger. Overnight includes three meals, snacks, fruit, tea and coffee. A day includes lunch and snacks. Tell us what you cannot eat when you write — most diets can be met (a small extra for gluten-free, dairy-free or vegan).</p>" +
          '<div class="actions">' + btn("Nourishment", "#nourishment", "btn-line") + btn("Cookbook", "#nourishment", "btn-clay") + "</div>" +
        "</div>" +
      "</div></section>" +
      '<section class="home-panel home-panel-white"><div class="wrap">' +
        '<p class="kicker">While you are here</p>' +
        "<h2 class=\"section-title\">Bush, black sand, and the sound of the sea.</h2>" +
        "<p>The house sits in a private garden at Piha. Nature here is not a backdrop — it is how the nervous system settles: sea air, bush, and no programme you have to complete.</p>" +
        '<div class="stay-here stay-here-4">' +
          '<article><img alt="" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"><h3>The whenua</h3><p>Black sand over the dunes in front of the house. Lion Rock, the Tasman, Waitākere bush and tracks behind. Fall asleep to the sea. Walk as far as you have energy; come back when you have had enough.</p></article>' +
          '<article><img alt="" src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800&q=80"><h3>A Listener</h3><p>Someone to sit with, if talking would help. You ask when you write. You can also not talk at all.</p></article>' +
          '<article><img alt="" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"><h3>Massage or Reiki</h3><p>Optional, extra, arranged if you want them. Hands on the body, or energy work — not assumed, never required.</p></article>' +
          '<article><img alt="" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"><h3>The village</h3><p>Piha Store, a café, the Domain. No petrol once you are here; the surf is serious — swim between the flags. Walks worth knowing: Kitekite Falls, Mercer Bay. <a href="https://www.thisispiha.com/" target="_blank" rel="noopener noreferrer">This is Piha</a> is the local’s guide.</p></article>' +
        "</div>" +
      "</div></section>"
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
      "</div></section>" +
      '<section class="home-panel home-panel-foam" id="from-the-house"><div class="wrap">' +
        '<p class="kicker">From the house</p>' +
        "<h2 class=\"section-title\">A gift voucher, or the kitchen to take home.</h2>" +
        "<p class=\"section-intro\">Not a booking — a way to give rest, or to cook the way they cook here.</p>" +
        '<div class="grid grid-2">' +
          '<div class="card"><h3>Gift vouchers</h3><p>Give a night, a day, or a contribution toward a stay. Digital or printed — for a woman who needs the door held open.</p><div class="actions card-actions">' + btn("Ask about a voucher", "#contact", "btn-clay") + "</div></div>" +
          '<div class="card"><h3>Cookbook</h3><p>$20, plus postage. Recipes from the table, to take home. Proceeds go to the Trust, and help them help other women.</p><div class="actions card-actions">' + btn("Buy the cookbook", "#nourishment", "btn-line") + "</div></div>" +
        "</div>" +
      "</div></section>"
    );
  },
  "check-in": function () {
    return (
      pageHero("Check In weekend", "A free monthly gathering — Saturday or Sunday, last weekend of the month.") +
      '<section class="wrap prose">' +
        "<h2>What it is</h2><p>Women together, without a course to complete. 10am until 2pm. A Listener if you want to talk, the beach if you don’t, light lunch at 1:15pm. Metaphor this year: air.</p>" +
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
      pageHero("Nourishment", "Meals appear. Dishes disappear.") +
      '<section class="wrap prose">' +
        '<p class="draft-note">Not final</p>' +
        '<img alt="The table" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80" style="width:100%;max-width:42rem;margin-bottom:1.2rem;border-radius:12px">' +
        "<p>Our meals are prepared by women, for women — with love, creativity, and care. Garden vegetables and herbs when they can, free-range meat and eggs, wholesome food. You do not lift a finger.</p>" +
        "<p>Breakfast at your own rhythm — often chosen the evening before, and you can take it to your room. Lunch in the garden or on the deck above the surf. Dinner upstairs with the beach in summer; by the fire in winter.</p>" +
        "<p>Overnight includes three meals, snacks, fruit, tea and coffee. A day includes lunch and snacks. Tell us what you cannot eat when you write. Vegetarian has no extra charge; gluten-free, dairy-free or vegan is a small extra per day.</p>" +
        "<h2>The cookbook</h2>" +
        "<p>Was there a dish you particularly liked? Favourite recipes from the table are in the Te Wāhi Ora cookbook — $20, plus $4 postage in New Zealand. All proceeds go to the Charitable Trust, and help them help other women.</p>" +
        '<div class="actions">' + btn("Buy the cookbook", "#contact", "btn-clay") + btn("Book a stay", "#book", "btn-line") + "</div>" +
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

function scrollToId(id) {
  var target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "instant", block: "start" });
}

function bindJumps() {
  document.querySelectorAll("[data-jump]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToId(el.getAttribute("data-jump"));
    });
  });
}

function bindStayTabs() {
  document.querySelectorAll(".stay-tabs").forEach(function (root) {
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
  $("main").className = id === "what-we-offer" ? "page-offer" : id === "home" ? "page-home" : (id === "retreats" || id === "stay" ? "page-stay" : "");
  bindStayTabs();
  bindFaq();
  bindJumps();
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
