import { GetCookie } from "./cookie.js";

function Author() {
    const cookie = GetCookie();
    const url = document.URL;

    if (
        (!cookie && url.includes("dashboard")) ||
        (cookie && url.includes("auth"))
    ) {
        location.assign("index.html");
    }
}

export default Author;
