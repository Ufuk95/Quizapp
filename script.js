let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question:
      "Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?",
    answer_1: "Stratosphäre",
    answer_2: "Mesosphäre",
    answer_3: "Troposphäre",
    answer_4: "Thermosphäre",
    right_answer: 3,
  },
  {
    question: "In welchem Jahr wurde Michael Jackson geboren?",
    answer_1: "1958",
    answer_2: "1959",
    answer_3: "1965",
    answer_4: "1934",
    right_answer: 1,
  },
  {
    question: "In welcher Stadt lebte der Detektiv Sherlock Holmes?",
    answer_1: "Düsseldorf",
    answer_2: "Manchester",
    answer_3: "New York",
    answer_4: "London",
    right_answer: 4,
  },
  {
    question: "Wie viele Tasten hat ein Klavier?",
    answer_1: "80",
    answer_2: "88",
    answer_3: "74",
    answer_4: "90",
    right_answer: 2,
  },
  {
    question: "Welche Insel gehört nicht zu den Balearischen Inseln?",
    answer_1: "Ibiza",
    answer_2: "Gran Canaria",
    answer_3: "Formentera",
    answer_4: "Cabrera",
    right_answer: 2,
  },
  {
    question:
      "Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt?",
    answer_1: "Vögel",
    answer_2: "Affen",
    answer_3: "Eidechsen",
    answer_4: "Alligatoren",
    right_answer: 1,
  },
  {
    question: "Wie lang ist die Strecke eines Marathons?",
    answer_1: "10km",
    answer_2: "12,195km",
    answer_3: "42,195km",
    answer_4: "45,195km",
    right_answer: 3,
  },
  {
    question: "Wie hoch ist der Eiffelturm?",
    answer_1: "150m",
    answer_2: "176m",
    answer_3: "220m",
    answer_4: "300m",
    right_answer: 4,
  },
  {
    question: "Wer komponierte „Die Zauberflöte“?",
    answer_1: "Joseph Haydn",
    answer_2: "Albert Einstein",
    answer_3: "Johann Sebastian Bach",
    answer_4: "Wolfgang Amadeus Mozart",
    right_answer: 4,
  },
];
let currentQuestion = 0;

function init() {
  document.getElementById("question-numbers").innerHTML = questions.length;

  showQuestion();
  showAnswer();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none'
  } else {
    let question = questions[currentQuestion];
    document.getElementById("numberOfQuestions").innerHTML = currentQuestion + 1;
    document.getElementById("theQuestion").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectetQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectetQuestionNumber == question["right_answer"]) {
    console.log("Richtige Antwort");
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    console.log("Falsche Antwort habibi");
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++; // von 0 auf 1;
  document.getElementById("next-button").disabled = true;
  resetButtons();
  showQuestion();
}

function resetButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}
