//timer

//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
//The TimerHandler Function is called once after every 1 second
//let timer = setInterval(TimerHandler, 1000);

//These are the Variables used to store the time
let sec = 0;
let min = 0;
let hour = 0;
let timer;

//The getElementById() method returns the element that has the ID attribute with the specified value.
let start_button = document.getElementById("start");
let stop_button = document.getElementById("stop");
let reset_button = document.getElementById("reset");

//The getElementById() method returns the element that has the ID attribute with the specified value.
//Here we used to get the element to manipulate its info
let time_element = document.getElementById("timer");

start_button.addEventListener("click", function () {
    ////The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
    timer = setInterval(TimerHandler, 1000);
    //User should not be able to press Reset button once timer is ON
    reset_button.disabled = true;
});


stop_button.addEventListener("click", function () {//
    //The clearInterval() method clears a timer set with the setInterval() method.
    timer = clearInterval(timer);
    //Once timer is off user should be able to press Reset button.
    reset_button.disabled = false;

});

reset_button.addEventListener("click", function () {//
    //The clearInterval() method clears a timer set with the setInterval() method.
    timer = clearInterval(timer);
    sec = 0;
    min = 0;
    hour = 0;
    //Now the Timehandler will get 0,0,0 and it will prettify 0,0,0
    time_element.innerHTML = "00:00:00";
});

//This function gives logic to update Seconds, Minutes and Hours
function TimerHandler() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hour++;
    }

    //If you want to test whether code is working them uncomment this and comment the function call
    //console.log(hour + " : " + min + " : " + sec);
    DisplayTime();//
}

//This function makes the time pretty
//It also assigns the correct time to HTML using its ID
function DisplayTime() {

    //Variables to store prettified time
    let sec_pretty = sec;
    let min_pretty = min;
    let hour_pretty = hour;

    if (sec < 10) {
        sec_pretty = "0" + sec;
    }

    if (min < 10) {
        min_pretty = "0" + min;
    }

    if (hour < 10) {
        hour_pretty = "0" + hour;
    }

    //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    //Here we return the updated time
    time_element.innerHTML = hour_pretty + ":" + min_pretty + ":" + sec_pretty;
}


