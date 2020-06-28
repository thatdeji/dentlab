//UI VARS
const header = document.querySelector('header');
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