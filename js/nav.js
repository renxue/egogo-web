$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    var val = $("nav").attr("value");
    if (val == 0) {
      $("nav").css({ "background-color": "#fff", height: "100%" });
      $("nav").attr("value", "1");
      $(".navbar-brand img").attr("src", "/img/logo-black.png");
      $(".navbar .nav-item .nav-link").css("color", "#000");
    } else {
      $("nav").css("background-color", "");
      $("nav").attr("value", "0");
      $(".navbar-brand img").attr("src", "/img/logo.png");
    }
  });

  $(".navbar .nav-item .nav-link").mouseenter(function (e) {
    // 鼠标进入事件
    $("#nav-product").empty();
    var val = e.toElement.text;
    if (val == "About" || val == "Contact") {
      clearNavProduct();
    } else {
      showPCProductList(val);
      fillPCCss(e);
    }
  });

  $("#nav").mouseleave(function (e) {
    // 鼠标离开事件
    clearNavProduct();
  });
});
var lamps = [
  "/img/product/lamp/panda/one.jpg=one",
  "/img/product/lamp/panda/one.jpg=two",
  "/img/product/lamp/panda/one.jpg=three",
  "/img/product/lamp/panda/one.jpg=four",
];
var projectors = [
  "/img/product/projector/projector-01.png=one",
  "/img/product/projector/projector-01.png=two",
  "/img/product/projector/projector-01.png=three",
  "/img/product/projector/projector-01.png=four",
];
var aromaDiffusers = [
  "/img/product/aroma-diffuser/aroma-diffuser-01.png=one",
  "/img/product/aroma-diffuser/aroma-diffuser-01.png=two",
  "/img/product/aroma-diffuser/aroma-diffuser-01.png=three",
  "/img/product/aroma-diffuser/aroma-diffuser-01.png=four",
];
var handWarmers = [
  "/img/product/hand-warmer/hand-warmer-01.png=one",
  "/img/product/hand-warmer/hand-warmer-01.png=two",
  "/img/product/hand-warmer/hand-warmer-01.png=three",
  "/img/product/hand-warmer/hand-warmer-01.png=four",
];
var others = [
  "/img/product/other/eye-mask.png=one",
  "/img/product/other/eye-mask.png=two",
  "/img/product/other/eye-mask.png=three",
  "/img/product/other/eye-mask.png=four",
];
function showPCProductList(val) {
  if (val == "Night Light") {
    fillPCHtml(lamps);
  } else if (val == "Projection Light") {
    fillPCHtml(projectors);
  } else if (val == "Aroma Diffuser") {
    fillPCHtml(aromaDiffusers);
  } else if (val == "Hand Warmer") {
    fillPCHtml(handWarmers);
  } else if (val == "Other") {
    fillPCHtml(others);
  }
}

function fillPCHtml(arrs) {
  for (var i = 0; i < arrs.length; i++) {
    var obj = arrs[i];
    var imgUrl = obj.split("=")[0];
    var productName = obj.split("=")[1];
    var html =
      '<div class="col-lg-3 col-md-4 col-sm-12 d-flex flex-column align-items-center p-5">' +
      '<img src="' +
      imgUrl +
      '" class="img-fluid" alt="" />' +
      '<a class="mt-3">' +
      productName +
      "</a>" +
      "</div>";
    $("#nav-product").append(html);
  }
}

function fillPCCss(e) {
  $(".navbar .nav-item .nav-link").css("background-color", "");

  $(".navbar .nav-item .nav-link").css("color", "#000");
  $(".product-window").css("display", "block");
  $("nav").css("background-color", "#fff");
  $(".navbar-brand img").attr("src", "/img/logo-black.png");
  $(e.toElement).css({
    "background-color": "#edb64a",
    "border-radius": "3%",
  });
  $(".main").css("filter", "blur(10px)");
}
function clearNavProduct() {
  var path = window.location.pathname;
  $(".product-window").css("display", "none");
  if (path != "/about.html") {
    $("nav").css("background-color", "");
    $(".navbar-brand img").attr("src", "/img/logo.png");
    $(".navbar .nav-item .nav-link").css("color", "#fff");
  } else {
    $(".navbar .nav-item .nav-link").css("color", "#000");
  }
  $(".navbar .nav-item .nav-link").css({
    "background-color": "",
    "border-radius": "",
  });
  $(".main").css("filter", "");
}
// 打开手机导航菜单
function openMenu() {
  $("#mobile-product-window").css("display", "block");
}
// 关闭手机导航菜单
function closeMenu() {
  $("#mobile-product-window").css("display", "none");
  $("#mobile-product-list").css("display", "none");
}

$(".mobile-category li").on("click", function (e) {
  $(".mobile-show-product").empty();
  var category = e.target.innerText;
  $(".category-title").text(category);
  $("#mobile-product-list").css("display", "block");
  if (category == "Night Light") {
    fillMobileHtml(lamps);
  } else if (category == "Projection Light") {
    fillMobileHtml(projectors);
  } else if (category == "Aroma Diffuser") {
    fillMobileHtml(aromaDiffusers);
  } else if (category == "Hand Warmer") {
    fillMobileHtml(handWarmers);
  } else if (category == "Other") {
    fillMobileHtml(others);
  }
});
function fillMobileHtml(arrs) {
  for (var i = 0; i < arrs.length; i++) {
    var obj = arrs[i];
    var imgUrl = obj.split("=")[0];
    var productName = obj.split("=")[1];
    var html =
      '<div class="col-6">' +
      '<img src="' +
      imgUrl +
      '" class="img-fluid mt-3" alt="" value="0"/>' +
      "</div>" +
      '<div class="col-6 d-flex flex-column justify-content-center"><a>' +
      productName +
      "</a>" +
      "</div>";
    $(".mobile-show-product").append(html);
  }
}
//移动端回到上一级菜单
$(".back-prev").on("click", function () {
  $("#mobile-product-list").css("display", "none");
});
