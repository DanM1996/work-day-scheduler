// gets id from the HTML and turns it into variable
var currentDay = document.getElementById("currentDay");

if (localStorage.getItem("schedule")) {
    var schedule = JSON.parse(localStorage.getItem("schedule"))
} else {
var schedule = [
    {
        time: 9,
        task: ""
    },
    {
        time: 10,
        task: ""
    },
    {
        time: 11,
        task: ""
    },
    {
        time: 12,
        task: ""
    },
    {
        time: 13,
        task: ""
    },
    {
        time: 14,
        task: ""
    },
    {
        time: 15,
        task: ""
    },
    {
        time: 16,
        task: ""
    },
    {
        time: 17,
        task: ""
    }
]}

// sets variable to display current day with moment.js
var day = moment().format("dddd, MMMM Do");
console.log(day);
currentDay.textContent= day;

function colorChange () {
    var presentTime = moment().hour();
    for (i = 0; i < schedule.length; i++) {
        if (presentTime < schedule[i].time) {
            $("#" + schedule[i].time).addClass("future")
        }
        else if (presentTime === schedule[i].time) {
            $("#" + schedule[i].time).addClass("present")
        }
        else {
            $("#" + schedule[i].time).addClass("past")
        }
    }
};

// when saveBtn is clicked, data in the textarea is saved to local storage
$(".saveBtn").on("click", function(){
    // sets the sibling (textarea next to it) as the value for task
    var task = $(this).siblings(".task-field").val();
    console.log(task);
    // assings it the parent id (the times on the HTML id section)
    var timeId = $(this).parent().attr("id");
    for (i = 0; i < schedule.length; i++) {
        if (schedule[i].time === +timeId) {
            schedule[i].task = task;
        }
    }
    console.log(schedule);
    // stores the item by time id with a value of task
    localStorage.setItem("schedule", JSON.stringify(schedule));
})
for (i = 0; i < schedule.length; i++) {
    if (schedule[i].task != "") {
        $("#" + schedule[i].time + " .task-field").val(schedule[i].task)
    }  
}

colorChange();
