const HighScores = JSON.parse(localStorage.getItem("high-scores")) || [];
const MainPanel = document.querySelector(".container");

function DisplyScores() {
  if (!HighScores.length) {
    MainPanel.innerHTML += `<div class="button-class-two user-ctn">No Record Found, Go And Paly!</div>`;
  } else {
    HighScores.forEach((user, index) => {
      MainPanel.innerHTML += `
            <div class="button-class-two user-ctn">
              <span>${index + 1}</span>
              <p>${user.user_name}</p>
              <span>${user.user_score}</span>
            </div>`;
    });
  }
}

window.addEventListener("load", DisplyScores);
