// TODO: Which element is the following line of code selecting? div element 
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting? 
var next = carousel.querySelector(".next"); //button
var prev = carousel.querySelector(".prev"); //button
var index = 0;  //reg variable
var currentImage; //variable

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener. changes DOM url for next or prev pic. Source url for each picture. 
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener. next button
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code? prevents propagation of the same event from being called .
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener. previous button
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code? line 31 will run. 
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
