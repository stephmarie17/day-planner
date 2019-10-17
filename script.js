// Problem 1: the date and time
let m = moment();

var currentDayDisplay = m.format("dddd, MMMM, Do YYYY");

console.log(currentDayDisplay);

// To display time at top of page, use moment
$("#currentDay").text(currentDayDisplay);

// Each time-block will need to be linked to current time so that the display can toggle between past, present, future

let currentHour = m.format("hA");

console.log(currentHour);



// function updateTimeblock() {
// // Toggle class to past
//     if(moment().isBefore($("#hourBlock").text)) {
//         $("#hour").toggleclass("future");
// // Toggle class to present
//     } else if(moment().isSame($("#hourBlock").text)) {
//         $("#hour").toggleclass("present");
// // Toggle class to future
//     } else if(moment().isAfter($("#hourBlock").text)) {
//         $("#hour").toggleclass("past");
//     }
// };

// updateTimeblock();


// Problem 2: user input field

// Each time block will have a text area where the user can enter text
// Don't forget event.preventdefault()

// Problem 3: save button
// When a user enters info into input field and clicks the save button, this triggers storing the time and input in localStorage