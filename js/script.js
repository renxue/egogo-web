// document.addEventListener("DOMContentLoaded", function () {
//   var currentSection = 0;
//   var totalSections = document.querySelectorAll(".section").length;

//   function scrollToNextSection() {
//     if (currentSection < totalSections - 1) {
//       currentSection++;
//       scrollToSection(currentSection);
//     }
//   }
//   function scrollToPrevSection() {
//     if (currentSection > 0) {
//       currentSection--;
//       scrollToSection(currentSection);
//     }
//   }

//   function scrollToSection(sectionIndex) {
//     var sectionElements = document.querySelectorAll(".section");
//     var targetSection = sectionElements[sectionIndex];
//     window.scrollTo({
//       top: targetSection.offsetTop,
//       behavior: "smooth",
//     });
//   }

//   // Detect mouse wheel event
//   document.addEventListener("wheel", function (event) {
//     console.log(event.deltaY);
//     console.log(innerHeight);
//     // Check if scrolling down
//     if (event.deltaY > 0) {
//       scrollToNextSection();
//     }
//     // Check if scrolling up
//     if (event.deltaY < 0) {
//       scrollToPrevSection();
//     }
//   });
// });
// 当页面滚动时显示/隐藏回到顶部按钮
$(function () {
  $("#nav").load("header.html", function () {});
  $.getScript("/js/nav.js", function () {});
});
const scrollToTopBtn = document.querySelector(".scroll-to-top");
const inquiryBtn = document.querySelector(".inquiry-btn");
window.addEventListener("scroll", () => {
  var screenWidth = $(window).width();
  var val = $("nav").attr("value");
  if (window.scrollY > 80) {
    if (screenWidth >= 992) {
      $("nav").css({ "background-color": "black" });
    } else {
      $("nav").css({ "background-color": "white" });
      $(".navbar-brand img").attr("src", "/img/logo-black.png");
    }
  } else {
    if (val == 0) {
      $("nav").css("background-color", "");
      $(".navbar-brand img").attr("src", "/img/logo.png");
    }
  }

  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
  if (window.scrollY > 600) {
    inquiryBtn.classList.add("show");
  } else {
    inquiryBtn.classList.remove("show");
  }
});
// 点击按钮时平滑滚动到页面顶部
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
inquiryBtn.addEventListener("click", () => {});
