window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var main = document.querySelector("main");
    if (main) {
      main.style.opacity = 1;
      main.style.filter = "blur(0px)";
    }
  }, 100);
});
