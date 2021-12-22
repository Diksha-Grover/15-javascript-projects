
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// getFullYear() method returns the year of the specified date according to local time. 
// Its syntax is − Date.getFullYear() Return Value
// Date objects are created with the new Date( ) 
// new keyword Creates a blank, plain JavaScript object

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  //  Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
  // This means that the rectangle's edges (top, left, bottom, and right) change their values every time the scrolling position changes.
  // viewport area is user's visible area of a web page
  // .height is taken because height is an object and i can access it directly
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
  // ===	equal value and equal type 
  // to know more about === go on https://codeahoy.com/javascript/2019/10/12/==-vs-===-in-javascript/
    linksContainer.style.height = `${linksHeight}px`;
    // linkscontainer is taken because that is the one which is hidden 
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// top-link is for button

window.addEventListener("scroll", function () {
  // scroll is an event
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    // console.log("hi");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** for precise smooth scrolling ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // event object contains a number of properties that describe the event that occurred
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    // getAttribute () method is used to get the value of an attribute
    // slice(1) because we want to skip '#' from '#home' , '#services' etc 
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // we can also select these navbar, links-container globally 
    const fixedNav = navbar.classList.contains("fixed-nav");
    // contains() method is used to determines whether the collection contains a given item or not. 
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;   
    }
    // above is required when the navbar is not fixed 
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    // above is required when the screen is small

    window.scrollTo({
    // scrollTo() method scrolls the document to specified coordinates.
      // left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
    // linksContainer.style.height = 0; is added so that when the screen is small and we click
    // on one of the links then the scroll bar automactically closes 
  });
});
// calculate heights