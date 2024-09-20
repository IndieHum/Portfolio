const Options = document.querySelectorAll(".button-class-one");

function LevelHandler(event) {
  const Level = event.target.innerText.toLowerCase();
  localStorage.setItem("level", JSON.stringify(Level));
  window.location.assign("../index.html");
}

Options.forEach((btn) => btn.addEventListener("click", (e) => LevelHandler(e)));
