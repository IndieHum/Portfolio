import { GetCookie } from "./utils/cookie.js";
import { GetData } from "./utils/httpReq.js";
import StringFormatter from "./utils/Stringfunc.js";

const LoginButton = document.getElementById("login");
const DashboardButton = document.getElementById("dashboard");
const MainContent = document.getElementById("products");
const SearchButton = document.querySelector("button");
const inputBox = document.querySelector("input");
const LiItems = document.querySelectorAll("li");

let AllProducts = null;
let Query = "";
let Category = "all";

function ShowProducts(products) {
    MainContent.innerHTML = "";
    products.forEach((product) => {
        const prodJSX = `
            <div>
                <img alt="${product.title}" src="${product.image}" />
                <h4>${StringFormatter(product.title)}</h4>
                <div id="price">
                    <p>$ ${product.price}</p>
                    <button>
                        Buy
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                <div id="rate">
                    <i class="fa-solid fa-star"></i>
                    <span>${product.rating.rate}</span>
                </div>
                <div id="count">
                    <i class="fa-solid fa-user"></i>
                    <span>${product.rating.count}</span>
                </div>
            </div>
        `;
        MainContent.innerHTML += prodJSX;
    });
}

function FilterProduct() {
    const FilterdProduct = AllProducts.filter((p) => {
        if (Category === "all") {
            return p.title.toLowerCase().includes(Query);
        } else {
            return (
                p.title.toLowerCase().includes(Query) && p.category === Category
            );
        }
    });
    ShowProducts(FilterdProduct);
}

function SearchHandler() {
    Query = inputBox.value.trim().toLowerCase();
    if (!Query) return ShowProducts(AllProducts);
    FilterProduct();
}

function FilterHandler(event) {
    Category = event.target.innerText.toLowerCase();

    LiItems.forEach((li) => {
        if (li.innerText.toLowerCase() === Category) {
            li.className = "selected";
        } else {
            li.className = "";
        }
    });

    FilterProduct();
}

async function init() {
    const cookie = GetCookie();

    if (cookie) LoginButton.style.display = "none";
    else DashboardButton.style.display = "none";

    AllProducts = await GetData("products");
    ShowProducts(AllProducts);
}

document.addEventListener("DOMContentLoaded", init);
SearchButton.addEventListener("click", SearchHandler);
LiItems.forEach((li) => li.addEventListener("click", FilterHandler));
