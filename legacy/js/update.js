function update () {
  var now = moment();
  var next = undefined;
  now.milliseconds = 0;

  switch (now.day()) {
    case 0:
      var today = "none";
      break;
    case 3:
      var today = "odd";
      break;
    case 4:
      var today = "even";
      break;
    case 6:
      var today = "none";
      break
    default:
      var today = "seven";
      break;
  }

  for (var i = times[today].length - 1; i >= 0; i--) {
    if (now.isBefore(times[today][i])) next = times[today][i];
  }

  var string;
  if (typeof next === "undefined") {
    string = "GO AWAY";
  }	else {
    string = moment.duration(moment({ hour: next.hour, minute: next.minute }).diff(now)).format("hh : mm : ss", { trim: false });
  }

  document.querySelector(".main").textContent = string;
  document.title = string;
}
update();
setInterval(update, 100);
