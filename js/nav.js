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
  "/img/product/lamp/panda/main.jpg=Panda Night Light",
  "/img/product/lamp/duck/main.jpg=Duck Night Light",
  "/img/product/lamp/rabbit/main.jpg=Rabbit Night Light",
  "/img/product/lamp/sheep/main.jpg=Sheep Night Light",
];
var projectors = [
  "/img/product/projection/star/main.jpg=Star Projection Lamp",
  "/img/product/projection/astrolabe/main.jpg=Astrolabe Projection Lamp",
  "/img/product/projection/aurora/main.jpg=Aurora Projection Lamp",
  "/img/product/projection/tripod/main.jpg=Trip Projection Lamp",
];
var heaters = ["/img/product/heater/main.jpg=Mini Heater"];
var handWarmers = [
  "/img/product/hand-warmer/snowman/main.jpg=Snowman Hand Warmer",
  "/img/product/hand-warmer/eggshell/main.jpg=Eggshell Hand Warmer",
];
var others = ["/img/product/other/eye-mask.png=Graphene heating eye mask"];
function showPCProductList(val) {
  if (val == "Night Light") {
    fillPCHtml(lamps);
  } else if (val == "Projection Light") {
    fillPCHtml(projectors);
  } else if (val == "Heater") {
    fillPCHtml(heaters);
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

//不需要设置导航栏字体颜色默认为白色的页面
filterPagesNavFontColor = ["/about.html", "/projection/product-detail.html"];
function clearNavProduct() {
  var path = window.location.pathname;
  $(".product-window").css("display", "none");
  if (!isStringInArray(path)) {
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
//判断数组中是否存在某个字符串
function isStringInArray(page) {
  for (var i = 0; i < filterPagesNavFontColor.length; i++) {
    if (page === filterPagesNavFontColor[i]) {
      return true;
    }
  }
  return false;
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
  } else if (category == "Heater") {
    fillMobileHtml(heaters);
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
