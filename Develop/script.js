var currentDay = document.getElementById("currentDay");

// var currentTime = k;
var day = moment().format("dddd, MMMM Do");
console.log(day);
currentDay.textContent= day;

var checkTime = function() {
    currentTime = moment().format("hh:mm:ss")
    console.log(currentTime);
};
 checkTime();