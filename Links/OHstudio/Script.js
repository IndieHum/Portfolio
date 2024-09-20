const Home = document.getElementById("home");
const Profile = document.getElementById("profile");
const Contact = document.getElementById("contact");

function Scroll(data) {
    switch (data) {
        case "home":
            Home.scrollIntoView();
            break;
        case "profile":
            Profile.scrollIntoView();
            break;
        case "contact":
            Contact.scrollIntoView();
            break;
    }
}
