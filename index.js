const startbtn = document.querySelector(`.startbtn`);
const StartBtn = document.querySelector(`.StartBtn`);

const LapBtn = document.querySelector(`.LapBtn`);
const lapbtn = document.querySelector(`.lapbtn`);

const laps = document.querySelector(`.laps`);

let millisec = 0;
let second = 0;
let min = 0;

let m = 0;
let s = 0;
let ms = 0;

let time = document.querySelector(`.timer`);
let int = null;

let isTimerStarted = false;

startbtn.addEventListener('click',() =>{
    if(isTimerStarted === false){
        int = setInterval(displayTimer,10);
    }else{
        clearInterval(int);
    }
    changeStartStop();
})

function displayTimer(){
    millisec++;
    if(millisec >= 90){
        second++;
        millisec = 0;
    }
    if(second >= 60){
        min++;
        second = 0;
    }

    m = min < 10 ? "0" + min : min;
    s = second < 10 ? "0" + second : second;
    ms = millisec < 10 ? "0" + millisec : millisec;

    time.innerHTML = `${m}:${s}:${ms}`;
}

function changeStartStop(){
    if(isTimerStarted === false){
        isTimerStarted = true;

        startbtn.innerHTML = "STOP";
        startbtn.classList.add("timeStarted");
        
    }else{
        isTimerStarted = false;
        
        startbtn.innerHTML = "START";
        startbtn.classList.remove("timeStarted");

    }
}
