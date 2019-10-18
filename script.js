// Problem 1: the date and time
let m = moment();

var currentDayDisplay = m.format("dddd, MMMM, Do YYYY");

console.log(currentDayDisplay);

// To display time at top of page, use moment
$("#currentDay").text(currentDayDisplay);

// Each time-block will need to be linked to current time so that the display can toggle between past, present, future

let currentHour = m.format("hA");

console.log(currentHour);

var nine = m.hour(9).format("hA");
$("#slotOne").text(nine);
var ten = m.hour(10).format("hA");
$("#slotTwo").text(ten);
var eleven = m.hour(11).format("hA");
$("#slotThree").text(eleven);
var twelve = m.hour(12).format("hA");
$("#slotFour").text(twelve);
var one = m.hour(13).format("hA");
$("#slotFive").text(one);
var two = m.hour(14).format("hA");
$("#slotSix").text(two);
var three = m.hour(15).format("hA");
$("#slotSeven").text(three);
var four = m.hour(16).format("hA");
$("#slotEight").text(four);
var five = m.hour(17).format("hA");
$("#slotNine").text(five);

// Problem 2: user input field

// Each time block will have a text area where the user can enter text

// Don't forget event.preventdefault()

// Problem 3: save button

// When a user enters info into input field and clicks the save button, this triggers storing the time and input in localStorage