"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var time = 1024;
var unset = "sunset";

var timer = void 0;

function theme(event, theme) {
  document.body.className = "";
  if (event) theme = event.target.textContent.toLowerCase().replace(" ", "-");
  document.body.classList.add(theme);
  window.localStorage.setItem("theme", theme);
}
[].concat(_toConsumableArray(document.querySelectorAll(".theme"))).forEach(function (element) {
  element.addEventListener("click", theme);
});

function show() {
  document.querySelector(".themes").classList.remove("hidden");
}
function hide() {
  document.querySelector(".themes").classList.add("hidden");
}

theme(undefined, window.localStorage.getItem("theme") || unset);

window.addEventListener("blur", hide);
window.addEventListener("focus", show);

background = new Image();
background.src = "../star-wars.jpeg";