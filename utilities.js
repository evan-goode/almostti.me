"use strict";

var momentize = function momentize(array) {
	return moment({ hour: array[0], minute: array[1] });
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
		var notification = new Notification(string);
	};
	if (!"Notification" in window) return;
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