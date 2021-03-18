// this is code from JM
// querySelectors stored in variable OUTSIDE/before the function 

let now = new Date();
let sec = now.getSeconds();
let min = now.getMinutes();
let hr = now.getHours();

let seconds = document.querySelector("#seconds")
let minutes = document.querySelector("#minutes")
let hours = document.querySelector("#hours")

setInterval(function(){
    let sdgr = sec * 6 - 90;
    let mdgr = min * 6 - 90;
    let hdgr = hr * 30 - 90;
    
    if (sec >= 60) {
        min = new Date().getMinutes();
    }

    if (min >= 60) {
        hr = new Date().getHours();
    }

    seconds.style.transform = "translate(120px, 120px) rotate(" + sdgr + "deg)";
    sec += 1;

    minutes.style.transform = "translate(120px, 120px) rotate(" + mdgr + "deg)";

    hours.style.transform = "translate(120px, 120px) rotate(" + hdgr + "deg)";

}, 1000)