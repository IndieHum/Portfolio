const MeTag = document.getElementById("me");
const MeInfoCard = document.querySelector(".info-card");
const GitRepo = document.getElementById("git-repo");
const GitCard = document.querySelector(".git-card");

/* MeTag.addEventListener("mouseenter", function () {
  MeInfoCard.style.display = "block";
  MeInfoCard.classList.toggle("fade");
});
MeTag.addEventListener("mouseleave", function () {
  MeInfoCard.classList.toggle("fade");
  setTimeout(() => {
    MeInfoCard.style.display = "none";
  }, 300);
}); */

GitRepo.addEventListener("mouseenter", function () {
  GitCard.style.display = "block";
  GitCard.classList.toggle("fade");
});
GitRepo.addEventListener("mouseleave", function () {
  GitCard.classList.toggle("fade");
  setTimeout(() => {
    GitCard.style.display = "none";
  }, 300);
});

MeTag.addEventListener("pointerenter", function () {
  MeInfoCard.style.display = "block";
  MeInfoCard.classList.toggle("fade");
});
/* MeTag.addEventListener("pointerleave", function () {
  MeInfoCard.classList.toggle("fade");
  setTimeout(() => {
    MeInfoCard.style.display = "none";
  }, 300);
}); */
