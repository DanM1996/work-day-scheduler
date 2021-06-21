// gets id from the HTML and turns it into variable
var currentDay = document.getElementById("currentDay");

// variables for all hours in the work day
var nineAM = 9;
var tenAM = 10;
var elevenAM = 11;
var twelvePM = 12;
var onePM = 13;
var twoPM = 14;
var threePM = 15;
var fourPM = 16;
var fivePM = 17;

// sets variable to display current day with moment.js
var day = moment().format("dddd, MMMM Do");
console.log(day);
currentDay.textContent= day;

function colorChange () {
    var presentTime = moment().hour();
    console.log(presentTime, nineAM, fivePM);

   if (presentTime < nineAM) {
       $("#9am").addClass("future")
   }
   else if (presentTime === nineAM)  {
       $("#9am").addClass("present")
   }
   else {
       $("#9am").addClass("past")
   }
   if (presentTime < tenAM) {
       $("#10am").addClass("future")
   }
   else if (presentTime === tenAM)  {
       $("#10am").addClass("present")
   }
   else {
       $("#10am").addClass("past")
   }
   if (presentTime < elevenAM) {
       $("#11am").addClass("future")
   }
   else if (presentTime === elevenAM)  {
       $("#11am").addClass("present")
   }
   else {
       $("#11am").addClass("past")
   }
   if (presentTime < twelvePM) {
       $("#12pm").addClass("future")
   }
   else if (presentTime === twelvePM)  {
       $("#12pm").addClass("present")
   }
   else {
       $("#12pm").addClass("past")
   }
     if (presentTime < onePM) {
       $("#1pm").addClass("future")
   }
   else if (presentTime === onePM)  {
       $("#1pm").addClass("present")
   }
   else {
       $("#1pm").addClass("past")
   }
     if (presentTime < twoPM) {
       $("#2pm").addClass("future")
   }
   else if (presentTime === twoPM)  {
       $("#2pm").addClass("present")
   }
   else {
       $("#2pm").addClass("past")
   }
     if (presentTime < threePM) {
       $("#3pm").addClass("future")
   }
   else if (presentTime === threePM)  {
       $("#3pm").addClass("present")
   }
   else {
       $("#3pm").addClass("past")
   }
     if (presentTime < fourPM) {
       $("#4pm").addClass("future")
   }
   else if (presentTime === fourPM)  {
       $("#4pm").addClass("present")
   }
   else {
       $("#4pm").addClass("past")
   }
     if (presentTime < fivePM) {
       $("#5pm").addClass("future")
   }
   else if (presentTime === fivePM)  {
       $("#5pm").addClass("present")
   }
   else {
       $("#5pm").addClass("past")
   }
}



// when saveBtn is clicked, data in the textarea is saved to local storage
$(".saveBtn").on("click", function(){
    // sets the sibling (textarea next to it) as the value for task
    var task = $(this).siblings(".task-field").val();
    // assings it the parent id (the times on the HTML id section)
    var time = $(this).parent().attr("id");
    // stores the item by time id with a value of task
    localStorage.setItem(time, task);
})

// calls item back from local storage and sets it as the value of .task-field(the textarea)
$("#9am .task-field").val(localStorage.getItem("9am"));

$("#10am .task-field").val(localStorage.getItem("10am"));

$("#11am .task-field").val(localStorage.getItem("11am"));

$("#12pm .task-field").val(localStorage.getItem("12pm"));

$("#1pm .task-field").val(localStorage.getItem("1pm"));

$("#2pm .task-field").val(localStorage.getItem("2pm"));

$("#3pm .task-field").val(localStorage.getItem("3pm"));

$("#4pm .task-field").val(localStorage.getItem("4pm"));

$("#5pm .task-field").val(localStorage.getItem("5pm"));

colorChange();