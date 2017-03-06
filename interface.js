"use strict";

var DEFAULT_THEME = "salmon";
var DEFAULT_SEVEN_LUNCH = "first";
var DEFAULT_ODD_LUNCH = "second";
var DEFAULT_FONT = "Futura";

$(".icon-settings").addEventListener("click", function () {
	$(".settings-sidebar-container").classList.add("active");
});

$(".settings-icon-close").addEventListener("click", function () {
	$(".settings-sidebar-container").classList.remove("active");
});

$(".icon-info").addEventListener("click", function () {
	$(".info-sidebar-container").classList.add("active");
});

$(".info-icon-close").addEventListener("click", function () {
	$(".info-sidebar-container").classList.remove("active");
});

// theme stuff
var setTheme = function setTheme(event, theme) {
	document.body.className = "";
	if (event) theme = event.target.value;
	document.body.classList.add(theme);
	window.localStorage.setItem("theme", theme);
};
$("#theme").addEventListener("change", setTheme);

var themeToLoad = window.localStorage.getItem("theme") || DEFAULT_THEME;
$("#theme").value = themeToLoad;
setTheme(undefined, themeToLoad);

// lunch stuff
var lunchSettings = {
	seven: DEFAULT_SEVEN_LUNCH,
	odd: DEFAULT_ODD_LUNCH,
	even: DEFAULT_SEVEN_LUNCH,
	none: "none"
};
var schedules = void 0;
var setOddLunch = function setOddLunch(event, odd) {
	if (event) odd = event.target.value;
	lunchSettings.odd = odd;
	schedules = buildSchedules(masterPeriodList, masterLunchList, lunchSettings);
	window.localStorage.setItem("oddLunch", odd);
	if (typeof update !== "undefined") update();
};
var setSevenLunch = function setSevenLunch(event, seven) {
	if (event) seven = event.target.value;
	lunchSettings.seven = seven;
	lunchSettings.even = seven;
	schedules = buildSchedules(masterPeriodList, masterLunchList, lunchSettings);
	window.localStorage.setItem("sevenLunch", seven);
	if (typeof update !== "undefined") update();
};
var sevenLunchToLoad = window.localStorage.getItem("sevenLunch") || DEFAULT_SEVEN_LUNCH;
var oddLunchToLoad = window.localStorage.getItem("oddLunch") || DEFAULT_ODD_LUNCH;
$("#seven").value = sevenLunchToLoad;
$("#odd").value = oddLunchToLoad;
setSevenLunch(undefined, sevenLunchToLoad);
setOddLunch(undefined, oddLunchToLoad);
$("#seven").addEventListener("change", setSevenLunch);
$("#odd").addEventListener("change", setOddLunch);

// font stuff
var setFont = function setFont(event, font) {
	if (event) font = event.target.value;
	document.body.style.fontFamily = font;
	window.localStorage.setItem("font", font);
};
$("#font").addEventListener("change", setFont);

var fontToLoad = window.localStorage.getItem("font") || DEFAULT_FONT;
$("#font").value = fontToLoad;
setFont(undefined, fontToLoad);