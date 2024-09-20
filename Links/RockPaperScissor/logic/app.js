const Buttons = document.querySelectorAll(".button");
const CompetitorImage = document.getElementById("competitor");
const PlayerScorePanel = document.getElementById("player-panel");
const CompetitorScorePanel = document.getElementById("comp-panel");
const MessageContainerPanel = document.querySelector(".message-ctn");
const MessagePanel = document.getElementById("message");
const RestartButton = document.getElementById("re-btn");

let Options = ["rock", "paper", "scissor"];
let PlayerScore = 0;
let CompetitorScore = 0;
let Status = true;
let Level = localStorage.getItem("level") || 3;

function ShowScore() {
    PlayerScorePanel.innerText = PlayerScore;
    CompetitorScorePanel.innerText = CompetitorScore;
}

function ValidateScore() {
    if (PlayerScore == Level || CompetitorScore == Level) {
        Status = false;
        Buttons.forEach((b) => (b.disabled = true));
        if (PlayerScore == Level) {
            ShowMessage("Congrats, You Won!");
        } else {
            ShowMessage("You Loose!");
        }
    }
}

function ShowMessage(mes) {
    MessageContainerPanel.style.display = "block";
    MessagePanel.innerText = `${mes}`;
    RestartButton.addEventListener("click", () => {
        window.location.reload();
    });
}

function CompetitorHandler(event) {
    if (!Status) return;

    const PlayerChoose = event.target.dataset.name;
    const RandomNum = Math.floor(Math.random() * 3);
    const CompetitorChoose = Options[RandomNum];
    let choose = null;
    CompetitorImage.style.visibility = "visible";
    switch (CompetitorChoose) {
        case "rock":
            CompetitorImage.src = "./img/rock.png";
            choose = "rock";
            break;
        case "paper":
            CompetitorImage.src = "./img/paper.png";
            choose = "paper";
            break;
        case "scissor":
            CompetitorImage.src = "./img/scissor.png";
            choose = "scissor";
            break;
    }
    PlayerHandler(choose, PlayerChoose);
}

function PlayerHandler(CompChoose, PlayerChoose) {
    if (PlayerChoose == "rock") {
        if (CompChoose == "paper") {
            CompetitorScore++;
            ShowScore();
        } else if (CompChoose == "scissor") {
            PlayerScore++;
            ShowScore();
        } else {
        }
    } else if (PlayerChoose == "paper") {
        if (CompChoose == "rock") {
            PlayerScore++;
            ShowScore();
        } else if (CompChoose == "scissor") {
            CompetitorScore++;
            ShowScore();
        } else {
        }
    } else {
        // Scissor
        if (CompChoose == "paper") {
            PlayerScore++;
            ShowScore();
        } else if (CompChoose == "rock") {
            CompetitorScore++;
            ShowScore();
        } else {
        }
    }

    ValidateScore();
}

Buttons.forEach((b) => b.addEventListener("click", CompetitorHandler));
