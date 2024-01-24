$(document).ready(function () {
    $("#currentDay").text(dayjs().format("dddd, D MMM YYYY"));
    var beforeTime = dayjs().startOf("day").hour(9);
    for (var i = 1; i <= 9; i++) {
      var timeSlot = beforeTime.format("HH:mm");
      var timeBlock = `
        <div class="col-12 time-block">
          <div class="row">
            <div class="col-2 hour">${timeSlot}</div>
            <textarea class="col-8 description" id="text-${i}"></textarea>
            <button class="col-2 saveBtn" data-index="${i}"><i class="fas fa-save"></i></button>
          </div>
        </div>`;
      $("#planner").append(timeBlock);
      beforeTime = beforeTime.add(1, "hours");
    }
    function testTime(tarTime, elementSelector) {
      var currentT = dayjs().startOf("hour");
      if (currentT.isAfter(tarTime)) {
        $(elementSelector).addClass("past");
      } else if (currentT.isBefore(tarTime)) {
        $(elementSelector).addClass("future");
      } else if (currentT.isSame(tarTime)) {
        $(elementSelector).addClass("present");
      }
    }
    $(".saveBtn").on("click", function () {
      var index = $(this).data("index");
      var text = $("#text-" + index).val();
      localStorage.setItem("task-" + index, text);
    });
    for (var i = 1; i <= 9; i++) {
      var savedTask = localStorage.getItem("task-" + i);
      if (savedTask) {
        $("#text-" + i).val(savedTask);
      }
    }
  });
  