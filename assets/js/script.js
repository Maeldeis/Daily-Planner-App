$(document).ready(function() {

    $("#currentDay").text(dayjs().format("dddd, D MMM YYYY"));
var beforeTime = dayjs().startOf("day").hour(8);
for (var i = 0; i < 11; i++) {
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
function testTime(targetTime, elementSelector) {
    var currentTime = dayjs().startOf("hour");
    if (currentTime.isAfter(targetTime)) {
        $(elementSelector).addClass("past");
    } else if (currentTime.isBefore(targetTime)) {
        $(elementSelector).addClass("future");
    } else {
        $(elementSelector).addClass("present");
    }
    }
    $(".saveBtn").on("click", function () {
        var index = $(this).data("index");
        var text = $("#text-" + index).val();
        localStorage.setItem("task-" + index, text);
      });
      for (var i = 1; i <= 8; i++) {
        var savedTask = localStorage.getItem("task-" + i);
        if (savedTask) {
          $("#text-" + i).val(savedTask);
        }
      }

