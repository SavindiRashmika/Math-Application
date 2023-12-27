

let add = document.querySelector("#addition");
let subtract = document.querySelector("#subtraction");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let dash = document.querySelector("#dashboard");
let head = document.querySelector("#list");

add.style.display ='none';
subtract.style.display ='none';
multiply.style.display ='none';
divide.style.display ='none';
head.style.display = 'none';
dash.style.display = 'block';

let lnkStart = document.querySelector("#start_button");
let lnkAdd = document.querySelector("#current");
let lnkSubtract = document.querySelector("#current1");
let lnkMultiply =document.querySelector("#current2");
let lnkDivide =document.querySelector("#current3");


lnkStart.addEventListener("click",function (){
    add.style.display ='block';
    head.style.display = 'block';
    subtract.style.display ='none';
    multiply.style.display ='none';
    divide.style.display ='none';
    dash.style.display = 'none';
})

lnkAdd.addEventListener("click",function (){
    add.style.display ='block';
    head.style.display = 'block';
    subtract.style.display ='none';
    multiply.style.display ='none';
    divide.style.display ='none';
    dash.style.display = 'none';
})

lnkSubtract.addEventListener("click",function (){
    add.style.display ='none';
    head.style.display = 'block';
    subtract.style.display ='block';
    multiply.style.display ='none';
    divide.style.display ='none';
    dash.style.display = 'none';

})

lnkMultiply.addEventListener("click",function (){
    add.style.display ='none';
    subtract.style.display ='none';
    head.style.display = 'block';
    multiply.style.display ='block';
    divide.style.display ='none';
    dash.style.display = 'none';
})

lnkDivide.addEventListener("click",function (){
    add.style.display ='none';
    subtract.style.display ='none';
    multiply.style.display ='none';
    head.style.display = 'block';
    divide.style.display ='block';
    dash.style.display = 'none';
})

