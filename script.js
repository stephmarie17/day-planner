// Problem 1: the date and time
let m = moment();

var currentDayDisplay = m.format("dddd, MMMM, Do YYYY");

console.log(currentDayDisplay);

// To display time at top of page, use moment
$("#currentDay").text(currentDayDisplay);

// Each time-block will need to be linked to current hour so that the display can toggle between past, present, future

let currentHour = m.hours();

console.log(currentHour);

// Set hours of each timeblock to a moment object
var nine = m.hour(9).format("hA");
$("#slot-9").text(nine);
var ten = m.hour(10).format("hA");
$("#slot-10").text(ten);
var eleven = m.hour(11).format("hA");
$("#slot-11").text(eleven);
var twelve = m.hour(12).format("hA");
$("#slot-12").text(twelve);
var one = m.hour(13).format("hA");
$("#slot-13").text(one);
var two = m.hour(14).format("hA");
$("#slot-14").text(two);
var three = m.hour(15).format("hA");
$("#slot-15").text(three);
var four = m.hour(16).format("hA");
$("#slot-16").text(four);
var five = m.hour(17).format("hA");
$("#slot-17").text(five);

// Toggle display feature 

var agendaDisplay  = $(".agenda-text");

// Problem 2: user input field & local storage

var agendaItems = [];

function initializeAgenda() {

    $("div .hour").each(function (i){
        var hourChoices = parseInt($(this).attr("id").split("-")[1]);
        console.log(hourChoices); 
            if (hourChoices[i] < currentHour) {
                agendaDisplay.removeClass("present")
                agendaDisplay.removeClass("future");
                agendaDisplay.addClass("past");
        
            } else if (hourChoices[i] == currentHour) {
                agendaDisplay.removeClass("past");
                agendaDisplay.removeClass("future");
                agendaDisplay.addClass("present");
            } else {
                agendaDisplay.removeClass("present");
                agendaDisplay.removeClass("past");
                agendaDisplay.addClass("future");
            };
    })

    var storedAgendaItems = JSON.parse(localStorage.getItem("agendaItems"));

    if (storedAgendaItems !== null) {
        agendaItems = storedAgendaItems;
    };
};

$("button").on("click", function(event) {
    event.preventDefault();

    if (inputAgenda == undefined || "") {
        return;
    } else {
        var inputAgenda = $("textarea").siblings().val();
        console.log(inputAgenda);
    
        agendaItems.push(inputAgenda);
    
        localStorage.setItem("agendaItems", JSON.stringify(agendaItems));
    
        inputAgenda.append(agendaItems);
    }
    

});

initializeAgenda();

// When a user enters info into input field and clicks the save button, this triggers storing the time and input in localStorage

