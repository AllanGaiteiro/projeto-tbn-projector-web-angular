const buttonHideCard = document.querySelector(".hide-info");
const verseInfoContent = document.getElementById("verse-info");

function eventHiden(element) {
  console.log("tesddasadsa");
  if (element.style.display === "none") {
    element.style.display = "flex";
  } else {
    element.style.display = "none";
  }
}

buttonHideCard.addEventListener("click", () => eventHiden(verseInfoContent));

// setings
const buttonSettings = document.querySelectorAll(".pop-up-hiden");
const setingsContent = document.getElementById("settings-popup");

buttonSettings.forEach((element) =>
  element.addEventListener("click", () => eventHiden(setingsContent))
);
