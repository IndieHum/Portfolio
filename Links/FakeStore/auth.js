import { PostData } from "./utils/httpReq.js";
import { SetCookie } from "./utils/cookie.js";
import AuthHandler from "./utils/authorization.js";
import ValidateForm from "./utils/validation.js";

const InputsBox = document.querySelectorAll("input");
const LoginButton = document.querySelector("button");

async function SubmitHandler(event) {
    event.preventDefault();

    const username = InputsBox[0].value;
    const password = InputsBox[1].value;

    const Validation = ValidateForm(username, password);
    if (!Validation) return;

    const response = await PostData("auth/login", {
        username,
        password,
    });
    SetCookie(response.token);
    location.assign("index.html");
}

LoginButton.addEventListener("click", SubmitHandler);
document.addEventListener("DOMContentLoaded", AuthHandler);
