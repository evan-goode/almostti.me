"use strict";

var FORMAT_OPTIONS = {
	trim: false
};
var NOTIFY_MINUTES = 1;

var counter = 0;

var update = function update() {
	var now = moment();
	var milliseconds = now.milliseconds();
	now.round(1, "seconds");
	var dayType = getDayType(now.day());

	var next = void 0,
	    current = void 0,
	    final = void 0;
	for (var index = 0; index < schedules[dayType].length; ++index) {
		var time = schedules[dayType][index];
		if (now.isBefore(momentize(time.time))) {
			next = time;
			if (schedules[dayType][index + 1] !== undefined) {
				current = schedules[dayType][index + 1];
			} else {
				current = undefined;
			}
		}
	}
	var lastPeriod = schedules[dayType][0];
	if (lastPeriod && now.isBefore(momentize(lastPeriod.time))) {
		final = lastPeriod;
	}
	// this next part's pretty meaty
	if (next !== undefined) {
		$(".go-home").classList.remove("active");
		var timeRemaining = moment.duration(momentize(next.time).diff(now));
		var remainingString = timeRemaining.format("h:mm:ss", FORMAT_OPTIONS);
		$(".remaining").textContent = remainingString;
		$(".remaining-text").textContent = "until " + next.name;
		document.title = remainingString;

		if (timeRemaining.asMinutes() == NOTIFY_MINUTES) {
			notify(NOTIFY_MINUTES + " minute" + (NOTIFY_MINUTES === 1 ? "" : "s") + " until " + next.name);
		}

		if (final !== undefined) {
			var totalTimeRemaining = moment.duration(momentize(final.time).diff(now));
			var totalTimeRemainingString = totalTimeRemaining.format("h:mm:ss", FORMAT_OPTIONS);
			$(".final-tile").style.display = "block";
			$(".final").textContent = totalTimeRemainingString;
			$(".final-text").textContent = "until the end of the day";
		} else {
			$(".final-tile").style.display = "none";
		}
		if (current !== undefined) {
			var timeElapsed = moment.duration(now.diff(momentize(current.time)));
			var elapsedString = timeElapsed.format("h:mm:ss", FORMAT_OPTIONS);
			$(".elapsed-tile").style.display = "block";
			$(".elapsed").textContent = elapsedString;
			$(".elapsed-text").textContent = "since " + current.name;
			var percentage = 100 * timeElapsed.asSeconds() / (timeElapsed.asSeconds() + timeRemaining.asSeconds());
			$(".progress").style.width = percentage + "%";
			document.title += " - " + Math.floor(percentage) + "%";
		} else {
			$(".elapsed-tile").style.display = "none";
			$(".progress").style.width = "0%";
		}
	} else {
		document.title = $(".go-home").textContent;
		$(".go-home").classList.add("active");
	}

	if (counter > 3600) {
		shiftLetters();
	}
	document.body.style.visibility = "initial";
	setTimeout(update, 1000 - milliseconds);
};
update();