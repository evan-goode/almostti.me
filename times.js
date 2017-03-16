"use strict";

var masterPeriodList = {
	seven: [{
		name: "first period",
		start: [8, 30],
		end: [9, 25]
	}, {
		name: "second period",
		start: [9, 30],
		end: [10, 20]
	}, {
		name: "third period",
		start: [10, 25],
		end: [11, 15]
	}, {
		name: "fifth period",
		start: [12, 50],
		end: [13, 40]
	}, {
		name: "sixth period",
		start: [13, 45],
		end: [14, 35]
	}, {
		name: "seventh period",
		start: [14, 40],
		end: [15, 30]
	}],
	odd: [{
		name: "first period",
		start: [8, 30],
		end: [10, 6]
	}, {
		name: "third period",
		start: [10, 11],
		end: [11, 44]
	}, {
		name: "seventh period",
		start: [13, 57],
		end: [15, 30]
	}],
	even: [{
		name: "second period",
		start: [8, 30],
		end: [10, 6]
	}, {
		name: "advisement",
		start: [10, 11],
		end: [10, 41]
	}, {
		name: "learning connection",
		start: [10, 46],
		end: [11, 46]
	}, {
		name: "sixth period",
		start: [13, 58],
		end: [15, 30]
	}],
	none: []
};
var masterLunchList = {
	seven: {
		first: [{
			name: "lunch",
			start: [11, 20],
			end: [11, 45]
		}, {
			name: "fourth period",
			start: [11, 50],
			end: [12, 45]
		}],
		second: [{
			name: "the first half of fourth period",
			start: [11, 20],
			end: [11, 50]
		}, {
			name: "lunch",
			start: [11, 50],
			end: [12, 15]
		}, {
			name: "the second half of fourth period",
			start: [12, 20],
			end: [12, 45]
		}],
		third: [{
			name: "fourth period",
			start: [11, 20],
			end: [12, 20]
		}, {
			name: "lunch",
			start: [12, 20],
			end: [12, 45]
		}],
		none: []
	},
	odd: {
		first: [{
			name: "lunch",
			start: [11, 49],
			end: [12, 14]
		}, {
			name: "fifth period",
			start: [12, 19],
			end: [13, 52]
		}],
		second: [{
			name: "the first half of fifth period",
			start: [11, 49],
			end: [12, 36]
		}, {
			name: "lunch",
			start: [12, 36],
			end: [13, 1]
		}, {
			name: "the second half of fifth period",
			start: [13, 6],
			end: [13, 52]
		}],
		third: [{
			name: "fifth period",
			start: [11, 49],
			end: [13, 27]
		}, {
			name: "lunch",
			start: [13, 27],
			end: [13, 52]
		}],
		none: []
	},
	even: {
		first: [{
			name: "lunch",
			start: [11, 51],
			end: [12, 16]
		}, {
			name: "fourth period",
			start: [12, 21],
			end: [13, 53]
		}],
		second: [{
			name: "the first half of fourth period",
			start: [11, 51],
			end: [12, 37]
		}, {
			name: "lunch",
			start: [12, 37],
			end: [13, 2]
		}, {
			name: "the second half of fourth period",
			start: [13, 7],
			end: [13, 53]
		}],
		third: [{
			name: "fourth period",
			start: [11, 51],
			end: [13, 28]
		}, {
			name: "lunch",
			start: [13, 28],
			end: [13, 53]
		}],
		none: []
	},
	none: {
		first: [],
		second: [],
		third: [],
		none: []
	}
};