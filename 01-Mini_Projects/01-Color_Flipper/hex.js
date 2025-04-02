const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const makeCurrent = document.querySelectorAll("nav a");
makeCurrent[1].classList.add("current");
if (makeCurrent[0].classList.contains("current")) {
  makeCurrent[0].classList.remove("current");
}

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
