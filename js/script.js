// 当页面滚动时显示/隐藏回到顶部按钮
$(function () {
  $("#nav").load("/header.html", function () {});
  $.getScript("/js/nav.js", function () {});
});

const scrollToTopBtn = document.querySelector(".scroll-to-top");
const inquiryBtn = document.querySelector(".inquiry-btn");
window.addEventListener("scroll", () => {
  var path = window.location.pathname; //获取地址栏的路径
  var screenWidth = $(window).width();
  var val = $("nav").attr("value");
  if (window.scrollY > 80) {
    if (screenWidth >= 992) {
      if (path.includes("/heater") || path.includes("/hand-warmer")) {
        $("nav").css({ "background-color": "#fff" });
        $(".navbar .nav-item .nav-link").css("color", "#000");
        $(".navbar-brand img").attr("src", "/img/logo-black.png");
      } else {
        $("nav").css({ "background-color": "black" });
      }
    } else {
      $("#mobile-menu").css({ "background-color": "#000" });
      $(".navbar-brand img").attr("src", "/img/logo-black.png");
    }
  } else {
    if (val == 0) {
      $("nav").css("background-color", "");
      $(".navbar-brand img").attr("src", "/img/logo.png");
    }
    $("#mobile-menu").css({ "background-color": "" });
    $(".navbar .nav-item .nav-link").css("color", "#fff");
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
