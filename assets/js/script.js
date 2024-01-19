// initial content with id currentDay
$("#currentDay").text(dayjs().format("dddd, D MMM YYYY"));

// calculating time slots from 8am to 5pm
var beforeTime = dayjs().startOf("day").hour(8);

// Create a string to hold list items
var listItems = '';

for (var i = 0; i < 7; i++) {
    var timeSlot = beforeTime.format("HH:mm");
    
    // Create time block HTML
    var timeBlock =
    `<div class="col-12 time-block">
        <div class="row">
            <div class="col-1 hour">${timeSlot}</div>
            <textarea class="col-8 description" id="text-${i}"></textarea>
            <button class="col-2 saveBtn" data-index="${i}"><i class="fas fa-save"></i></button>
        </div>
    </div>`;
    
    // appending time block to #planner div
    $("#planner").append(timeBlock);

    // Add timeSlot to the listItems string
    listItems += `<li>${timeSlot}</li>`;

    beforeTime = beforeTime.add(1, 'hour'); // Increment time for the next block
}

// Append the listItems to #timeBlockLi ul after the loop
$("#timeBlockLi").append(listItems);
