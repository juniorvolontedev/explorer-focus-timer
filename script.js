let play = document.querySelector(".play");
let pause = document.querySelector(".pause");

play.addEventListener("click", () => {
  play.classList.add("hide");
  pause.classList.remove("hide");
});

pause.addEventListener("click", () => {
  play.classList.remove("hide");
  pause.classList.add("hide");
});
