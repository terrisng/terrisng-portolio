// JavaScript Document

//Jumbotron Title Animation START
//Reference to https://tobiasahlin.com/moving-letters/#1
var textWrapper = document.querySelector(".jumbotron-title .jumbotron-title-letter");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='jumbotron-title-letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.jumbotron-title .jumbotron-title-letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.jumbotron-title .jumbotron-title-line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.jumbotron-title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
//Jumbotron Title Animation END

//Reference to https://tobiasahlin.com/moving-letters/#5
//Banner 1's Title Animation START
anime.timeline({loop: true})
  .add({
    targets: '.banner-1-title .banner-1-line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.banner-1-title .banner-1-line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.banner-1-title .banner-1-ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.banner-1-title .banner-1-letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.banner-1-title .banner-1-letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.banner-1-title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //Banner 1's Title Animation END

//Reference to https://tobiasahlin.com/moving-letters/#12
//Resume page custom animated header
// Wrap every letter in a span


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

