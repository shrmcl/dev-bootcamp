

let treats = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg", "img/5.jpeg", "img/6.jpeg"];
let activeImg = document.querySelector(".slideshow");
let x = 0;

function goForward() {
    x++
    if (x >= treats.length-1) {
        x = 0;
    }
    activeImg.src = treats[x];
    console.log(x);
}

function goBack() {
    x--
    if (x < 0) {
        x = treats.length - 1;
    }
    activeImg.src = treats[x]; 
    console.log(x);
}