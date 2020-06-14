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
// Navigation selector
const nav = document.querySelector("#navbar__list");
// Section selector
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the nav

const i = 0;

// Elements for each section

sections.forEach((section, i) => {
  let listItem = document.createElement("li");
  let link = document.createElement("a");
  let identSection = section.id;
  let dataNav = section.dataset.nav;

  // Additional HTML attributes
  listItem.className = `item`;
  link.innerHTML += `${dataNav}`;
  link.setAttribute("href", identSection);
  link.className += "menu__link";

  // Appending children + items
  listItem.appendChild(link);

  nav.appendChild(listItem);

  // Navigation listening to click event

  listItem.addEventListener("click", (event) => {
    event.preventDefault();
    const linkTo = document.getElementById(`${identSection}`);
    const sectionLink = linkTo.getAttribute("href");

    // Type of scrolling to section from clicking on the navbar

    linkTo.scrollIntoView({ behavior: "smooth" });
  });

  // Add class 'active' to section when near top of viewport

  function sectionView() {
    for (const section of sections) {
      const position = section.getBoundingClientRect();
      if (position.top <= 150 && position.bottom >= 150) {
        section.classList.add("your-active-class");
        section.classList.add("active");
        section.style.cssText = "background-color: rgba(166, 42, 208, 0.5);";
      } else {
        section.classList.remove("your-active-class");
        section.classList.remove("active");
        section.style.cssText = "background-color: rgba(166, 42, 208, 0.1);";
      }
    }
  }

  document.addEventListener("scroll", sectionView);
});
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Set sections as active

const eagle = document.querySelector(".item");
eagle.classList += " active";

let bear = document.querySelector("ul");
let tiger = document.querySelectorAll("li");
tiger.forEach((el) => {
  el.addEventListener("click", function () {
    bear.querySelector(".active").classList.remove("active");

    el.classList.add("active");
  });
});
