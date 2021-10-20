{
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  const buildQuiz = () => {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });
    quizContainer.innerHTML = output.join("");
  };

  const showResults = () => {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].classList.add("answer--correct");
      } else {
        answerContainers[questionNumber].classList.add("answer--incorrect");
      }
    });
    resultsContainer.classList.add("results--visible");
    resultsContainer.innerHTML = `You receive ${numCorrect} out of ${myQuestions.length} points <br> Correct answers: 1b; 2c; 3d; 4a; 5d`;
  };

  const myQuestions = [
    {
      question: "1. What is the capital city of the United States?",
      answers: {
        a: "Los Angeles",
        b: "Washington",
        c: "Paris",
      },
      correctAnswer: "b",
    },
    {
      question: "2. How many continents are there?",
      answers: {
        a: "2",
        b: "10",
        c: "6",
      },
      correctAnswer: "c",
    },
    {
      question: "3. Which animal is not a mammal?",
      answers: {
        a: "Dog",
        b: "Dolphin",
        c: "Chicken",
        d: "Deer",
      },
      correctAnswer: "c",
    },
    {
      question: "4. How many hours does a day have?",
      answers: {
        a: "24",
        b: "20",
        c: "5",
      },
      correctAnswer: "a",
    },
    {
      question: "5. Which of these is not a country?",
      answers: {
        a: "France",
        b: "Russia",
        c: "Egypt",
        d: "London",
      },
      correctAnswer: "d",
    },
  ];

  buildQuiz();

  const init = () => {
    submitButton.addEventListener("click", showResults);
  };

  init();
}
