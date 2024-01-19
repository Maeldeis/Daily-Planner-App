// Set the initial text content of an element with the id "currentDay"
$("#currentDay").text(dayjs().format("dddd, D MMM YYYY"));

// Get the current time in 24-hour format and set it to the start of the hour
var currentTime = dayjs().startOf("hour").format("HH:mm");

// Display the initial current time in a specific format
console.log(currentTime);

// Calculate time slots for the planner
var beforeTime = dayjs().startOf("day").add(8, "hours");

var time1 = beforeTime.add(1, "hours").format("HH:mm");
$(".block1").text(time1);

var time2 = beforeTime.add(1, "hours").format("HH:mm");
$(".block2").text(time2);

var time3 = beforeTime.add(1, "hours").format("HH:mm");
$(".block3").text(time3);

var time4 = beforeTime.add(1, "hours").format("HH:mm");
$(".block4").text(time4);

var time5 = beforeTime.add(1, "hours").format("HH:mm");
$(".block5").text(time5);
