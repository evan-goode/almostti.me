"use strict";

function shiftLetters() {
	var element = document.querySelector(".title");
	var title = element.textContent.split("");
	var index = Math.floor(Math.random() * (title.length - 1));
	var letter = title[index + 1];
	title[index + 1] = title[index];
	title[index] = letter;
	element.textContent = title.join("");
}
// setInterval(shiftLetters, 1000);