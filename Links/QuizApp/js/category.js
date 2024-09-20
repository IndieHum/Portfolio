const BASE_URL = "https://opentdb.com/api_category.php";

const BodyContainer = document.querySelector(".grid-container");

let CategoryArr = null;

const FetchData = async () => {
  const Response = await fetch(BASE_URL);
  const Json = await Response.json();
  CategoryArr = Json.trivia_categories;
  Start();
};

function Start() {
  CategoryArr.forEach((value) => {
    const ValueName = value.name;
    const ValueId = value.id;
    BodyContainer.innerHTML += `
          <div class="button-class-one" data-id="${ValueId}">
              ${ValueName}
          </div>
      `;
  });
  function ButtonHandler(event) {
    const DataId = event.target.dataset.id;
    const DataName = event.target.innerText;
    localStorage.setItem("category_id", DataId);
    localStorage.setItem("category_name", DataName);
    window.location.assign("../index.html");
  }
  const Buttons = document.querySelectorAll(".button-class-one");
  Buttons.forEach((b) => b.addEventListener("click", ButtonHandler));
}

window.addEventListener("load", FetchData);
