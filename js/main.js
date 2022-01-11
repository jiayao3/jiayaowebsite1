

window.onload = function(){ 
    document.getElementById("preload").style.display = "none" 
}

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    
    document.querySelector("#btnNav").addEventListener("click", () => {
        if (nav.classList.contains("nav--open")) {
            nav.classList.remove("nav--open");
            document.getElementById("h_button_toggle").innerHTML="menu";
        }
        else{
            nav.classList.add("nav--open"); 
            document.getElementById("h_button_toggle").innerHTML="close";
        }
    });

    document.querySelector(".nav_overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        document.getElementById("h_button_toggle").innerHTML="menu";
    });

    var cloud = document.getElementById("cloud");
    document.querySelector("#cloud").addEventListener("click", () =>{
        if (cloud.classList.contains('cloud_fly')){
            cloud.classList.remove('cloud_fly');
        } else {
            cloud.classList.add('cloud_fly');
        }
    });

    var plane = document.getElementById("plane");
    document.querySelector("#plane").addEventListener("click", () =>{
        if (plane.classList.contains('plane_fly')){

        } else {
            plane.classList.add('plane_fly');
        }
    });
});

var slideIndex = 1;
showSlides(slideIndex);
autoSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n;
  showSlides(slideIndex);
}



function showSlides(n) {
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("slidedot");
    var i;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function autoSlides() {
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("slidedot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(autoSlides, 4000);
}

$(document).ready(function(){
    $(window).scroll(function() {

    if ($window.scrollTop() > 100) {
        $("#left_right").fadeIn(2000);      
    }
    });
});