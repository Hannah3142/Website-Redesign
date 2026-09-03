/* global SITEMAPS */

function parseHash() {
  var raw = (location.hash || "").replace(/^#/, "");
  var parts = raw.split("/").filter(Boolean);
  var sitemapId = parts[0] || "1";
  if (!SITEMAPS[sitemapId]) sitemapId = "1";
  var page = parts.slice(1).join("/") || SITEMAPS[sitemapId].home;
  var anchor = "";
  if (page.indexOf(":") !== -1) {
    var split = page.split(":");
    page = split[0];
    anchor = split[1] || "";
  }
  return { sitemapId: sitemapId, page: page, anchor: anchor };
}

function href(sitemapId, page, anchor) {
  var path = "#" + sitemapId + "/" + page;
  if (anchor) path += ":" + anchor;
  return path;
}

function el(tag, attrs, children) {
  var node = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(function (key) {
      if (key === "text") node.textContent = attrs[key];
      else if (key === "html") node.innerHTML = attrs.html;
      else if (key === "click") node.addEventListener("click", attrs.click);
      else node.setAttribute(key, attrs[key]);
    });
  }
  (children || []).forEach(function (child) {
    if (child) node.appendChild(child);
  });
  return node;
}

function navLink(sitemapId, item) {
  var a = el("a", {
    href: item.href || href(sitemapId, item.page, item.hash),
    text: item.label
  });
  if (item.href) {
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  }
  return a;
}

function renderHeader(sitemap) {
  var nav = document.getElementById("header-nav");
  nav.innerHTML = "";
  var state = parseHash();

  sitemap.header.forEach(function (item, index) {
    if (index) nav.appendChild(document.createTextNode(" "));

    if (item.type === "dropdown") {
      var box = el("details", { style: "display:inline-block;margin-right:0.75em;" });
      box.appendChild(el("summary", { text: item.label, style: "display:inline;cursor:pointer;" }));
      var list = el("div", { style: "padding-left:1em;" });
      item.items.forEach(function (sub) {
        list.appendChild(el("div", null, [navLink(state.sitemapId, sub)]));
      });
      box.appendChild(list);
      nav.appendChild(box);
    } else {
      var link = navLink(state.sitemapId, item);
      if (item.type === "cta") link.appendChild(document.createTextNode(""));
      nav.appendChild(link);
      nav.appendChild(document.createTextNode("  "));
    }
  });
}

function renderFooter(sitemap) {
  var footer = document.getElementById("footer");
  footer.innerHTML = "";
  var state = parseHash();
  footer.appendChild(el("h2", { text: "Footer" }));
  footer.appendChild(el("p", { text: "Address: 129 Marine Parade North, Piha" }));
  footer.appendChild(el("p", { text: "Phone (one number) · bookings email · general email" }));
  footer.appendChild(el("p", { text: "Facebook · Instagram" }));
  var ul = el("ul");
  sitemap.footer.forEach(function (item) {
    ul.appendChild(el("li", null, [navLink(state.sitemapId, item)]));
  });
  footer.appendChild(ul);
}

function renderMain(sitemap) {
  var main = document.getElementById("main");
  main.innerHTML = "";
  var state = parseHash();
  var page = sitemap.pages[state.page];

  if (!page) {
    main.appendChild(el("h1", { text: "Missing page: " + state.page }));
    main.appendChild(el("p", { text: "This id is not in this sitemap. Use the nav or go home." }));
    main.appendChild(el("p", null, [navLink(state.sitemapId, { label: "Home", page: sitemap.home })]));
    return;
  }

  main.appendChild(el("h1", { text: page.title }));
  if (state.anchor) {
    main.appendChild(el("p", { text: "Jumped to section: " + state.anchor + " (on a real site this would scroll down the page)." }));
  }

  var list = el("ol");
  page.headings.forEach(function (heading) {
    list.appendChild(el("li", null, [el("h2", { text: heading })]));
  });
  main.appendChild(list);

  if (state.page === "home" && state.sitemapId === "1") {
    main.appendChild(el("p", { text: "Links on this page:" }));
    var extras = el("ul");
    ["book", "stay", "check-in", "donate", "testimonials"].forEach(function (id) {
      var label = sitemap.pages[id] ? sitemap.pages[id].title : id;
      extras.appendChild(el("li", null, [navLink(state.sitemapId, { label: label, page: id })]));
    });
    main.appendChild(extras);
  }
  if (state.page === "home" && state.sitemapId === "2") {
    var extras2 = el("ul");
    ["check-in", "book", "stay", "this-month", "donate"].forEach(function (id) {
      extras2.appendChild(el("li", null, [navLink(state.sitemapId, { label: sitemap.pages[id].title, page: id })]));
    });
    main.appendChild(el("p", { text: "Links on this page:" }));
    main.appendChild(extras2);
  }
  if (state.page === "home" && state.sitemapId === "3") {
    var extras3 = el("ul");
    ["come", "help", "group-hire"].forEach(function (id) {
      extras3.appendChild(el("li", null, [navLink(state.sitemapId, { label: sitemap.pages[id].title, page: id })]));
    });
    main.appendChild(el("p", { text: "Links on this page:" }));
    main.appendChild(extras3);
  }
  if (state.page === "whats-on" || state.page === "this-month" || state.page === "calendar" || state.page === "come") {
    main.appendChild(el("p", { text: "Event pages:" }));
    var ev = el("ul");
    eventLinks().forEach(function (item) {
      ev.appendChild(el("li", null, [navLink(state.sitemapId, item)]));
    });
    main.appendChild(ev);
  }
}

function renderSwitcher() {
  var bar = document.getElementById("proto-switch");
  bar.innerHTML = "";
  bar.appendChild(el("strong", { text: "Prototype: " }));
  bar.appendChild(el("a", { href: "index.html", text: "All sitemaps" }));
  bar.appendChild(document.createTextNode(" · "));
  [1, 2, 3].forEach(function (id, i) {
    if (i) bar.appendChild(document.createTextNode(" · "));
    bar.appendChild(el("a", { href: "#" + id + "/home", text: SITEMAPS[id].name }));
  });
}

function render() {
  var state = parseHash();
  var sitemap = SITEMAPS[state.sitemapId];
  document.title = pageTitle(sitemap, state.page);
  document.getElementById("site-name").textContent = "Te Wāhi Ora — " + sitemap.name;
  renderSwitcher();
  renderHeader(sitemap);
  renderMain(sitemap);
  renderFooter(sitemap);
}

function pageTitle(sitemap, pageId) {
  var page = sitemap.pages[pageId];
  return (page ? page.title : pageId) + " — " + sitemap.name;
}

window.addEventListener("hashchange", render);
if (!location.hash) location.hash = "#1/home";
else render();
