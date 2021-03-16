
let now = new Date();
let sec = now.getSeconds();
let min = now.getMinutes();
let hr = now.getHours();

setInterval(function(){
    let sdgr = sec * 6 - 90;
    let mdgr = min * 6 - 90;
    let hdgr = hr * 30 - 90;
    
    if (sec >= 60) {
        sec = 0;
        min++;
    }

    if (min >= 60) {
        hr++;
    }

    document.querySelector("#seconds").style.transform = "translate(120px, 120px) rotate(" + sdgr + "deg)";
    sec += 1;

    document.querySelector("#minutes").style.transform = "translate(120px, 120px) rotate(" + mdgr + "deg)";

    document.querySelector("#hours").style.transform = "translate(120px, 120px) rotate(" + hdgr + "deg)";

}, 1000)