$(function () {
    $("#google-icon-home-direct").on("click", redirectURL);
});

function redirectURL() {
  location.href = "http://127.0.0.1:5500/index.html";
}
