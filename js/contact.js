function send() {
  // const sendButton = document.getElementById("sendButton");
  const message = document.getElementById("message-ok");
  message.classList.add("show");
  message.addEventListener("animationend", () => {
    message.classList.remove("show");
  }); // 监听动画结束事件，只触发一次
  var formData = new FormData($("#inquiry-form")[0]);
  $.ajax({
    url: "/inquiry",
    type: "POST",
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    success: function (returndata) {
      $("#inquiry-form")[0].reset();
    },
    error: function (returndata) {},
  });
}
