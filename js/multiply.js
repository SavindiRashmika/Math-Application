
const m_option1 = document.getElementById("m_option1");
const m_option2 = document.getElementById("m_option2");
const m_option3 = document.getElementById("m_option3");
var m_answer = 0;

function Multiplication(){
    var m_num1 = Math.floor(Math.random() * 13);
    var m_num2 = Math.floor(Math.random() * 13);
    var m_dummyNumber1 = Math.floor(Math.random() * 13);
    var m_dummyNumber2 = Math.floor(Math.random() * 13);
    var m_allAnswer = [];
    var m_switchAnswer = [];

    m_answer = m_num1 * m_num2;

    document.getElementById("m_num1").innerHTML = m_num1;
    document.getElementById("m_num2").innerHTML = m_num2;

    m_allAnswer = [m_answer, m_dummyNumber1, m_dummyNumber2];

    for (i = m_allAnswer.length; i--;) {
      m_switchAnswer.push(m_allAnswer.splice(Math.random() * (i+1), 1)[0]);
    }

    m_option1.innerHTML = m_switchAnswer[0];
    m_option2.innerHTML = m_switchAnswer[1];
    m_option3.innerHTML = m_switchAnswer[2];
}

m_option1.addEventListener("click", function (){
    if (m_option1.innerHTML == m_answer){
        Multiplication();
    }else {
        audio.play();
    }
});

m_option2.addEventListener("click", function (){
    if (m_option2.innerHTML == m_answer){
        Multiplication();
    }else {
        audio.play();
    }
});

m_option3.addEventListener("click", function (){
    if (m_option3.innerHTML == m_answer){
        Multiplication();
    }else {
        audio.play();
    }
});

Multiplication();
