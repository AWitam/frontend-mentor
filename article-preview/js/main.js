/* Selectors */

const shareBox = document.querySelector(".share__box");
const shareIcon = document.querySelector(".icon__share");
const boxShareIcon = document.querySelector(".share__box .icon__share");

/*Event Listeners */

shareIcon.addEventListener("click", (e) => {
  if (shareBox.classList.contains("active")) {
    shareBox.classList.remove("active");
  } else {
    shareBox.classList.add("active");
  }
});

boxShareIcon.addEventListener("click", () => {
  shareIcon.click();
});
