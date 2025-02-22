// spellchecker: disable
console.clear();

const makeCurrent = document.querySelectorAll("nav a");
makeCurrent[0].classList.add("current");
if (makeCurrent[1].classList.contains("current")) {
  makeCurrent[1].classList.remove("current");
}

// console.log(makeCurrent[0].classList);
// if (!current.classList.contains('current')){
//   current.classList.add('current')
// }

const colors = [
  "Aqua",
  "Coral",
  "Crimson",
  "Gold",
  "Indigo",
  "Lavender",
  "Olive",
  "Peru",
  "Teal",
  "Tomato",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
