

const d_option1 = document.getElementById("d_option1");
const d_option2 = document.getElementById("d_option2");
const d_option3 = document.getElementById("d_option3");
const d_audio = document.getElementById("d_myAudio");
const d_audio_2 = document.getElementById("d_myAudio_2")
var d_answer = 0;

function Division(){
    var d_num1 = Math.floor(Math.random() * 15);
    var d_num2 = Math.floor(Math.random() * 10);
    var d_dummyAnswer1 = Math.floor(Math.random() * 15);
    var d_dummyAnswer2 = Math.floor(Math.random() * 15);
    var d_allAnswer = [];
    var d_switchAnswer = [];

    d_answer = (d_num1 / d_num2).toFixed(1);

    document.getElementById("d_num1").innerHTML = d_num1;
    document.getElementById("d_num2").innerHTML = d_num2;

    d_allAnswer = [d_answer, d_dummyAnswer1, d_dummyAnswer2];

    for (i = d_allAnswer.length; i--;){
        d_switchAnswer.push(d_allAnswer.splice(Math.random() * (i+1),1)[0]);
    }

    d_option1.innerHTML = d_switchAnswer[0];
    d_option2.innerHTML = d_switchAnswer[1];
    d_option3.innerHTML = d_switchAnswer[2];
}

d_option1.addEventListener("click", function (){
    if (parseFloat(d_option1.innerHTML) == d_answer){
        Division();
        d_audio_2.play();
    }else {
        d_audio.play();
    }
});

d_option2.addEventListener("click", function (){
    if (parseFloat(d_option2.innerHTML) == d_answer){
        Division();
        d_audio_2.play();
    }else {
        d_audio.play();
    }
});

d_option3.addEventListener("click", function (){
    if (parseFloat(d_option3.innerHTML) == d_answer){
        Division();
        d_audio_2.play();
    }else {
        d_audio.play();
    }
});

Division();


















