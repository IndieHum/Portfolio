const MeTag = document.getElementById("me");
const MeInfoCard = document.querySelector(".info-card");

MeTag.addEventListener("mouseenter", function () {
  MeInfoCard.style.display = "block";
  MeInfoCard.classList.toggle("fade");
});
MeTag.addEventListener("mouseleave", function () {
  MeInfoCard.classList.toggle("fade");
});
