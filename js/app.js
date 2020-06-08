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

//  Attempted to add fourth section through inserting HTML but being able to highligh Section 4 and have it show up on the navigation was a very difficult task. The elements for this section now reside on the HTML file of the project:

// const addSection = document.querySelector("main");
// const addElement = document.createElement("section");

// addElement.id = "section4";
// addElement.dataset.nav = "Section 4";

// addSection.insertAdjacentElement(
//   "beforeend",
//   addElement
// ).innerHTML += `<div class="landing__container">
// <h2>Section 4</h2>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
// <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
// </div>
// </section>`;

// Removed this piece of code from the <li> element ${sectionID}

// Making the navigation
function makeNav() {
  let navItem = "";
  sections.forEach((section) => {
    // const sectionID = section.id;

    const sectionDataNav = section.dataset.nav;
    navItem += `<li><a class="menu__link" href="#">${sectionDataNav}</a></li>`;
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

const scroll = () => {
  const hook = document.querySelectorAll(".navbar_menu a");
  hook.forEach((link) => {
    link.addEventListener("click", () => {
      for (i = 0; i < sections; i++) {
        sections[i].addEventListener("click", sectionScroll(link));
      }
    });
  });
};

scroll();

/**
 * End Main Functions
 * Begin Events
 *
 */
