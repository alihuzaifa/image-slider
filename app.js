// slider container
var slider = document.querySelector(".slider");
var next_btn = document.querySelector("#next");
var back_btn = document.querySelector("#back");
var count = 0;
var backCount = 0;
function next(){
    count++
    if(count == 1){
        slider.style.backgroundImage = "url('images/2.jpg')"
    }
    else if(count == 2){
        slider.style.backgroundImage = "url('images/3.jpg')"
    }
    else if(count == 3){
        slider.style.backgroundImage = "url('images/4.jpg')"
    }
    else if(count == 4){
        slider.style.backgroundImage = "url('images/5.jpg')"
    }
    else if(count == 5){
        slider.style.backgroundImage = "url('images/6.jpg')"
    }
    else if(count == 6){
        slider.style.backgroundImage = "url('images/7.jpg')"
        next_btn.style.display = "none"
    }
}
function back(){
    if(count == 1){
        next_btn.style.display = "block"
        slider.style.backgroundImage = "url('images/1.jpg')"
        count--
    }
    if(count == 2){
        next_btn.style.display = "block"
        slider.style.backgroundImage = "url('images/2.jpg')"
        count--
    }
    if(count == 3){
        next_btn.style.display = "block"
        slider.style.backgroundImage = "url('images/3.jpg')"
        count--
    }
    if(count == 4){
        next_btn.style.display = "block"
        slider.style.backgroundImage = "url('images/4.jpg')"
        count--
    }
    if(count == 5){
        next_btn.style.display = "block"
        slider.style.backgroundImage = "url('images/5.jpg')"
        count--
    }
    if(count == 6){
        next_btn.style.display = "block"
        slider.style.backgroundImage = "url('images/6.jpg')"
        count--
    }
}
