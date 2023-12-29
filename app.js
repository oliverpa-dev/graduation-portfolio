// "use strict";

const headerEl = document.querySelector(".header");
const navEl = document.getElementById("nav");

// Sticky navigation and nav's link indicator
// Highlights link once the certain section gets into the view
const sectionHomeMessage = document.querySelector(".section-home");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    treshold: 0,
  }
);

obs.observe(sectionHomeMessage);

// Closing the navigation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", () => {
    if (link.classList.contains("close-nav")) {
      headerEl.classList.toggle("nav-open");
      headerEl.classList.toggle("glass");
      navEl.classList.toggle("glass");
    }
  });
});

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
