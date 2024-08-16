/*  this is useful, but not what we're looking for */
// https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/

// window.addEventListener('DOMContentLoaded', () => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const id = entry.target.getAttribute('id')
//       console.log('intersectionRatio: ', entry.intersectionRatio)
//       if (entry.intersectionRatio > 0) {
//         // entry.target.style.opacity = entry.intersectionRatio
//         document
//           .querySelector(`nav li a[href="#${id}"]`)
//           .parentElement.classList.add('active')
//       } else {
//         document
//           .querySelector(`nav li a[href="#${id}"]`)
//           .parentElement.classList.remove('active')
//       }
//     })
//   })
//
//   // Track all sections that have an `id` applied
//   document.querySelectorAll('section[id]').forEach((section) => {
//     observer.observe(section)
//   })
// })

/*  This works as desired: */
// adapted from https://codepen.io/malsu/pen/VwKzoPG
// Get all sections that have an ID defined
const sections = document.querySelectorAll('section[id]')

// Add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter)

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset

  // set the offset gap from the top, where the effect will be triggered during scroll
  const topOffset = 35

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - topOffset
    sectionId = current.getAttribute('id')

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`nav li a[href="#${sectionId}"]`)
        .parentElement.classList.add('active')
    } else {
      document
        .querySelector(`nav li a[href="#${sectionId}"]`)
        .parentElement.classList.remove('active')
    }
  })
}
