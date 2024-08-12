import AuthHandler from "./utils/authorization.js";
import { GetData } from "./utils/httpReq.js";

const MainContent = document.getElementById("container");
const LogoutButton = document.querySelector("button");

function RenderUser(users) {
    MainContent.innerHTML = "";

    users.forEach((u) => {
        const userJSX = `
            <div id="card">
                <h3>${u.id}</h3>
                <div>
                    <p><i class="fa-solid fa-user"></i>Name:</p>
                    <span>${u.name.firstname} ${u.name.lastname}</span>
                </div>
                <div>
                    <p><i class="fa-solid fa-paperclip"></i>User Name:</p>
                    <span>${u.username}</span>
                </div>
                <div>
                    <p><i class="fa-solid fa-envelope"></i>Email:</p>
                    <span>${u.email}</span>
                </div>
                <div>
                    <p><i class="fa-solid fa-phone"></i>Phone:</p>
                    <span>${u.phone}</span>
                </div>
                <div>
                    <p><i class="fa-solid fa-location-dot"></i>Address:</p>
                    <span>${u.address.city} - ${u.address.street} - ${u.address.zipcode}</span>
                </div>
            </div>
        `;

        MainContent.innerHTML += userJSX;
    });
}

function LogoutHandler() {
    document.cookie = "token=; max-age=0";
    location.assign("./index.html");
}

async function init() {
    AuthHandler();
    const Users = await GetData("users");
    RenderUser(Users);
}

document.addEventListener("DOMContentLoaded", init);
LogoutButton.addEventListener("click", LogoutHandler);
