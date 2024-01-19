$("#currentDay").text(dayjs().format("dddd, D MMM YYYY"));

// wanted to include time in 24-hour format
var currentTime = dayjs().format("dddd, D MMM YYYY, HH:mm:");

currentTime = currentTime.startOf("hour");

var beforeTime = moment().startOf("day").add(8, "hours");

var time1 = beforeTime.add(1, "hours");
time1 = time1.format("h:mm A");
var time2 = beforeTime.add(2, "hours");
var time3 = beforeTime.add(3, "hours");
var time4 = beforeTime.add(4, "hours");
var time5 = beforeTime.add(5, "hours");




