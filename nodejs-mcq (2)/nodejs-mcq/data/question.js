const quizData = {
  title: "Trivia game",
};

const questions = [
  {
    text: "What is the capital of the United States?",
    type: "mc",
    answers: [
      { text: "New York City", correct: false },
      { text: "Philadelphia", correct: false },
      { text: "Washington D.C.", correct: true },
      { text: "Chicago", correct: false },
    ],
    correctanswer: ["Washington D.C."],
  },
  {
    text: "What is the largest state in the US?",
    type: "mc",
    answers: [
      { text: "California", correct: false },
      { text: "Alaska", correct: true },
      { text: "Texas", correct: false },
      { text: "Nevada", correct: false },
    ],
    correctanswer: ["Alaska"],
  },
  {
    text: " What other country, besides the US, uses the US dollar as its official currency?",
    type: "mc",
    answers: [
      { text: "Ecuador", correct: true },
      { text: "Canada", correct: false },
      { text: "Mexico", correct: false },
      { text: "United Kingdom", correct: false },
    ],
    correctanswer: ["Ecuador"],
  },

  {
    text: " In which continent are Chile, Argentina and Brazil?",
    type: "mc",
    answers: [
      { text: "North America", correct: false },
      { text: "South America", correct: true },
      { text: "Europe", correct: false },
      { text: "Australasia", correct: false },
    ],
    correctanswer: ["South America"],
  },
  {
    text: "Where was the first capital of the US?",
    type: "mc",
    answers: [
      { text: "Philadelphia", correct: true },
      { text: "South America", correct: false },
      { text: "Europe", correct: false },
      { text: "Australasia", correct: false },
    ],
    correctanswer: ["Philadelphia"],
  },
];

module.exports = { quizData, questions };
