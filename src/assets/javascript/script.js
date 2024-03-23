document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("start-quiz-btn")
    .addEventListener("click", startQuiz);
  document
    .getElementById("submit-answer")
    .addEventListener("click", validateTypedAnswer);
});

let timer;
let timeRemaining = 60;
let currentQuestionIndex = 0;
const questions = [
  {
    question:
      "Which variable declaration allows reassignment and block-level scope? <br>a. let <br>b. const <br>c. var",
    answer: "a",
  },
  {
    question:
      "Which of the following is NOT a primitive data type? <br>a. string<br>b. fraction<br>c. boolean",
    answer: "b",
  },
  {
    question: "Strings are only true or false? <br>a. true <br>b. false",
    answer: "b",
  },
  {
    question:
      "What is a function? <br>a. a reusable block of code <br>b. a loop <br>c. a data type",
    answer: "a",
  },
];

function startQuiz() {
  document.getElementById("start-quiz-btn").style.display = "none";
  displayQuestion();
  timer = setInterval(() => {
    timeRemaining--;
    document.getElementById("timer-display").textContent = timeRemaining;
    if (timeRemaining <= 0) {
      endQuiz();
    }
  }, 1000);
}

function displayQuestion() {
  const question = questions[currentQuestionIndex].question;
  document.querySelector("#question-container").innerHTML = question;
  document.getElementById("answer-input-container").style.display = "block";
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById('timer').style.display = 'none';
    document.getElementById('start-quiz-btn').style.display = 'none';
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('answer-input-container').style.display = 'none';
    document.getElementById('final-score').textContent = timeRemaining;
    document.getElementById('final-score-container').style.display = 'block';
}

function validateTypedAnswer() {
  const userAnswer = document
    .getElementById("answer-input")
    .value.toLowerCase()
    .trim();
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (userAnswer === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Incorrect. The correct answer was " + correctAnswer);
    timeRemaining -= 10;
  }
  document.getElementById("answer-input").value = "";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}



