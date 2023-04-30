// Make mobile navigation work
const headerElement = document.querySelector(".header");
const navigationButtonElement = document.querySelector(".btn-mobile-nav");

navigationButtonElement.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

// Set up copyright year
const copyrightYearElement = document.querySelector(".copyright-year");
const currentYear = new Date().getFullYear();
copyrightYearElement.textContent = currentYear;

// Sticky navigation
const heroSectionElement = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    /* In the viewport */
    root: null,
    rootMargin: "-80px",
    threshold: 0,
  }
);
observer.observe(heroSectionElement);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
