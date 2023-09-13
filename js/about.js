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
//设置屏幕滑动
$(".navbar-toggler").on("click", function () {
  var val = $("nav").attr("value");
  if (val == 0) {
    $("nav").css("background-color", "#fff");
    $("nav").attr("value", "1");
    $(".navbar-light .navbar-brand").css("color", "#000");
  } else {
    $("nav").css("background-color", "");
    $("nav").attr("value", "0");
    $(".navbar-light .navbar-brand").css("color", "#fff");
  }
});
// 当页面滚动时显示/隐藏回到顶部按钮
const scrollToTopBtn = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  var val = $("nav").attr("value");
  if (window.scrollY > 80) {
    $("nav").css({
      "background-color": "#fff",
      "box-shadow": "rgb(230 230 230) 1px 1px 2px",
    });
  } else {
    if (val == 0) {
      $("nav").css({"background-color": "", "box-shadow": ""});
    }
  }

  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});
// 点击按钮时平滑滚动到页面顶部
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
