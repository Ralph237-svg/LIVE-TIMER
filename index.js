let calendar = document.getElementById("cal");
let time = document.getElementById("time");
let date = document.getElementById("date");
let morning = document.getElementById("indicator");
let afternoon = document.getElementById("pm");
let timeFormat = document.getElementById("btn24");
let timeformat = document.getElementById("btn12");
let format = "12";

function updatetimer(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let displayhour;
    if (format === "12"){
        displayhour = hours % 12 || 12;
    }else{
        displayhour = hours;
    }

    displayhour = String(displayhour).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    calendar.textContent = today.toDateString();
    date.textContent = today.toDateString();
    time.textContent = `${displayhour}:${minutes}:${seconds}`;

    timeFormat.addEventListener("click", () => {
        timeFormat.classList.add("jj");
        timeformat.classList.remove("jj");
        format = "24";
        updatetimer();
    });

    timeformat.addEventListener("click", () => {
        timeformat.classList.add("jj");
        timeFormat.classList.remove("jj");
        format = "12";
        updatetimer();
    });
    if (hours < 12){
        morning.classList.add("active");
        afternoon.classList.remove("active");
    }else{
        afternoon.classList.add("active");
        morning.classList.remove("active")
    } 
    }
updatetimer();

setInterval(updatetimer, 1000);

