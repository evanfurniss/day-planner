// My day schedule, from 9am-6pm
var daySchedule = [
    {
        armytime: 9,
        hour: 9,
        timeToggle: "am",
        message: ""
    },
    {
        armytime: 10,
        hour: 10,
        timeToggle: "am",
        message: ""
    },
    {
        armytime: 11,
        hour: 11,
        timeToggle: "am",
        message: ""
    },
    {
        armytime: 12,
        hour: 12,
        timeToggle: "pm",
        message: ""
    },
    {
        armytime: 13,
        hour: 1,
        timeToggle: "pm",
        message: ""
    },
    {
        armytime: 14,
        hour: 2,
        timeToggle: "pm",
        message: ""
    },
    {
        armytime: 15,
        hour: 3,
        timeToggle: "pm",
        message: ""
    },
    {
        armytime: 16,
        hour: 4,
        timeToggle: "pm",
        message: ""
    },
    {
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

    //Checks hours and modifies the color based on previously set up CSS
    if(day.armytime < dayjs().format("HH")) {
        messages.attr("class", "past col-md-9 description");
    } else if(day.armytime === dayjs().format("HH")) {
        messages.attr("class", "present col-md-9 description");
    } else if(day.armytime > dayjs().format("HH")) {
        messages.attr("class", "future col-md-9 description");
    }

    //Creates a save button per hour
    var saveBtn = $("<button>").attr("class", "col-md-1 saveBtn");

    hourRow.append(hourOfDay, messages, saveBtn);
});

saveHour();
function saveHour () {
    localStorage.setItem("daySchedule", JSON.stringify(daySchedule));
}