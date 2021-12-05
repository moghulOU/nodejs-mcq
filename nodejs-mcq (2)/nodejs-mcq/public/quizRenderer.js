var startBtn = document.querySelector(".start-btn"),
  nextBtn = document.querySelector(".next-btn"),
  questionElement = document.querySelector(".question"),
  answersContainer = document.querySelector(".q-container"),
  quizTitleElement = document.querySelector(".quiz-title"),
  correctCount = document.querySelector(".correct-count");
  yourScore = document.querySelector(".your-score")
let currentQuestion = 0;
let correct = 0;

window.addEventListener("load", () => {
  quizTitleElement.innerHTML = quizData.title;
});

startBtn.addEventListener("click", () => {
  startQuiz();
  if(startBtn.textContent == "Restart"){
    correct = 0;
    currentQuestion = 0
  }
});

nextBtn.addEventListener("click", () => {
  if(nextBtn.textContent == "Next"){
  loadQuestion(currentQuestion);
  }
  else if(nextBtn.textContent == "check score"){
    correctCount.classList.remove('hide')
    correctCount.innerHTML = `Your score: ${correct}/${questions.length}`;
  }
});

function startQuiz() {
  startBtn.classList.add("hide");
  // scoreBtn.classList.add("hide");
  nextBtn.classList.remove("hide");
  questionElement.classList.remove("hide");
  answersContainer.classList.remove("hide");
  correctCount.classList.remove("hide");
  loadQuestion(currentQuestion);
}

function loadQuestion(questionNum) {
  if (currentQuestion === questions.length) {
    startBtn.classList.remove("hide");
    // nextBtn.classList.add("hide")
    nextBtn.innerHTML = "check score";
    questionElement.classList.add("hide");
    answersContainer.classList.add("hide");
    startBtn.innerHTML = "Restart";
    correctCount.classList.add("hide")
    // correctCount.innerHTML = `Correct: ${correct}/${questions.length}`;
    // correct = 0;
    // currentQuestion = 0;
  } else {
    while (answersContainer.firstChild) {
      answersContainer.removeChild(answersContainer.firstChild);
    }
    answersContainer.dataset.type = null;
    questionElement.innerHTML = questions[questionNum].text;

    // Question types

    if (questions[questionNum].type === "mc") {
      var btnGrid = document.createElement("div");
      answersContainer.appendChild(btnGrid);
      questions[questionNum].answers.forEach((answer) => {
        var answerElement = document.createElement("button");
        btnGrid.classList.add("btn-grid");
        answerElement.innerHTML = answer.text;
        btnGrid.appendChild(answerElement);

       
      });
      var inputElement = document.createElement("input");
      var checkBtn = document.createElement("button");
      checkBtn.innerHTML = "Check";
      checkBtn.classList.add("check-btn");
      inputElement.type = "text";
      checkBtn.addEventListener("click", (e) => {
        checkAnswer();
      });
      answersContainer.appendChild(inputElement);
      answersContainer.appendChild(checkBtn);
      answersContainer.dataset.type = "txt";
      answersContainer.dataset.type = "mc";

      
    } 
    correctCount.innerHTML = `Correct: ${correct}`;
    // correctCount.innerHTML = `Your total score is ${correct} out of ${questions.length}`;
  }
}

function checkAnswer() {
  // Check different types

  if (answersContainer.dataset.type = "mc") {
    
      var qInputElement = answersContainer.children[1];
      console.log(qInputElement)
      var foundValues = questions[currentQuestion].correctanswer.find(
        (answer) => answer.toUpperCase() === qInputElement.value.toUpperCase()
      );
      if (foundValues) {
        qInputElement.classList.add("correct");
        correct++;
      } else {
        qInputElement.classList.add("wrong");
      }
      currentQuestion++;
      
  }

  
    
  
  //End different types
}
