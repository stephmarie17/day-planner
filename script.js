// Sets current date and current time
let m = moment();

var currentDayDisplay = m.format("dddd, MMMM, Do YYYY");

console.log(currentDayDisplay);

$("#currentDay").text(currentDayDisplay);

let currentHour = m.hours();
console.log(currentHour);

// Empty array to store values entered in textarea input by user
var agendaItems = [];

// Set hours of each timeblock to a moment object and displays in designated format
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

function initializeAgenda() {

    $("div .hour").each(function (){
        var hourChoices = parseInt($(this).attr("id").split("-")[1]);
        console.log(hourChoices); 
            if (hourChoices < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present", "future");
                console.log("This is past" + hourChoices);
            } else if (hourChoices === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past", "future");
                console.log("This is present" + hourChoices);
            } else {
                $(this).addClass("future");
                $(this).removeClass("past", "present");
                console.log("This is past" + hourChoices);
            };
    })

// Gets items from localStorage on initialization
    var storedAgendaItems = JSON.parse(localStorage.getItem("agendaItems"));

    if (storedAgendaItems !== null) {
        agendaItems = storedAgendaItems;
    };
};

// Save button event listener to push entered text into an array and display the value after storing in local storage
$("button").on("click", function(event) {
    event.preventDefault();

    // Code to create an area to write the entered value
    var textEl = $("<p>");
    textEl.text(inputAgenda);
    $(this).append(textEl);

    // Code to push input of agenda into array if the input is NOT equal to an empty string
    if(inputAgenda !== "") {
        var inputAgenda = $(".agenda").val();
    
        agendaItems.push(inputAgenda);
    
        localStorage.setItem("agendaItems", JSON.stringify(agendaItems));
    // This code writes to the page - commented out because it is currently displaying the whole array in each div instead of just the one entered
        // $(".agenda-text").text(agendaItems);
        // $(".agenda-text").append(agendaItems[i]);

    } else return;
});

initializeAgenda();



