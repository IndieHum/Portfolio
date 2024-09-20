import Author from "./utils/Authorization.js";
import { FetchData } from "./utils/HttpReq.js";
import { DeleteCookie } from "./utils/cookie.js";
import ShowThisYear from "./utils/ShowDate.js";

const LogOutButton = document.querySelector("button");
const UserContainer = document.getElementById("user-container");
const YearString = document.getElementById("year");

let AllUsers = null;
let AllUsersHistory = null;

function RenderData(users) {
    users.forEach((u) => {
        const userJSX = `
            <section class="user-panel">
                <span>${u.id}</span>
                <section class="user-upper-section">
                    <mark>Full-Name:</mark>
                    <h3>${u.name.firstname}</h3>
                    <h3>${u.name.lastname}</h3>
                </section>
                <section class="user-lower-section">
                    <mark>User Specification:</mark>
                    <p><strong>ZipCode:</strong> ${u.address.zipcode}</p>
                    <p><strong>Email:</strong> ${u.email}</p>
                    <p><strong>Phone-Number:</strong> ${u.phone}</p>
                    <p><strong>Address:</strong> ${u.address.city} - ${u.address.street} - ${u.address.number}</p>
                </section>
            </section>
        `;
        UserContainer.innerHTML += userJSX;
    });
}

const init = async () => {
    Author();
    AllUsers = await FetchData("users");
    AllUsersHistory = await FetchData("carts");
    RenderData(AllUsers, "user");
    ShowThisYear(YearString);
};

document.addEventListener("DOMContentLoaded", init);
LogOutButton.addEventListener("click", DeleteCookie);
