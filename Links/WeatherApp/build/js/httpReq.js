import { ShowModal } from "./modal.js";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "791cc74debf5e427b88833f3c7733835";

async function FetchData(type, data) {
    let url = null;
    switch (type) {
        case "current":
            if (typeof data == "string") {
                url = `${BASE_URL}weather?q=${data}&appid=${API_KEY}&units=metric`;
            } else {
                url = `${BASE_URL}weather?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
            }
            break;
        case "forecast":
            if (typeof data == "string") {
                url = `${BASE_URL}forecast?q=${data}&appid=${API_KEY}&units=metric`;
            } else {
                url = `${BASE_URL}forecast?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
            }
            break;
    }

    try {
        const Response = await fetch(url);
        const Json = await Response.json();
        if (+Json.cod == "200") {
            return Json;
        } else {
            ShowModal(Json.message);
        }
    } catch (error) {
        ShowModal(error);
    }
}

export { FetchData };
