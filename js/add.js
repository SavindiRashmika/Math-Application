
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
const audio_2 = document.getElementById("myAudio_2")
var answer = 0;

function equation(){
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);
    var dummyAnswer1 = Math.floor(Math.random() * 13);
    var dummyAnswer2 = Math.floor(Math.random() * 13);
    var allAnswer =[];
    var switchAnswer = [];

    answer = num1 + num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswer = [answer, dummyAnswer1, dummyAnswer2];

    for(i= allAnswer.length; i--;){
        switchAnswer.push(allAnswer.splice(Math.random() * (i+1),1)[0]);
    }


    option1.innerHTML = switchAnswer[0];
    option2.innerHTML = switchAnswer[1];
    option3.innerHTML = switchAnswer[2];
}


option1.addEventListener("click" , function (){
    if (option1.innerHTML == answer){
        equation();
        audio_2.play();
    }else {
        audio.play();
    }
});

option2.addEventListener("click" , function (){
    if (option2.innerHTML == answer){
        equation();
        audio_2.play();
    }else {
        audio.play();
    }
});

option3.addEventListener("click" , function (){
    if (option3.innerHTML == answer){
        equation();
        audio_2.play();
    }else {
        audio.play();
    }
});

equation();