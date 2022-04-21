// JavaScript Document

//Reference to https://tobiasahlin.com/moving-letters/#10
// Wrap every letter in a span
var textWrapper = document.querySelector('.process-page-title .process-page-title-letter');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='process-page-title-letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.process-page-title .process-page-title-letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.process-page-title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });