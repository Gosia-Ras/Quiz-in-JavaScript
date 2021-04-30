{
    const question1True = document.querySelector(".js-answer1");
    const question2True = document.querySelector(".js-answer2");
    const question3True = document.querySelector(".js-answer3");
    const question4True = document.querySelector(".js-answer4");
    const question5True = document.querySelector(".js-answer5");
    const question6True = document.querySelector(".js-answer6");
    const question7True = document.querySelector(".js-answer7");
    const question8True = document.querySelector(".js-answer8");
    const question9True = document.querySelector(".js-answer9");
    const question10True = document.querySelector(".js-answer10");

    const quizAnswer1 = document.querySelector(".js-quiz__answer1--regular");
    const quizAnswer2 = document.querySelector(".js-quiz__answer2--regular");
    const quizAnswer3 = document.querySelector(".js-quiz__answer3--regular");
    const quizAnswer4 = document.querySelector(".js-quiz__answer4--regular");
    const quizAnswer5 = document.querySelector(".js-quiz__answer5--regular");
    const quizAnswer6 = document.querySelector(".js-quiz__answer6--regular");
    const quizAnswer7 = document.querySelector(".js-quiz__answer7--regular");
    const quizAnswer8 = document.querySelector(".js-quiz__answer8--regular");
    const quizAnswer9 = document.querySelector(".js-quiz__answer9--regular");
    const quizAnswer10 = document.querySelector(".js-quiz__answer10--regular");

    const result = document.querySelector(".js-result");


    const onSubmitQuiz = (event) => {
        event.preventDefault();

        const sum = (
            question1True.checked +
            question2True.checked +
            question3True.checked +
            question4True.checked +
            question5True.checked +
            question6True.checked +
            question7True.checked +
            question8True.checked +
            question9True.checked +
            question10True.checked
        );

        quizAnswer1.classList.add("js-quiz__answer--correct");
        quizAnswer2.classList.add("js-quiz__answer--correct");
        quizAnswer3.classList.add("js-quiz__answer--correct");
        quizAnswer4.classList.add("js-quiz__answer--correct");
        quizAnswer5.classList.add("js-quiz__answer--correct");
        quizAnswer6.classList.add("js-quiz__answer--correct");
        quizAnswer7.classList.add("js-quiz__answer--correct");
        quizAnswer8.classList.add("js-quiz__answer--correct");
        quizAnswer9.classList.add("js-quiz__answer--correct");
        quizAnswer10.classList.add("js-quiz__answer--correct");

        
        result.innerText = `Your score is ${sum} / 10 points`;
    }

    const quizReset = () => {

        quizAnswer1.classList.remove("js-quiz__answer--correct");
        quizAnswer2.classList.remove("js-quiz__answer--correct");
        quizAnswer3.classList.remove("js-quiz__answer--correct");
        quizAnswer4.classList.remove("js-quiz__answer--correct");
        quizAnswer5.classList.remove("js-quiz__answer--correct");
        quizAnswer6.classList.remove("js-quiz__answer--correct");
        quizAnswer7.classList.remove("js-quiz__answer--correct");
        quizAnswer8.classList.remove("js-quiz__answer--correct");
        quizAnswer9.classList.remove("js-quiz__answer--correct");
        quizAnswer10.classList.remove("js-quiz__answer--correct");

        result.innerText = `Quiz was reset`;
    }



    const init = () => {
        const quiz = document.querySelector(".js-quiz");
        

        quiz.addEventListener("submit", onSubmitQuiz);
        quiz.addEventListener("reset", quizReset);
    };

    init();

}