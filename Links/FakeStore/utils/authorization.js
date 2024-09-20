import { GetCookie } from "./cookie.js";

function AuthHandler() {
    const cookie = GetCookie();
    const url = location.href;

    if (
        (cookie && url.includes("auth")) ||
        (!cookie && url.includes("dashboard"))
    ) {
        location.assign("index.html");
        return false;
    }
}

export default AuthHandler;
