const SetCookie = (data) => {
    document.cookie = `token=${data} max-age=${24 * 60 * 60} path=/`;
};

const GetCookie = () => {
    const cookie = document.cookie;
    if (cookie) {
        const cookieArray = cookie.split("=");
        return {
            [cookieArray[0]]: cookieArray[1],
        };
    } else return false;
};

export { SetCookie, GetCookie };
