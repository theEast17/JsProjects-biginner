// getting all required elemenents
const start_btn = document.querySelector(".start-button button");   // starting button
const info_box = document.querySelector(".info-box");                 // information box
const exit_btn = document.querySelector(".info-box .buttons .quit");   //info box exit button
const continue_btn = document.querySelector(".info-box .buttons .Restart");  // info box starting button
const quiz_box = document.querySelector(".quizBox");   // quiz box 
const optionList = document.querySelector(".option_list");    // getting options
const next_btn = document.querySelector("footer .next_que");   // quiz box next button
const bottom_que_num = document.querySelector("footer .total_que");  // getting bottom total number 
const timeCount = document.querySelector(".quizBox .timer_sec"); // timer 
const resultBox = document.querySelector(".result_box");  //resultbox
const restartQuiz = document.querySelector(".result_box .buttons .restart"); //result box restart button
const quitQuiz = document.querySelector(".result_box .buttons .quit");  //result box quit button






// if start quiz button clicked    step 1
start_btn.onclick = () => {
    info_box.classList.add("activeinfo"); //show the info box
}

//if exit btn clicked    step 2
exit_btn.onclick = () => {
    info_box.classList.remove("activeinfo"); // hide the info box
}

//if continue btn clicked     step 3
continue_btn.onclick = () => {
    info_box.classList.remove("activeinfo");  // hide the info box
    quiz_box.classList.add("activequiz");   // show the quiz box
    displayQuestions(que_count);
    bottomNum(que_num);
    setTime(timeVlaue);
}

//if restart button clicked
// restartQuiz.onclick = () => {
//     quiz_box.classList.add("activequiz");   // hide the quiz box
//     resultBox.classList.remove("activeresult");  // show result box
//     let que_count = 0;    // you can not give assignment operator to const so be advised
//     let que_num = 1;
//     let timeVlaue = 15;
//     let userScore = 0;
//     displayQuestions(que_count);
//     bottomNum(que_num);
//     clearInterval(counter);
//     setTime(timeVlaue);
//     next_btn.style.display = "none";
// }


//if quit button clicked
quitQuiz.onclick = () => {
    window.location.reload();
}





// questions other
// creating an array storing number ,questions,options and answer into it     step 4


let questions = [
    {
        num: 1,
        question: "What does html stands for?",
        answer: "Hyper text markup language",
        options: [
            "Hyper text preprocessor",
            "Hyper text markup language",
            "Hyper text multiple language",
            "Hyper text my language"
        ]
    },
    {
        num: 2,
        question: "What does css stands for?",
        answer: "cascading style sheets",
        options: [
            "casciding stylist set",
            "cascading style sheets",
            "cascadind strom shit",
            "caskidding stylist shhet"
        ]
    },
    {
        num: 3,
        question: "What does os stands for?",
        answer: "operating system",
        options: [
            "operating system",
            "operator system",
            "opening system",
            "operator cycle"
        ]
    },
    {
        num: 4,
        question: "What does ui stands for?",
        answer: "user interface",
        options: [
            "user interface",
            "user id",
            "umbrella interface",
            "user instruction"
        ]
    },
    {
        num: 5,
        question: "What does IAS stands for?",
        answer: "Indian Administrative Service",
        options: [
            "indian airforce system",
            "indigo airline service",
            "Indian Administrative Service",
            "Indian Army Service"
        ]
    }
]

let que_count = 0;    // you can not give assignment operator to const so be advised
let que_num = 1;
let counter;
let timeVlaue = 15;
let userScore = 0;

// if next button clicked   [step 14]
next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_num++;
        displayQuestions(que_count);
        bottomNum(que_num);
        clearInterval(counter);
        setTime(timeVlaue);
        next_btn.style.display = "none";
    } else {
        // clearInterval(counter);
        console.log("questions completed");
        showResultBox();
    }

}

function displayQuestions(index) {      // getting questions    step 5
    const queText = document.querySelector(".que_text");
    let queTag = '<span>' + questions[index].num + ". " + questions[index].question + '</span>';
    queText.innerHTML = queTag;

    //getiing all options    step 6
    let optTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    optionList.innerHTML = optTag;


    //step 7
    const option = document.querySelectorAll(".option_list .option"); // all option list from option list
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionselected(this)");
    }
}


let righticon = "<div class='icon right'><i>&#10004</i></div>"
let wrongicon = "<div class='icon right'><i>&#10006</i></div>"


//step 8
function optionselected(ans) {
    clearInterval(counter);
    let userAnswer = ans.textContent;
    let correctAns = questions[que_count].answer;
    let allOption = optionList.children.length;

    //step 9
    if (userAnswer == correctAns) {
        userScore += 1;
        console.log(userScore);
        ans.classList.add("correct");
        ans.insertAdjacentHTML("beforeend", righticon);
    } else {
        ans.classList.add("wrong");
        ans.insertAdjacentHTML("beforeend", wrongicon);


        // step 10
        // if answer incorect automatically select correct answer
        for (let i = 0; i < allOption; i++) {
            if (optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute("class", "option correct");
                optionList.children[i].insertAdjacentHTML("beforeend", righticon);
            }
        }
    }

    //step 11
    // once option selected other will be disabled
    for (let i = 0; i < allOption; i++) {
        optionList.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";

}

//step 15
function showResultBox() {
    info_box.classList.remove("activeinfo");  // hide the info box
    quiz_box.classList.remove("activequiz");   // hide the quiz box
    resultBox.classList.add("activeresult");  // show result box
    const scoreText = resultBox.querySelector(".score_text");
    if (userScore > 3) {
        let scoreTag = '<span>and Congrats,you got<p>' + userScore + '</p>out of<p>' + questions.length + '</p>marks</span>';
        scoreText.innerHTML = scoreTag;
    }
    if (userScore > 1) {
        let scoreTag = '<span>and Nice you got<p>' + userScore + '</p>out of<p>' + questions.length + '</p>marks</span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span>and sorry,you got only<p>' + userScore + '</p>out of<p>' + questions.length + '</p>marks</span>';
        scoreText.innerHTML = scoreTag;
    }
}


//timer 
//step 12
function setTime(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";

            let correctAns = questions[que_count].answer;
            let allOption = optionList.children.length;

            for (let i = 0; i < allOption; i++) {
                if (optionList.children[i].textContent == correctAns) {
                    optionList.children[i].setAttribute("class", "option correct");
                    optionList.children[i].insertAdjacentHTML("beforeend", righticon);
                }
            }

        
            for (let i = 0; i < allOption; i++) {
                optionList.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
        }
    }
}




//step 13

// getting bottom questions counter

function bottomNum(index) {
    let countNum = "<span><p>" + index + "</p>of<p>" + questions.length + " Questions</span>";
    bottom_que_num.innerHTML = countNum;
}

