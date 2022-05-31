let btn1_green = document.getElementById('btngreen');
let box1 = document.querySelector(' .box1');
let btn2_blue = document.getElementById('btnblue');
let box2 = document.querySelector(' .box2');
let btn3_yellow = document.getElementById('btnyellow');
let box3 = document.querySelector(' .box3');

function changeColorbtn1(){
    if(btn1_green.value == 'green'){
        box1.style.background = btn1_green.value;
        console.log(btn1_green)
    }
}

function changeColorbtn2(){
    if(btn2_blue.value == 'blue'){
        box2.style.background = btn2_blue.value;
        console.log(btn2_blue)
    }
}

function changeColorbtn3(){
    if(btn3_yellow.value == 'yellow'){
        box3.style.background = btn3_yellow.value;
        console.log(btn3_yellow)
    }
}