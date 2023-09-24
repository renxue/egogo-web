const scrollToTopBtn = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  var screenWidth = $(window).width();
  var val = $("nav").attr("value");
  if (window.scrollY > 80) {
    if (screenWidth >= 992) {
      $("nav").css({ "background-color": "#fff" });
      $(".navbar-brand img").attr("src", "/img/logo-black.png");
    } else {
      $("#mobile-menu").css({ "background-color": "#fff" });
      $(".navbar-brand img").attr("src", "/img/logo-black.png");
    }
  } else {
    if (val == 0) {
      $("nav").css("background-color", "");
      $(".navbar-brand img").attr("src", "/img/logo-black.png");
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
