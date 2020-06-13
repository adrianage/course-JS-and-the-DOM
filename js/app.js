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

const nav = document.querySelector("#navbar__list");

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

// build the nav
const i = 0;

sections.forEach((section, i) => {
  let listItem = document.createElement("li");
  let link = document.createElement("a");
  let identSection = section.id;
  let dataNavAtt = section.dataset.nav;

  link.innerHTML += `${dataNavAtt}`;
  link.setAttribute("href", identSection);
  link.className += "menu__link";

  listItem.appendChild(link);

  nav.appendChild(listItem);

  listItem.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionHook = event.target.getAttribute("a");

    const targetSection = document.querySelectorAll(".menu__link");
    for (let j = 0; j < targetSection.length; j++) {
      targetSection[j].addEventListener("click", (event) => {
        event.preventDefault();
        let hookOfSection = document.querySelectorAll("section");
        hookOfSection.document.getAttribute("id");
        hookOfSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
});

// Add class 'active' to section when near top of viewport

function sectionView() {
  for (let section of sections) {
    const position = section.getBoundingClientRect();
    if (position.top <= 150 && position.bottom >= 150) {
      let id = section.getAttribute("id");
      section.document
        .querySelector(`.${id}`)
        .classList.add("your-active-class");
      section.classList.add("active");
      section.style.cssText = "background-color: rgba(166, 42, 208, 0.1);";
    } else {
      let id = section.getAttribute("id");
      section.document
        .querySelector(`.${id}`)
        .classList.remove("your-active-class");
      section.classList.remove("active");
      section.style.cssText = "background-color: rgba(166, 42, 208, 0.5);";
    }
  }
}

window.document.addEventListener("scroll", function () {
  sectionView();
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
