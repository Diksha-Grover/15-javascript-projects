const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  // so ones the page loads our preloader will disappear
  preloader.classList.add("hide-preloader");
});

// DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, wothout waiting for stylesheets, images and subframes to finish loading.
// load event is fired whrn the whole page has loaded, including all dependent resources such as stylessheets and images