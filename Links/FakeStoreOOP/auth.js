import Author from "./utils/Authorization.js";
import { SetCookie } from "./utils/cookie.js";
import { PostData } from "./utils/HttpReq.js";
import ShowThisYear from "./utils/ShowDate.js";
import ValidateForm from "./utils/Validation.js";

const SubButton = document.querySelector("button");
const InputBox = document.querySelectorAll("input");
const YearString = document.getElementById("year");

async function SubmitHandler(event) {
    event.preventDefault();

    const UserName = InputBox[0].value;
    const PassWord = InputBox[1].value;

    const ValidForm = ValidateForm(UserName, PassWord);
    if (!ValidForm) return;

    const response = await PostData("auth/login", {
        username: UserName,
        password: PassWord,
    });
    SetCookie(response.token);
    location.assign("index.html");
}

SubButton.addEventListener("click", SubmitHandler);
document.addEventListener("DOMContentLoaded", Author());
window.addEventListener("load", () => ShowThisYear(YearString));
