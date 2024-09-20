const Level = JSON.parse(localStorage.getItem("level")) || "medium";
const CategoryId = JSON.parse(localStorage.getItem("category_id")) || 9;

const TheUrl = `https://opentdb.com/api.php?amount=10&difficulty=${Level}&type=multiple&category=${CategoryId}`;

const Loader = document.getElementById("loader");
const QuestionSection = document.querySelector(".question-section");
const QuestionPanel = document.querySelector(".question");
const Answers = document.querySelectorAll(".answer");
const ScoreNumberPanel = document.getElementById("s-number");
const QuestionNumberPanel = document.getElementById("q-number");
const CategoryPanel = document.getElementById("category");
const NextButton = document.getElementById("next");
const FinishButton = document.getElementById("finish");

let FormattedData = null;
let QIndex = 0;
let CorrectAnswer = null;
let ClickAble = true;
let ScoreNumber = 0;

function FormatData(Data) {
  const OveraAllResult = Data.map((item) => {
    const QuestionObject = { question: item.question };
    const Answers = [...item.incorrect_answers];
    const CorrectAnswerIndex = Math.floor(Math.random() * 4);
    Answers.splice(CorrectAnswerIndex, 0, item.correct_answer);
    QuestionObject.answers = Answers;
    QuestionObject.correct_answer = CorrectAnswerIndex;
    return QuestionObject;
  });
  return OveraAllResult;
}

const FetchData = async () => {
  const Response = await fetch(TheUrl);
  const Json = await Response.json();
  FormattedData = FormatData(Json.results);
  Start();
};

function Start() {
  Loader.style.display = "none";
  QuestionSection.style.display = "flex";
  ShowQuestion();
  ShowCategory();
}

function ShowCategory() {
  const CategoryName =
    localStorage.getItem("category_name") || "General Knowledge";
  CategoryPanel.innerText = CategoryName;
}

function ShowQuestion() {
  const { question, answers, correct_answer } = FormattedData[QIndex];
  CorrectAnswer = correct_answer;
  QuestionPanel.innerText = question;
  Answers.forEach((answer, index) => {
    answer.innerText = answers[index];
  });
}

function ScoreCount() {
  ScoreNumber += 10;
  ScoreNumberPanel.innerText = ScoreNumber;
}

function CheckAnswer(btn, index) {
  if (!ClickAble) return;
  ClickAble = false;

  if (index == CorrectAnswer) {
    btn.classList.add("correct");
    ScoreCount();
  } else {
    btn.classList.add("incorrect");
    Answers[CorrectAnswer].classList.add("correct");
  }
}

function NextQuestionHandler() {
  switch (QIndex) {
    case 9:
      return;
    default:
      if (QIndex == 8) NextButton.style.display = "none";
      QIndex++;
      QuestionNumberPanel.innerText = QIndex + 1;
      ClickAble = true;
      Answers.forEach((btn) => {
        btn.classList.remove("correct");
        btn.classList.remove("incorrect");
      });
      ShowQuestion();
      break;
  }
}

function FinishButtonHandler() {
  SaveScoreToLocalStorage();
  window.location.assign("final.html");
}

function SaveScoreToLocalStorage() {
  localStorage.setItem("score", ScoreNumber);
}

window.addEventListener("load", FetchData);
Answers.forEach((btn, index) =>
  btn.addEventListener("click", () => CheckAnswer(btn, index))
);
NextButton.addEventListener("click", NextQuestionHandler);
FinishButton.addEventListener("click", FinishButtonHandler);
