const progress = document.querySelector(".progress__bar");
const run = document.querySelector("#run");
const runCount = document.querySelector(".queue-value");

let queueCount = 0;
let isAnimationOver = true;
let animateTime = 0;
let isAnimationPaused = false;

const animate = () => {
  isAnimationOver = false;
  if (queueCount == 0) {
    isAnimationOver = true;
    return;
  }
  progress.classList.add("animate");
};
const handleClick = () => {
  if (isAnimationPaused) {
    progress.style.webkitAnimationPlayState = "running";
    isAnimationPaused = false;
    return;
  }
  queueCount++;
  runCount.textContent = queueCount;
  isAnimationOver && animate();
};
run.addEventListener("click", handleClick);

progress.addEventListener("animationend", (e) => {
  queueCount--;
  progress.classList.remove("animate");
  runCount.textContent = queueCount;
  setTimeout(() => {
    animate();
  }, 0);
});
