//UI VARS
const header = document.querySelector('header');
      navLinks = document.querySelectorAll('.nav-link'),
      sections = document.querySelectorAll('section');
 //Animate on Scroll 
AOS.init({
       easing: 'ease-in-out-sine',
       offset: 120,
       duration: 500
    });;

// Listen for scrolling event on the browser
window.addEventListener('scroll', (e) => {
  const offset = window.pageYOffset;
  // Checks if 100px of the page has been scrolled
  if(offset > 100) {
    header.classList.add('header-scroll');
    // mainNav.classList.add('main-nav-scroll');
  }
  else {
    header.classList.remove('header-scroll');
    // mainNav.classList.remove('main-nav-scroll');
  }
})

// Set threshold for the observer
const options = {
    threshold: 0.5
};

// Create a new intersection observer
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
  // Get classname of the section in view
  const idName = entry.target.id;
  // Gets the links tied to its section
  const activeAnchor = document.querySelector(`[data-page=${idName}]`)
  // Checks if section is in view
  if(entry.isIntersecting) {
    // Clears the active class from all links 
    for(i = 0; i < navLinks.length; i++)  {
      navLinks[i].classList.remove('active');
    }    
  //   navLinks.forEach(navLink => {
  //   navLink.classList.remove('active');
  // });
  //Adds the class active to the link whose section is in view
    activeAnchor.classList.add('active');
  }
  });
}
sections.forEach(section => {
  // Observes all section element on the page
  observer.observe(section);
})