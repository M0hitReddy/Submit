var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 200,
  loop: true,
  autoplay: true,
  // autoplay: {
  //     delay: 1000,
  //     disableOnInteraction: true,
  // },
  autoplayTimeout: 1000,
  // autoplayHoverPause:true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    // clickable:true,
  },
});

// swiper.el.addEventListener("mouseenter", function () {
//   swiper.autoplay.stop();
// });

// <<<<<<< HEAD:index.js

        // var swiper = new swiper(".mySwiper", {

        //     spaceBetween: 200,
        //     loop: true,
        //     autoplay: true,
        //     // autoplay: {
        //     //     delay: 1000,
        //     //     disableOnInteraction: true,
        //     // },
        //     autoplayTimeout: 1000,
        //     // autoplayHoverPause:true,
        //     effect: "coverflow",
        //     grabCursor: true,
        //     centeredSlides: true,
        //     slidesPerView: "auto",
        //     coverflowEffect: {
        //         rotate: 0,
        //         stretch: 0,
        //         depth: 300,
        //         modifier: 1,
        //         slideShadows: false,
        //     },
        //     pagination: {
        //         el: ".swiper-pagination",
        //         // clickable:true,
        //     },

        // })



        swiper.el.addEventListener("mouseenter", function () {
            swiper.autoplay.stop();
        });

        // Resume on mouse leave
        swiper.el.addEventListener("mouseleave", function () {
            swiper.autoplay.start();
        });
// =======
// Resume on mouse leave
// swiper.el.addEventListener("mouseleave", function () {
//   swiper.autoplay.start();
// });
// >>>>>>> 1d8a45d33dd1949792362946e28e1972cfb823ed:main.js
