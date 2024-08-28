/*  this is useful, but not what we're looking for */
// Cut out of app.js, to keep app.js clean

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