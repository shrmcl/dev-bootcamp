
let now = new Date();
let sec = now.getSeconds();


setInterval(function(){
    let dgr = sec * 6 - 90;
    console.log(dgr);
    

    if(sec >= 60) {
        sec = 0;
    }

    document.querySelector("#seconds").style.transform = "translate(120px, 120px) rotate(" + dgr + "deg)";
    sec += 1;

}, 1000)