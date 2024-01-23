// script.js

$(document).ready(function () {
    // Set the initial text content of an element with the id "currentDay"
    $("#currentDay").text(dayjs().format("dddd, D MMM YYYY"));
  
    // Calculate time slots for the planner starting from 9 AM to 5 PM
    var beforeTime = dayjs().startOf("day").hour(9);
  
    // Create time blocks dynamically for each hour
    for (var i = 1; i <= 8; i++) {
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
  
      // Move to the next hour
      beforeTime = beforeTime.add(1, "hours");
    }
  
   
  
    // Function to test and update the class based on the current time
    function testTime(targetTime, elementSelector) {
      var currentTime = dayjs().startOf("hour");
  
      if (currentTime.isAfter(targetTime)) {
        $(elementSelector).addClass("past");
      } else if (currentTime.isBefore(targetTime)) {
        $(elementSelector).addClass("future");
      } else if (currentTime.isSame(targetTime)) {
        $(elementSelector).addClass("present");
      }
    }
  
    // Event handler for button clicks
    $(".saveBtn").on("click", function () {
      var index = $(this).data("index");
      var text = $("#text-" + index).val();
      localStorage.setItem("task-" + index, text);
    });
  
    // Load saved tasks from local storage
    for (var i = 1; i <= 8; i++) {
      var savedTask = localStorage.getItem("task-" + i);
      if (savedTask) {
        $("#text-" + i).val(savedTask);
      }
    }
  });
  