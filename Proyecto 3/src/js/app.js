$(document).ready(function(){
    $(".header__menu").on("click",function(){




        $("nav").slideToggle();
        })





})

/* slider */
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});



//barra fija

function navegacionFija(){

  window.addEventListener("scroll", function(){
    //leemos el scroll y agregamos las clases a los elementos 
    header = document.querySelector(".header__contenido");
     header.classList.toggle("abajo",window.scrollY > 0);


      

}); 


}
//bpton
function botonColor(){

  window.addEventListener("scroll", function(){
    //leemos el scroll y agregamos las clases a los elementos 
    header = document.querySelector(".navegacion__boton");
     header.classList.toggle("botoncolor",window.scrollY > 0);


      

}); 


}


//imagen
const imagen = document.getElementById("header__logotipos");
window.addEventListener("scroll", function() {
if (window.scrollY > 0) {
  imagen.src = "build/img/logoNegro.svg";
} 

else {
imagen.src = "build/img/logoBlanco.svg";
  }
});


//navegacion
let previousPosition = window.pageYOffset;

window.onscroll = function() {
let currentPosition = window.pageYOffset;

if (currentPosition <= 1) {
  // El usuario ha regresado a la parte superior de la página
  const navLinks = document.querySelectorAll('.navegacion__link');

  navLinks.forEach(link => {
    link.classList.remove('link');
  });
} else if (previousPosition > currentPosition) {
  // El usuario está haciendo scroll hacia arriba
  const navLinks = document.querySelectorAll('.navegacion__link');

  navLinks.forEach(link => {
    link.classList.add('link');
  });
} else {
  // El usuario está haciendo scroll hacia abajo
  const navLinks = document.querySelectorAll('.navegacion__link');

  navLinks.forEach(link => {
    link.classList.add('link');
  });
}

previousPosition = currentPosition;
};

 navegacionFija();
 botonColor();
