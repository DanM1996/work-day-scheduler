var currentDay = document.getElementById("currentDay");

var day = moment().format("dddd, MMMM Do");
console.log(day);
currentDay.textContent= day;

$(".saveBtn").on("click", function(){
    console.log(this);
    var task = $(this).siblings(".task-field").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, task);
})

$("#9am .task-field").val(localStorage.getItem("9am"));
$("#10am .task-field").val(localStorage.getItem("10am"));
$("#11am .task-field").val(localStorage.getItem("11am"));
$("#12pm .task-field").val(localStorage.getItem("12pm"));
$("#1pm .task-field").val(localStorage.getItem("1pm"));
$("#2pm .task-field").val(localStorage.getItem("2pm"));
$("#3pm .task-field").val(localStorage.getItem("3pm"));
$("#4pm .task-field").val(localStorage.getItem("4pm"));
$("#5pm .task-field").val(localStorage.getItem("5pm"));

$(".task-field").on("click", "p", function(){
    // retrieve current text (if any) on the p element
    var taskText = $(this)
    .text()
    .trim();
    console.log(taskText);

    // replace the text with an input field
    var taskInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(taskInput);
    taskIntput.trigger("focus");
});
