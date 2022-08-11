var timeLeft = 60;
var count;
var initials = "";
var highScores = [];
var stopTime;
var rightAnswer = "Correct";
var wrongAnswer = "Incorrect";
var timer;
quizEl = document.querySelector("#quiz");
quizEl.style.visibility = "hidden";
saveScoreEl = document.querySelector("#save-score");
saveScoreEl.style.visibility = "hidden";
highScoresEl = document.querySelector("#high-scores");
highScoresEl.style.visibility = "hidden";
var feedbackEl = document.querySelector("#feedback");
feedbackEl.style.visibility = "hidden";
var welcomeEl = document.querySelector("#welcome-page");
welcomeEl.style.visibility = "visible";
var topScoresEl = document.querySelector("#top-scores");
var initialEl = document.querySelector("#initials");

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

function startTimer() {
  timer = setInterval(function () {
    if (timeLeft <= 1) {
      clearInterval(timer);
      outOfTime();
    }
    document.getElementById("timer").innerHTML = timeLeft - 1;
    timeLeft -= 1;
    // console.log(timeLeft);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function clearStart() {
  count = 1;
  highScoresEl.style.visibility = "hidden";
  topScoresEl.innerHTML = "";
}

function startQuiz() {
  clearStart();
  count = 1;
  startTimer();
  welcomeEl.style.visibility = "hidden";
  var currentQuestion;
  // console.log(allQuestions);
  currentQuestion = allQuestions[0].showQuestions;
  document.getElementById("current-question").innerHTML =
    count + ". " + currentQuestion;
  document.getElementById("option-a").innerHTML = allQuestions[0].showAnswers.A;
  document.getElementById("option-b").innerHTML = allQuestions[0].showAnswers.B;
  document.getElementById("option-c").innerHTML = allQuestions[0].showAnswers.C;
  document.getElementById("option-d").innerHTML = allQuestions[0].showAnswers.D;
  timeLeft = 60;
  quizEl.style.visibility = "visible";
}

function isCorrectAnswer(answer) {
  var selectedAnswer = answer.srcElement.innerHTML.toString();
  var actualAnswer = allQuestions[count - 1].correctAnswer.toString();
  count++;
  var index = count - 1;

  if (selectedAnswer == actualAnswer) {
    feedbackEl.style.visibility = "hidden";
    // console.log("Right");
    if (count <= 6) {
      document.getElementById("feedback").innerHTML = rightAnswer;
      feedbackEl.style.visibility = "visible";
      nextQuestion(index);
    } else {
      endQuiz();
    }
  } else {
    if (count <= 6) {
      // console.log("Wrong - timer decreases");
      timeLeft = timeLeft - 15;
      document.getElementById("feedback").innerHTML = wrongAnswer;
      feedbackEl.style.visibility = "visible";
      nextQuestion(index);
    } else {
      endQuiz();
    }
  }
}
//add an alert or something to show that you answered correctly or incorrectly

function endQuiz() {
  stopTime = timeLeft;
  quizEl.style.visibility = "hidden";
  feedbackEl.style.visibility = "hidden";
  stopTimer();
  // console.log(timeLeft);
  document.getElementById("final-score").innerHTML =
    "Your final score is: " + stopTime;
  saveScoreEl.style.visibility = "visible";
  //stop the time
  // saveResults
}

function outOfTime() {
  feedbackEl.style.visibility = "hidden";
  stopTime = 0;
  // console.log("WE ARE OUT OF TIME");
  document.getElementById("final-score").innerHTML =
    "Your final score is: " + stopTime;
  quizEl.style.visibility = "hidden";
  saveScoreEl.style.visibility = "visible";
}
//add something here to stop time when quiz is completed

function saveResults() {
  initials = document.getElementById("initials").value;
  var score = initials + " " + stopTime;
  highScores.push(score);
  // console.log("high scores" + highScores);
  saveScoreEl.style.visibility = "hidden";
  viewHighScores();
}

function viewHighScores() {
  highScoresEl.style.visibility = "visible";
  for (var i = 0; i < highScores.length; i++) {
    var indexPoint = highScores[i];
    var newLi = document.createElement("li");
    newLi.textContent = indexPoint;
    topScoresEl.appendChild(newLi);
  }
}

function homeClicked() {
  highScoresEl.style.visibility = "hidden";
  welcomeEl.style.visibility = "visible";
}

function nextQuestion(index) {
  quizEl.style.visibility = "hidden";
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
  quizEl.style.visibility = "visible";
}

/*Questions:
1. How to iterate through the highScores array for each highScore to put it in the list
2. How to adjust spacing, right now I am hiding attributes.  Is there a better way? -- display none */

//

/*Needs to show high scores at the end and have button options (Try again/Go back and Clear high scores)
Show if you got the answer correct or incorrect when you choose your answer
NEED TO ADD - after answering last question, the quiz and timer does not stop*/
