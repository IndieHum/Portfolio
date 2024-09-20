const Score = JSON.parse(localStorage.getItem("score"));
const HighScores = JSON.parse(localStorage.getItem("high-scores")) || [];
const UserName = document.getElementById("user-name");
const ScoreSquare = document.getElementById("score");
const ScorePanel = document.getElementsByClassName("score-panel")[0];
const NameContainer = document.querySelector(".name-container");
const SaveButton = document.getElementById("save");

function ScoreValidation() {
    ScoreSquare.innerText = Score;
    switch (Score) {
        case 0:
            ScorePanel.classList.add("incorrect");
            NameContainer.style.display = "none";
            break;
        case 100:
            ScorePanel.classList.add("correct");
            break;
    }
}

function SaveButtonHandler() {
    const UserScore = {
        user_name: UserName.value,
        user_score: Score,
    };
    HighScores.push(UserScore);
    HighScores.sort((a, b) => b.user_score - a.user_score);
    HighScores.splice(10);
    localStorage.setItem("high-scores", JSON.stringify(HighScores));
    window.location.assign("../index.html");
}

window.addEventListener("load", ScoreValidation);
SaveButton.addEventListener("click", SaveButtonHandler);
