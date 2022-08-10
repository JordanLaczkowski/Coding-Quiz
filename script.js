var timeleft = 60;
var startedQuiz = false;
var count = 1;
var initials = "";
var highScores = [];
var stopTime;
element = document.querySelector("#quiz");
element.style.visibility = "hidden";
element = document.querySelector("#save-score");
element.style.visibility = "hidden";
element = document.querySelector("#high-scores");
element.style.visibility = "hidden";

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
  startTimer();
}

function startTimer() {
  timeleft = 10;
  element = document.querySelector("#timer");
  var downloadTimer = setInterval(function () {
    if (timeleft <= 1) {
      clearInterval(downloadTimer);
      outOfTime();
    }
    document.getElementById("timer").innerHTML = timeleft - 1;
    timeleft -= 1;
    console.log(timeleft);
  }, 1000);
}

function isCorrectAnswer(answer) {
  var selectedAnswer = answer.srcElement.innerHTML.toString();
  var actualAnswer = allQuestions[count - 1].correctAnswer.toString();
  count++;
  var index = count - 1;

  if (selectedAnswer == actualAnswer) {
    console.log("Right");
    if (count <= 6) {
      nextQuestion(index);
    }
  } else {
    console.log("Wrong - timer decreases");
    timeleft = timeleft - 5;
    nextQuestion(index);
  }
}

function outOfTime() {
  stopTime = 0;
  console.log("WE ARE OUT OF TIME");
  document.getElementById("final-score").innerHTML =
    "Your final score is: " + 0;
  element = document.querySelector("#quiz");
  element.style.visibility = "hidden";
  element = document.querySelector("#save-score");
  element.style.visibility = "visible";
}

function saveResults() {
  initials = document.getElementById("initials").value;
  highScores.push(initials, stopTime);
  console.log("high scores" + highScores);
  element = document.querySelector("#save-score");
  element.style.visibility = "hidden";
  viewHighScores();
}

function viewHighScores() {
  element = document.querySelector("#high-scores");
  element.style.visibility = "visible";
  //need to iterate through highScores array
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

/*Questions:
1. How to iterate through the highScores array for each highScore to put it in the list
2. How to adjust spacing, right now I am hiding attributes.  Is there a better way? */

/*Needs to show high scores at the end and have button options (Try again/Go back and Clear high scores)*/
