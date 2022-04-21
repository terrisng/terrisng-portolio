// JavaScript Document

//Reference to https://tobiasahlin.com/moving-letters/#16
// Wrap every letter in a span
var textWrapper = document.querySelector('.featured-project-page-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='featured-project-page-title-letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.featured-project-page-title .featured-project-page-title-letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.featured-project-page-title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



//Slideshow Gallery - Reference to https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("featured-project-slide-show-gallery-mySlides");
  let dots = document.getElementsByClassName("featured-project-slide-show-gallery-demo");
  let captionText = document.getElementById("featured-project-slide-show-gallery-caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" featured-project-slide-show-gallery-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " featured-project-slide-show-gallery-active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

