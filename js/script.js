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
        `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
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
    resultsContainer.classList.add("results--visible")
    resultsContainer.innerHTML = `You receive ${numCorrect} out of ${myQuestions.length} points`;
  };

  const myQuestions = [
    {
      question: "What is the capital city of the United States?",
      answers: {
        a: "Los Angeles",
        b: "Washington",
        c: "Paris",
      },
      correctAnswer: "b",
    },
    {
      question: "How many continents are there?",
      answers: {
        a: "2",
        b: "10",
        c: "6",
      },
      correctAnswer: "c",
    },
    {
      question: "Which animal is not a mammal?",
      answers: {
        a: "Dog",
        b: "Dolphin",
        c: "Chicken",
        d: "Deer",
      },
      correctAnswer: "c",
    },
    {
      question: "How many hours does a day have?",
      answers: {
        a: "24",
        b: "20",
        c: "5",
      },
      correctAnswer: "a",
    },
    {
      question: "Which of these is not a country?",
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

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // change button styling

  const showSlide = (n) => {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  };

  const init = () => {
    showSlide(currentSlide);

    const showNextSlide = () => {
      showSlide(currentSlide + 1);
    };

    const showPreviousSlide = () => {
      showSlide(currentSlide - 1);
    };

    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    submitButton.addEventListener("click", showResults);
  };

  init();
}
