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
  // 使用JavaScript禁用滚动事件
  function disableScroll() {
    // 获取当前滚动位置
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // 使用CSS样式禁用滚动
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // 将滚动位置还原，以防止页面跳动
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  // 启用滚动事件
  function enableScroll() {
    // 恢复滚动
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    // 移除滚动位置还原
    window.onscroll = null;
  }
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
    disableScroll();
  });

  $("#nav").mouseleave(function (e) {
    // 鼠标离开事件
    clearNavProduct();
    enableScroll();
  });
});
var lamps = [
  "/img/product/lamp/panda/main.jpg=Panda Night Light=/product/lamp/panda",
  "/img/product/lamp/duck/main.jpg=Duck Night Light=/product/lamp/duck",
  "/img/product/lamp/rabbit/main.jpg=Rabbit Night Light=/product/lamp/rabbit",
  "/img/product/lamp/sheep/main.jpg=Sheep Night Light=/product/lamp/sheep",
];
var projectors = [
  "/img/product/projection/star/main.jpg=Star Projection Lamp=/product/projection/star",
  "/img/product/projection/astrolabe/main.jpg=Astrolabe Projection Lamp=/product/projection/astrolabe",
  "/img/product/projection/aurora/main.jpg=Aurora Projection Lamp=/product/projection/aurora",
  "/img/product/projection/planet/main.jpg=Planet Projection Lamp=/product/projection/planet",
];
var heaters = [
  "/img/product/heater/main.jpg=Mini Heater=/product/heater/heater",
];
var handWarmers = [
  "/img/product/hand-warmer/snowman/main.jpg=Snowman Hand Warmer=/product/hand-warmer/snowman",
  // "/img/product/hand-warmer/eggshell/main.jpg=Eggshell Hand Warmer=/product/hand-warmer/eggshell",
];
var others = [
  "/img/product/other/eye-mask.png=Graphene heating eye mask=/product/eye-mask",
];
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
    var productUrl = obj.split("=")[2];
    var html =
      '<div class="col-lg-3 col-md-4 col-sm-12 d-flex flex-column align-items-center p-5">' +
      '<img src="' +
      imgUrl +
      '" class="img-fluid" alt="" />' +
      '<a class="mt-3 nav-a" href="' +
      productUrl +
      '">' +
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
  console.log(e.toElement);
  $(e.toElement).css({
    "background-color": "#d9d9d9",
    "border-radius": "3%",
  });

  $(".main").css({ filter: "blur(10px)", "background-color": "#b4b4b4" });
  $(".exhibition, .our-service").css({ "background-color": "#b4b4b4" });
  $(".banner").css("filter", "blur(10px)");
  $(".product-detail").css("filter", "blur(10px)");
}

//不需要设置导航栏字体颜色默认为白色的页面
function clearNavProduct() {
  var path = window.location.pathname;
  $(".product-window").css("display", "none");
  if (!path.includes("/about")) {
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
  $(".main").css({ filter: "", "background-color": "" });
  $(".exhibition, .our-service").css({ "background-color": "" });
  $(".banner").css("filter", "");
  $(".product-detail").css("filter", "");
}
// 打开手机导航菜单
function openMenu() {
  $("#mobile-product-window").css("display", "block");
  $("#mobile-menu").css("display", "none");
}
// 关闭手机导航菜单
function closeMenu() {
  $("#mobile-menu").css("display", "flex");
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
    var productUrl = obj.split("=")[2];
    var html =
      '<div class="col-6">' +
      '<img src="' +
      imgUrl +
      '" class="img-fluid mt-1" alt="" value="0"/>' +
      "</div>" +
      '<div class="col-6 d-flex flex-column justify-content-center"><a class="nav-a" href="' +
      productUrl +
      '">' +
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
