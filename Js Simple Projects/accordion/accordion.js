const questions = document.getElementsByClassName("questions");
// const answer = document.querySelector(".container .questions .ans");


for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
       questions[i].classList.toggle("active");
    })
};