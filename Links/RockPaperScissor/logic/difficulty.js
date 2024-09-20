const Buttons = document.querySelectorAll(".level-btn");

const ButtonHandler = (event) => {
    const Level = event.target.dataset.id;
    localStorage.setItem("level", Level);
    window.location.assign("index.html");
};

Buttons.forEach((b) => b.addEventListener("click", ButtonHandler));
