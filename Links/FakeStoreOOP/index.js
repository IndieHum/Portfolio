import { GetCookie } from "./utils/cookie.js";
import { FetchData } from "./utils/HttpReq.js";
import ShowThisYear from "./utils/ShowDate.js";
import LessTitle from "./utils/StringFunc.js";

const ProductContainer = document.getElementById("products");
const YearString = document.getElementById("year");
const LoginButton = document.getElementById("login");
const DashboardButton = document.getElementById("dashboard");
const SearchInput = document.getElementById("search").querySelector("input");
const SearchButton = document.getElementById("search").querySelector("button");
const SearchClear = document.getElementById("search").querySelector("span");
const ListItems = document.querySelectorAll("li");

let AllProduct = null;
let Searched = null;
let Category = "all";

function RenderData(products) {
    ProductContainer.innerHTML = "";
    products.forEach((p) => {
        const prodJSX = `
            <div class="card-container">
                <div id="count">
                    <i class="fa-solid fa-user"></i>
                    <span>${p.rating.count}</span>
                </div>
                <div id="rate">
                    <i class="fa-solid fa-star"></i>
                    <span>${p.rating.rate}</span>
                </div>
                <img src="${p.image}" alt="${p.title}" />
                <h3>${LessTitle(p.title)}</h3>
                <div>
                    <button class="button-three">$ ${p.price}</button>
                    <button class="button-two">Buy <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        `;
        ProductContainer.innerHTML += prodJSX;
    });
}

function SearchHandler() {
    Searched = SearchInput.value.toLowerCase().trim();
    if (!Searched) return RenderData(AllProduct);

    FilterProduct();
}

function SearchClearHandler() {
    Searched = null;
    SearchInput.value = "";

    ListItems.forEach((l) => (l.className = ""));
    ListItems[0].className = "selected";

    RenderData(AllProduct);
}

function FilterHandler(event) {
    Category = event.target.innerText.toLowerCase();

    ListItems.forEach((li) => {
        if (li.innerText.toLowerCase() == Category) {
            li.className = "selected";
        } else li.className = "";
    });

    if (!Searched) {
        const ProductFilterd = AllProduct.filter((p) => {
            switch (Category) {
                case "all":
                    return AllProduct;
                default:
                    return p.category == Category;
            }
        });
        console.log(ProductFilterd);
        RenderData(ProductFilterd);
    } else FilterProduct();
}

function FilterProduct() {
    console.log(Searched, Category);
    const ProductFilterd = AllProduct.filter((p) => {
        if (Category == "all") {
            return p.title.toLowerCase().includes(Searched);
        } else
            return (
                p.title.toLowerCase().includes(Searched) &&
                p.category === Category
            );
    });

    console.log(ProductFilterd);

    if (!ProductFilterd.length) return RenderData(AllProduct);

    RenderData(ProductFilterd);
}

const init = async () => {
    const cookie = GetCookie();
    if (cookie) LoginButton.style.display = "none";
    else DashboardButton.style.display = "none";

    AllProduct = await FetchData("products");
    RenderData(AllProduct);
    ShowThisYear(YearString);
};

document.addEventListener("DOMContentLoaded", init);
SearchButton.addEventListener("click", SearchHandler);
SearchClear.addEventListener("click", SearchClearHandler);
ListItems.forEach((i) => i.addEventListener("click", FilterHandler));
