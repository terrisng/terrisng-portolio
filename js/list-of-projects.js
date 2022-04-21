// JavaScript Document

//Animated Title, Reference to https://tobiasahlin.com/moving-letters/#6
// Wrap every letter in a span
var textWrapper = document.querySelector('.list-of-projects-page-title .list-of-projects-page-title-letter');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='list-of-projects-page-title-letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.list-of-projects-page-title .list-of-projects-page-title-letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.list-of-projects-page-title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
