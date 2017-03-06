"use strict";

function shuffle(array) {
	var shuffled = [];
	while (array.length) {
		var chosen = Math.floor(Math.random() * array.length);
		shuffled.push(array[chosen]);
		array.splice(chosen, 1);
	}
	return shuffled;
}

var hot = shuffle(["http://truan.party", "http://nealie.club", "run-2.swf"]);

var hotCounter = 0;
function randHot() {
	document.querySelector(".a-hot").href = hot[hotCounter];
	++hotCounter;
	if (hotCounter == hot.length) {
		hotCounter = 0;
	}
}
randHot();

document.querySelector(".a-hot").addEventListener("click", randHot);