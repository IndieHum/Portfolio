function SetCookie(data) {
    document.cookie = `token=${data} max-age=${24 * 60 * 60} path=/`;
}

function GetCookie() {
    const cookie = document.cookie;
    if (cookie) {
        const SplitCookie = cookie.split("=")[1].split(" ")[0];
        return SplitCookie;
    }
}

function DeleteCookie() {
    document.cookie = "token=; max-age=0";
    location.assign("index.html");
}

export { SetCookie, GetCookie, DeleteCookie };
