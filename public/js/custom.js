// ------- PRELOADER -------//
$(window).load(function () {
  $(".preloader").fadeOut("slow"); // set duration in brackets
});
// // ----- GOOGLE MAP ----- //
// var map = "";
// var center;

// function initialize() {
//   var mapOptions = {
//     zoom: 16,
//     center: new google.maps.LatLng(13.758468, 100.567481),
//     scrollwheel: false,
//   };

//   map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

//   google.maps.event.addDomListener(map, "idle", function () {
//     calculateCenter();
//   });

//   google.maps.event.addDomListener(window, "resize", function () {
//     map.setCenter(center);
//   });
// }

// function calculateCenter() {
//   center = map.getCenter();
// }

// function loadGoogleMap() {
//   var script = document.createElement("script");
//   script.type = "text/javascript";
//   script.src =
//     "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&" +
//     "callback=initialize";
//   document.body.appendChild(script);
// }

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {
  // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // --------- PORTFOLIO IMAGE ----- //
  $("#portfolio a").nivoLightbox({
    effect: "fadeScale",
  });

  // ------- WOW ANIMATED ------ //
  wow = new WOW({
    mobile: false,
  });
  wow.init();

  // ------- GOOGLE MAP ----- //
  // loadGoogleMap();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $("#home").parallax("100%", 0.3);
    $("#team").parallax("100%", 0.3);
    $("#contact").parallax("100%", 0.1);
  }
  initParallax();
});

let myNav = document.getElementById("nav12");
window.onscroll = function () {
  if (window.pageYOffset >= 200) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
