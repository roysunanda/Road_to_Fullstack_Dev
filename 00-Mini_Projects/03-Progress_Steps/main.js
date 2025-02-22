console.clear();

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

circles[0].classList.add("text-effect");
let currentActive = 1;
// console.log(circles[0]);

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
  // console.log(currentActive);
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
  // console.log(currentActive);
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      // console.log(`idx : ${idx}, currentActive: ${currentActive}`);
      circle.classList.add("active", "text-effect");
    } else {
      circle.classList.remove("active", "text-effect");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
