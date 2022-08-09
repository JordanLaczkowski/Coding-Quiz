// var timeLeft = 5;
// var element = document.getElementsByClassName("timer");

// var timeEl;

// var timerId = setInterval(countdown, 1000);
// function countdown() {
//   if (timeLeft === 0) {
//     confirm("Times Up!");
//     return;
//   } else {
//     element.innerHtml = timeLeft + " seconds remaining.";
//     timeLeft--;
//   }
//   console.log(timeLeft);
// }

var secondsLeft = 75;
//var timeInterval = setInterval();
var startedQuiz = false;
var count = 1;

function setTime() {
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
    correctAnswer: "Application Programming Interface",
  },
  {
    showQuestions: "What does DOM stand for?",
    showAnswers: {
      A: "Document Object Model",
      B: "Dominant",
      C: "Days on Market",
      D: "None of the Above",
    },
    correctAnswer: "Document Object Model",
  },
  {
    showQuestions: "For Strict Equality Comparisons, we should use:",
    showAnswers: {
      A: "=",
      B: "==",
      C: "===",
      D: "equallllsss",
    },
    correctAnswer: "===",
  },
  {
    showQuestions: "What is a Boolean?",
    showAnswers: {
      A: "A Boolean has many possible answers",
      B: "The value is one that can either be true or false",
      C: "Booleans have no correct answers",
      D: "What is a Boolean???",
    },
    correctAnswer: "The value is one that can either be true or false",
  },
  {
    showQuestions: "Functions are Objects in JS.",
    showAnswers: {
      A: "True",
      B: "False",
      C: "Neither",
      D: "I don't know",
    },
    correctAnswer: "True",
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
    correctAnswer: "Both A and B",
  },
];

function startQuiz() {
  element = document.querySelector("#welcome-page");
  element.style.visibility = "hidden";
  var currentQuestion;
  console.log(allQuestions);
  currentQuestion = allQuestions[0].showQuestions;
  document.getElementById("current-question").innerHTML =
    count + ". " + currentQuestion;
  document.getElementById("option-a").innerHTML = allQuestions[0].showAnswers.A;
  document.getElementById("option-b").innerHTML = allQuestions[0].showAnswers.B;
  document.getElementById("option-c").innerHTML = allQuestions[0].showAnswers.C;
  document.getElementById("option-d").innerHTML = allQuestions[0].showAnswers.D;
  element = document.querySelector("#quiz");
  element.style.visibility = "visible";
}

function isCorrectAnswer(answer) {
  var selectedAnswer = answer.srcElement.innerHTML.toString();
  var actualAnswer = allQuestions[count - 1].correctAnswer.toString();

  if (selectedAnswer == actualAnswer) {
    console.log("Right");
    count++;
    if (count <= 6) {
      index = count - 1;
      nextQuestion(index);
    }
  } else {
    console.log("Wrong - timer decreases");
    //decreaseTimer
  }
}

function nextQuestion(index) {
  element = document.querySelector("#quiz");
  element.style.visibility = "hidden";
  currentQuestion = allQuestions[index].showQuestions;
  document.getElementById("current-question").innerHTML =
    count + ". " + currentQuestion;
  document.getElementById("option-a").innerHTML =
    allQuestions[index].showAnswers.A;
  document.getElementById("option-b").innerHTML =
    allQuestions[index].showAnswers.B;
  document.getElementById("option-c").innerHTML =
    allQuestions[index].showAnswers.C;
  document.getElementById("option-d").innerHTML =
    allQuestions[index].showAnswers.D;
  element = document.querySelector("#quiz");
  element.style.visibility = "visible";
}

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

// var stats = confirm();
// //need to make points for each question??
// //need to be able to add initials once timer/game is over
// //ask to play again?

// var again = confirm("Would you like to play again?");
// if (again) {
//   game();
// }
// game();

// start.addEventListener("click", startButton);

//need to make a listenClick button for which is clicked and if it is wrong or right

//If clock reaches 0, then score would be 0. If there is time left by the end of the quiz, then the remaining time would be the score
