"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var momentize = function momentize(array) {
	return moment({ hour: array[0], minute: array[1] });
};

var rgbToHex = function rgbToHex(rgb) {
	var _rgb$replace$split$ma = rgb.replace(/[^0-9,]/g, '').split(",").map(function (n) {
		return parseInt(n);
	}),
	    _rgb$replace$split$ma2 = _slicedToArray(_rgb$replace$split$ma, 3),
	    r = _rgb$replace$split$ma2[0],
	    g = _rgb$replace$split$ma2[1],
	    b = _rgb$replace$split$ma2[2];

	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

var querySelectorCache = [];
var $ = function $(query) {
	if (query in querySelectorCache) {
		return querySelectorCache[query];
	}
	var element = document.querySelector(query);
	querySelectorCache[query] = element;
	return element;
};

var notify = function notify(string) {
	var createNotification = function createNotification(string) {
		alert("notifying!!!!");
		var notification = new Notification(string);
	};
	if (!window.Notification || !window.Notification.requestPermission) return;
	if (Notification.permission === "granted") {
		createNotification(string);
	} else if (Notification.permission !== "denied") {
		Notification.requestPermission(function (permission) {
			if (permission === "granted") {
				createNotification(string);
			}
		});
	}
};

var trySetItem = function trySetItem(key, value) {
	try {
		window.localStorage.setItem(key, value);
		return true;
	} catch (_) {
		return false;
	}
};