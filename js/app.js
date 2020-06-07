/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
// Navigation element selection
const nav = document.getElementById("navbar__list");
// Selection of sections
const sections = document.querySelectorAll("section");

/**
 * End Glo bal Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Making the navigation
function makeNav() {
  let navItem = "";
  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;
    navItem += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
  });
  nav.innerHTML = navItem;
}

makeNav();

// Add class 'active' to section when near top of viewport
let offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};
// Remove class to non-active sections
let removeClass = (section) => {
  section.classList.remove("your-active-class");
  section.style.cssText = "background-color: rgba(166, 42, 208, 0.1);";
};

// Add class to active sections

let addClass = (conditional, section) => {
  if (conditional) {
    section.classList.add("your-active-class");
    section.style.cssText = "background-color: rgba(166, 42, 208, 0.5);";
  }
};
// Set sections as active
function activeSection() {
  sections.forEach((section) => {
    const elementOffset = offset(section);
    inviewport = () => elementOffset < 150 && elementOffset >= -150;

    removeClass(section);
    addClass(inviewport(), section);
  });
}

window.addEventListener("scroll", activeSection);

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
function scroll() {
  let hook = document.querySelectorAll(".navbar_menu a");
  hook.forEach((link) => {
    link.addEventListener("click", () => {
      for (i = 0; i < sections; i++) {
        sections[i].addEventListener("click", sectionScroll(link));
      }
    });
  });
}

scroll();

/**
 * End Main Functions
 * Begin Events
 *
 */
