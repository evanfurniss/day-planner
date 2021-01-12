// My day schedule, from 9am-6pm
var daySchedule = [
    {
        index: 0,
        armytime: 9,
        hour: 9,
        timeToggle: "am",
        message: ""
    },
    {
        index: 1,
        armytime: 10,
        hour: 10,
        timeToggle: "am",
        message: ""
    },
    {
        index: 2,
        armytime: 11,
        hour: 11,
        timeToggle: "am",
        message: ""
    },
    {
        index: 3,
        armytime: 12,
        hour: 12,
        timeToggle: "pm",
        message: ""
    },
    {
        index: 4,
        armytime: 13,
        hour: 1,
        timeToggle: "pm",
        message: ""
    },
    {
        index: 5,
        armytime: 14,
        hour: 2,
        timeToggle: "pm",
        message: ""
    },
    {
        index: 6,
        armytime: 15,
        hour: 3,
        timeToggle: "pm",
        message: ""
    },
    {
        index: 7,
        armytime: 16,
        hour: 4,
        timeToggle: "pm",
        message: ""
    },
    {
        index: 8,
        armytime: 17,
        hour: 5,
        timeToggle: "pm",
        message: ""
    }
]

// Sets the date at top of screen
setTime();
function setTime() {
    var currTime = $("#currentDay");
    currTime.text(dayjs().format("ddd. MMMM DD, YYYY"));
    if (daySchedule) {
        
    }
    else {
        JSON.parse(localStorage.getItem("daySchedule"));
    }
}

//creates hourly planner
daySchedule.forEach(function(day) {
    //creates the row to hold info for that specific hour
    var hourRow = $("<form>").attr("class", "row");
    $(".container").append(hourRow);

    //Tags that row with a specific hour of the work day
    var hourOfDay = $("<div>").text(day.hour + " " + day.timeToggle).attr("class", "col-md-1 hour");
    
    //Creates a textbox that can be used for reminders/meetings/deadlines etc.
    var messages = $("<textarea>");

    //Checks hours and modifies the color based on previously set up CSS, and sets the classes
    if(day.armytime < dayjs().format("HH")) {
        messages.attr("class", "past col-md-9 description");
    } else if(day.armytime == dayjs().format("HH")) {
        messages.attr("class", "present col-md-9 description");
    } else if(day.armytime > dayjs().format("HH")) {
        messages.attr("class", "future col-md-9 description");
    }

    //Creates a save button per hour
    var saveBtn = $("<button>").text("Save").attr({
        class: "col-md-1 saveBtn",
        id: day.index
    });

    //Appends my created rows to the container div
    hourRow.append(hourOfDay, messages, saveBtn);
});


$(".saveBtn").on("click", saveHour);
//Will save any text from the message area and put it in local storage
function saveHour(e) {
    e.preventDefault();
    var newPlan = $(this).siblings(".description").val();
    // daySchedule[this.id].setAttribute("message", newPlan);
    daySchedule[this.id].message = newPlan;
    localStorage.setItem("daySchedule", JSON.stringify(daySchedule));
}
