var currentDay = document.getElementById("currentDay");

var day = moment().format("dddd, MMMM Do");
console.log(day);
currentDay.textContent= day;