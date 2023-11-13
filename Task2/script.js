const questions = [
  {
    question: "Which vitamins help in the clotting of blood?",
    answers: [
      { text: "vitamin A", correct: false },
      { text: "vitamin B", correct: false },
      { text: "vitamin K", correct: true },
      { text: "vitamin C", correct: false },
    ],
  },
  {
    question: "Which state is the oldest producer of oil?",
    answers: [
      { text: "Assam", correct: true },
      { text: "Uttar Pradesh", correct: false },
      { text: "Tamil Nadu", correct: false },
      { text: "Punjab", correct: false },
    ],
  },
  {
    question: "Who is the author of 'Home and the World'?",
    answers: [
      { text: "Vikram Seth", correct: false },
      { text: "Rabindranath Tagore", correct: true },
      { text: "Aravind Adiga", correct: false },
      { text: "Aravind Adiga", correct: false },
    ],
  },
  {
    question:
      "Which of the following diseases is caused by the deficiency of Vitamin C?",
    answers: [
      { text: "Scurvy", correct: false },
      { text: "Bleeding Gums", correct: false },
      { text: "Bleeding Gums", correct: false },
      { text: "All the above", correct: true },
    ],
  },
  {
    question: " Which of the following is a root vegetable?",
    answers: [
      { text: "Carrot", correct: false },
      { text: "Cassava", correct: false },
      { text: "Onion", correct: false },
      { text: "All the above", correct: true },
    ],
  },
  {
    question:
      ". In which of the following years was India's first national park, the Hailey National Park, established?",
    answers: [
      { text: "1930", correct: false },
      { text: "1933", correct: false },
      { text: "1936", correct: true },
      { text: "1939", correct: false },
    ],
  },
  {
    question:
      "Which of the following Article of the Indian Constitution states -Equality of Opportunity in public employment?",
    answers: [
      { text: " Article 16", correct: true },
      { text: " Article 17", correct: false },
      { text: " Article 18", correct: false },
      { text: " Article 20", correct: false },
    ],
  },
  {
    question: "What is the boiling point of 'Heavy Water'?",
    answers: [
      { text: "101.4 °C", correct: true },
      { text: "102.4 °C", correct: false },
      { text: "103.6 °C", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "In which of the following state of India Valmiki Tiger Reserve is located?",
    answers: [
      { text: "Chattisgarh", correct: false },
      { text: "Jharkhand", correct: false },
      { text: " Bihar", correct: true },
      { text: "Madhya Pradesh", correct: false },
    ],
  },
  {
    question: "Who of the following founded the provincial kingdom of Awadh?",
    answers: [
      { text: "Saadat Khan Burhan ul Mulk", correct: true},
      { text: "Wajid Ali Shah", correct: false },
      { text: " Safdar Jung/ Adbdul Mansur", correct: false },
      { text: "Asaf-ud-daula", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("options");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click",selectAnswer)
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
};
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct"); 
        score++;
    } else {
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore(); 
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
   startQuiz();     
    }
})
startQuiz(); 



