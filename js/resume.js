// JavaScript Document

var textWrapper = document.querySelector(".resume-page-custom-animated-header");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='resume-page-custom-animated-header-letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.resume-page-custom-animated-header .resume-page-custom-animated-header-letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.resume-page-custom-animated-header .resume-page-custom-animated-header-letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

