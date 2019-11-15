let backgroundElement = document.getElementById('background');
let noticeElement = document.getElementById('notice');
let timerNoticeElement = document.getElementById('timer-notice');
var audio = new Audio('../assets/audio/cincin.mp3');
var currentState;

let pad = number => number <= 9 ? `0${number}`.slice(-2) : number;
let changeState = () => {
    let dateNow = new Date();
    let minutesSecondsLeft = `${pad(59 - dateNow.getMinutes())}:${pad(59 - dateNow.getSeconds())}`
    let changeTrigger = dateNow.getHours() % 2;
    if (changeTrigger) {
        backgroundElement.style.backgroundColor = "#bf0000";
        noticeElement.style.color = 'white';
        noticeElement.innerText = 'Ništa brko!';
        timerNoticeElement.innerText = `vrati se za ${minutesSecondsLeft}`;
    } else {
        backgroundElement.style.backgroundColor = "#0cb000";
        noticeElement.style.color = 'white';
        noticeElement.innerText = 'Može brko!';
        timerNoticeElement.innerText = `imaš još ${minutesSecondsLeft}`;
    }

    if (changeTrigger !== currentState) {
        audio.loop = false;
        audio.play();
        currentState = changeTrigger;
    }
}

changeState();
setInterval(() => changeState(), 1000);
