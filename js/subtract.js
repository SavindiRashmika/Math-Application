
const sub_option1 = document.getElementById("sub_option1");
const sub_option2 = document.getElementById("sub_option2");
const sub_option3 = document.getElementById("sub_option3");
var sub_answer = 0;

function subtraction(){
    var sub_num1 = Math.floor(Math.random() * 20);
    var sub_num2 = Math.floor(Math.random() * 10);
    var sub_dummyAnswer1 = Math.floor(Math.random() * 20);
    var sub_dummyAnswer2 = Math.floor(Math.random() * 10);
    var sub_allAnswer = [];
    var sub_switchAnswer = [];

    sub_answer = sub_num1 - sub_num2;

    document.getElementById("sub_num1").innerHTML = sub_num1;
    document.getElementById("sub_num2").innerHTML = sub_num2;

    sub_allAnswer = [sub_answer, sub_dummyAnswer1, sub_dummyAnswer2];

    for (i = sub_allAnswer.length; i--;){
        sub_switchAnswer.push(sub_allAnswer.splice(Math.random() * (i+1),1)[0]);
    }

    sub_option1.innerHTML = sub_switchAnswer[0];
    sub_option2.innerHTML = sub_switchAnswer[1];
    sub_option3.innerHTML = sub_switchAnswer[2];
}

sub_option1.addEventListener("click", function (){
    if (sub_option1.innerHTML == sub_answer){
        subtraction();
    }else {
        audio.play();
    }
});

sub_option2.addEventListener("click", function (){
    if (sub_option2.innerHTML == sub_answer){
        subtraction();
    }else {
        audio.play();
    }
});

sub_option3.addEventListener("click", function (){
    if (sub_option3.innerHTML == sub_answer){
        subtraction();
    }else {
        audio.play();
    }
});

subtraction();


















