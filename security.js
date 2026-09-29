(function () {
  "use strict";

  var ALLOWED_LINKS = {
    "https://dnrst.42web.io/": true,
    "https://github.com/dnrst/": true,
    "https://www.linkedin.com/in/deniristianto/": true
  };

  document.querySelectorAll(".links a[href]").forEach(function (link) {
    var href = link.getAttribute("href");

    if (!href || href.indexOf("https://") !== 0 || !ALLOWED_LINKS[href]) {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
      link.style.pointerEvents = "none";
      link.style.opacity = "0.5";
      return;
    }

    link.setAttribute("rel", "noopener noreferrer");
    link.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  });

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("selectstart", function (e) {
    e.preventDefault();
  });

  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    var key = e.key ? e.key.toUpperCase() : "";
    if (
      key === "F12" ||
      (e.ctrlKey && e.shiftKey && (key === "I" || key === "J" || key === "C")) ||
      (e.ctrlKey && key === "U")
    ) {
      e.preventDefault();
    }
  });
})();
