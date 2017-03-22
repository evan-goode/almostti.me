"use strict";

function getDayType(moment, periodList) {
	var formatted = moment.format("YYYY-MM-DD");
	if (formatted in periodList) {
		return formatted;
	}
	switch (moment.day()) {
		case 0:
			return "none";
		case 3:
			return "odd";
		case 4:
			return "even";
		case 6:
			return "none";
		default:
			return "seven";
	}
}

var buildSchedules = function buildSchedules(periodList, lunchList, lunchSettings) {
	var compareTimes = function compareTimes(a, b) {
		return momentize(a.time).isBefore(momentize(b.time)) ? 1 : -1;
	};
	var schedules = {};
	for (var dayType in periodList) {
		schedules[dayType] = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = periodList[dayType].concat(lunchList[dayType][lunchSettings[dayType]])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var period = _step.value;

				schedules[dayType].push({
					name: "the start of " + period.name,
					time: period.start
				}, {
					name: "the end of " + period.name,
					time: period.end
				});
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		schedules[dayType].sort(compareTimes);
	}
	return schedules;
};