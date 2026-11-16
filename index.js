let calendar = document.getElementById("cal");
let time = document.getElementById("time");
let date = document.getElementById("date");

let morning = document.getElementById("indicator");
let afternoon = document.getElementById("pm");

let timeFormat = document.getElementById("btn24");
let timeformat = document.getElementById("btn12");

let indicate = document.querySelector(".indicate");



let hourCycle = new Intl.DateTimeFormat(undefined, {
    hour: "numeric"
}).resolvedOptions().hour12;

let format = hourCycle ? "12" : "24";


function updateButtons() {

    if (format === "24") {
        timeFormat.classList.add("jj");
        timeformat.classList.remove("jj");

    } else {
        timeformat.classList.add("jj");
        timeFormat.classList.remove("jj");
    }

}


// MAIN TIMER FUNCTION
function updatetimer() {

    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();


    
    let displayhour;

    if (format === "12") {
        displayhour = hours % 12 || 12;

    } else {
        displayhour = hours;
    }


    // ADD ZERO BEFORE SINGLE DIGITS
    displayhour = String(displayhour).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");


    // DISPLAY DATE AND TIME
    calendar.textContent = today.toDateString();

    date.textContent = today.toDateString();

    time.textContent = `${displayhour}:${minutes}:${seconds}`;


    // AM AND PM INDICATOR
    if (hours < 12) {

        morning.classList.add("active");
        afternoon.classList.remove("active");

        indicate.textContent = "AM";

    } else {

        afternoon.classList.add("active");
        morning.classList.remove("active");

        indicate.textContent = "PM";
    }

}


// 24 HOURS BUTTON
timeFormat.addEventListener("click", () => {

    format = "24";

    updateButtons();

    updatetimer();

});


// 12 HOURS BUTTON
timeformat.addEventListener("click", () => {

    format = "12";

    updateButtons();

    updatetimer();

});


// START EVERYTHING
updateButtons();

updatetimer();

setInterval(updatetimer, 1000);