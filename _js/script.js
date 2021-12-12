/**
 * Set "active" class on article header links
 */
const links = document.querySelectorAll(".table-of-contents li");
const headings = document.querySelectorAll(".article-content *[tabindex]");
let passedFirstHeading = false;

/**
 * https://www.sitepoint.com/throttle-scroll-events/
 */
function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

/**
 * https://stackoverflow.com/questions/66166602/add-class-active-on-scroll-vanilla-js
 */
function changeLinkState() {
  let index = headings.length;

  while (--index && window.scrollY + 45 < headings[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));

  // add the active class if within visible height of the element
  if (
    passedFirstHeading ||
    scrollY - headings[0].offsetHeight >= headings[0].offsetTop
  ) {
    links[index].classList.add("active");
    passedFirstHeading = true;
  }
}

changeLinkState();
window.addEventListener("scroll", throttle(changeLinkState, 150));
