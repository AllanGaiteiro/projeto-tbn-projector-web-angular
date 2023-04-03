const buttonHideCard = document.querySelector(".hide-info");
const verseInfoContent = document.getElementById("verse-info");

buttonHideCard.addEventListener("click", () => {
  if (verseInfoContent.style.display === "none") {
    verseInfoContent.style.display = "flex";
  } else {
    verseInfoContent.style.display = "none";
  }
});
