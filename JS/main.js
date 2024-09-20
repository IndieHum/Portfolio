import { FetchSamples } from "./httpReq.js";
import { RenderData } from "./Render.js";

const DatePanel = document.getElementById("date");
const Container = document.querySelector(".link-contain");
const today = Date.now();

const todayFa = {
    day: getDateFormat(today, { day: "2-digit" }),
    month: getDateFormat(today, { month: "numeric" }),
    monthTitle: getDateFormat(today, { month: "long" }),
    year: getDateFormat(today, { year: "numeric" }),
    dayWeek: getDateFormat(today, { weekday: "long" }),
};

function getDateFormat(uDate, option) {
    let date = new Intl.DateTimeFormat("fa-IR", option).format(uDate);
    return date;
}

//adding date to span element in footer
document.addEventListener("DOMContentLoaded", () => {
    const { year, monthTitle, dayWeek, day } = todayFa;
    DatePanel.innerText = `${dayWeek} ${day} ${monthTitle} ${year}`;
});

//fetching my samples
async function FetchData() {
    const Data = await FetchSamples();
    console.log(Data);
    RenderData(Data, Container);
}

document.addEventListener("DOMContentLoaded", FetchData);
