
let gallery = ["img/background1.jpg", "img/background2.jpg", "img/background3.jpg"];
let index = 0;

function changeImage() {
    document.getElementById("slider").style.backgroundImage = "url(" + gallery[index] + ")";
    index++

    if(index > gallery.length-1) {
        index = 0;
    }
}

setInterval(changeImage, 1000);