const hamBurgerBtn = document.querySelector("#btn-ham-burger");
const hamBurgerDiv = document.querySelector(".hamBurger-div");
const closeSideBar = document.querySelector(".close-sideBar-btn");

hamBurgerBtn.addEventListener("click", () => {
  hamBurgerDiv.style.display = "flex";
});
closeSideBar.addEventListener("click", () => {
  hamBurgerDiv.style.display = "none";
});
