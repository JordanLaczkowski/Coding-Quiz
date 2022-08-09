var secondsLeft = 75;

function setTime() {
  var timeInterval = setInterval();
  // secondsLeft--
  timeInterval.textContent = secondsLeft + " seconds left till quiz is over.";
  if (secondsLeft === 0) {
    clearInterval(timeInterval);
    endQuiz();
  }
}

var allQuestions = [
  {
    showQuestions: "What does API stand for?",
    showAnswers: {
      A: "Auto Programming Interface",
      B: "Application Processing Interface",
      C: "Application Programming Interface",
      D: "Auto Processing Interface",
    },
    correctAnswer: "C",
  },
  {
    showQuestions: "What does DOM stand for?",
    showAnswers: {
      A: "Document Object Model",
      B: "Dominant",
      C: "Days on Market",
      D: "None of the Above",
    },
    correctAnswer: "A",
  },
  {
    showQuestions: "For Strict Equality Comparisons, we should use:",
    showAnswers: {
      A: "=",
      B: "==",
      C: "===",
    },
    correctAnswer: "C",
  },
  {
    showQuestions: "What is a Boolean?",
    showAnswers: {
      A: "A Boolean has many possible answers",
      B: "The value is one that can either be true or false",
      C: "Booleans have no correct answers",
      D: "What is a Boolean???",
    },
    correctAnswer: "B",
  },
  {
    showQuestions: "Functions are Objects in JS.",
    showAnswers: {
      A: "True",
      B: "False",
    },
    correctAnswer: "A",
  },
  {
    showQuestions:
      "Which of the following are used to define a variable in JS?",
    showAnswers: {
      A: "let",
      B: "var",
      C: "Both A and B",
      D: "None of the above",
    },
    correctAnswer: "C",
  },
];

function showQuestions(questions, quizContainer) {
  var output = [];
  var answers;

  function allQuestions() {
    var questions = allQuestions();

    function showResults(questions, quizContainer, resultContainer) {
      var answerContainers = quizContainer.querySelectorAll(".answers");
    }
  }
}

var stats = confirm();
//need to make points for each question??
//need to be able to add initials once timer/game is over
//ask to play again?

var again = confirm("Would you like to play again?");
if (again) {
  game();
}
game();
