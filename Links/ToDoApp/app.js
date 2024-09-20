const ConfirmButton = document.getElementById("Confirm-Button");
const TextInput = document.getElementById("Text-Input");
const DateInput = document.getElementById("Date-Input");
const MessageAlert = document.getElementById("Message-Section");
const TableBody = document.querySelector("tbody");
const DeleteAllButton = document.getElementById("Delete-All-Button");
const FilterButtons = document.querySelectorAll(".Filter-Button");
const EditButton = document.getElementById("Edit-Button");
const LanguageToggle = document.getElementById("language-select");

let TaskToDoArray = JSON.parse(localStorage.getItem("MyTask")) || [];

// Real example of 'DRY' in programming is here.
const RunTheProgram = (TheMessage, TypeOfMessage) => {
    SaveToLocalStorage();
    DisplayToDos();
    ShowMessage(TheMessage, TypeOfMessage);
};

function SaveToLocalStorage() {
    localStorage.setItem("MyTask", JSON.stringify(TaskToDoArray));
}

function DisplayToDos(data) {
    let DisplayTaskToDoArray = data || TaskToDoArray;
    TableBody.innerHTML = "";
    if (!DisplayTaskToDoArray.length) {
        TableBody.innerHTML = "<tr><td colspan='4'>No Task Found!</td></tr>";
        return;
    } else {
        DisplayTaskToDoArray.forEach((ToDo) => {
            TableBody.innerHTML += `
      <tr>
        <td>${ToDo.name}</td>
        <td>${ToDo.date || "No Date"}</td>
        <td>${ToDo.completed ? "Completed" : "Pending"}</td>
        <td>
          <button onclick="EditButtonHandler('${ToDo.id}')">Edit</button>
          <button onclick="StatusButtonHandler('${ToDo.id}')">
          ${ToDo.completed ? "UnDo" : "Do"}
          </button>
          <button onclick="DeleteButtonHandler('${ToDo.id}')">Delete</button>
        </td>
      </tr>`;
        });
    }
}

function ShowMessage(message, type) {
    MessageAlert.innerHTML = "";
    const Alert = document.createElement("p");
    Alert.innerText = message;
    Alert.classList.add(`Alert-${type}`);
    // for naming class: type must be "Ok" or "NotOk",
    // both of them are have capital O.
    MessageAlert.append(Alert);
    setTimeout(() => {
        Alert.style.display = "none";
    }, 2000);
}

function DeleteAllHandler() {
    if (!TaskToDoArray.length) {
        ShowMessage("There is no task!", "NotOk");
    } else {
        TaskToDoArray = [];
        RunTheProgram("All Tasks Deleted!", "Ok");
    }
}

function DeleteButtonHandler(id) {
    const NewTaskToDoArray = TaskToDoArray.filter((ToDo) => ToDo.id !== id);
    TaskToDoArray = NewTaskToDoArray;
    RunTheProgram("Task Deleted!", "Ok");
}

function StatusButtonHandler(id) {
    const NewToDo = TaskToDoArray.find((ToDo) => ToDo.id === id);
    NewToDo.completed = !NewToDo.completed;
    RunTheProgram("Task Changed!", "Ok");
}

function FilterButtonHandler(event) {
    let FilterdTaskToDoArray = null;
    const ButtonDataName = event.target.dataset.filter;
    switch (ButtonDataName) {
        case "completed":
            FilterdTaskToDoArray = TaskToDoArray.filter(
                (ToDo) => ToDo.completed === true
            );
            break;
        case "pending":
            FilterdTaskToDoArray = TaskToDoArray.filter(
                (ToDo) => ToDo.completed === false
            );
            break;
        default:
            FilterdTaskToDoArray = TaskToDoArray;
            break;
    }
    DisplayToDos(FilterdTaskToDoArray);
}

// Proxy variable for two func of Edit section.
let IdTemporary = [];

function EditButtonHandler(id) {
    const ToDo = TaskToDoArray.find((ToDo) => ToDo.id === id);
    TextInput.value = ToDo.name;
    DateInput.value = ToDo.date;
    ConfirmButton.style.display = "none";
    EditButton.style.display = "inline-block";
    IdTemporary.push(ToDo);
}

function ApplyEditButtonHandler() {
    const ToDo = IdTemporary[0];
    ToDo.name = TextInput.value;
    ToDo.date = DateInput.value;
    TextInput.value = "";
    DateInput.value = "";
    ConfirmButton.style.display = "inline-block";
    EditButton.style.display = "none";
    RunTheProgram("Your Task Changed!", "Ok");
}

function GenerateId() {
    return Math.trunc(
        Math.random() * Math.random() * Math.pow(10, 15)
    ).toString();
}

function AddTaskHandler() {
    TaskNameValue = TextInput.value;
    TaskDateValue = DateInput.value;
    TaskToDo = {
        id: GenerateId(),
        name: TaskNameValue,
        date: TaskDateValue,
        completed: false,
    };
    if (TaskNameValue) {
        TaskToDoArray.push(TaskToDo);
        RunTheProgram("Task Added Succusfully", "Ok");
        TextInput.value = "";
        DateInput.value = "";
    } else {
        ShowMessage("Enter name for task", "NotOk");
    }
}

ConfirmButton.addEventListener("click", AddTaskHandler);
DeleteAllButton.addEventListener("click", DeleteAllHandler);
EditButton.addEventListener("click", ApplyEditButtonHandler);
window.addEventListener("load", () => DisplayToDos());

// Adding three event listener to  three obj in One line.
FilterButtons.forEach((FilterButton) =>
    FilterButton.addEventListener("click", FilterButtonHandler)
);

// Language Changeing
function PageChange(event) {
    const SelectedLanguage = event.target.value;
    switch (SelectedLanguage) {
        case "persian":
            window.location.assign("index-fa.html");
            break;
        case "english":
            window.location.assign("index.html");
            break;
        default:
            return;
    }
}

LanguageToggle.addEventListener("change", PageChange);
