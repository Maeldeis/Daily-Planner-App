$document.ready(function() {
    $("#currentDay").text(dayjs().format("dddd, D MMM YYYY"));
var beforeTime = dayjs().startOf("day").hour(8);
for (var i = 0; i < 7; i++) {
    var timeSlot = beforeTime.format("HH:mm");
    var timeBlock =
    `<div class="col-12 time-block">
        <div class="row">
            <div class="col-1 hour">${timeSlot}</div>
            <textarea class="col-8 description" id="text-${i}"></textarea>
            <button class="col-2 saveBtn" data-index="${i}"><i class="fas fa-save"></i></button>
        </div>
    </div>`;
    $("#planner").append(timeBlock);
    beforeTime = beforeTime.add(1, 'hours');
}});
testTime(dayjs().hour(8), ".time-block:nth-child(1)");
function tesTime(targetTime, elementSelector) {
    var currentTime = dayjs().startOf("hour");
    if (currentTime.isAfter(targetTime)) {
        $(elementSelector).addClass("past");
    } else if (currentTime.isBefore(targetTime)) {
        $(elementSelector).addClass("future");
    } else {
        $(elementSelector).addClass("present");
    }
    }


