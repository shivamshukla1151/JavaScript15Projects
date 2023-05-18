const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colorButton = document.getElementById("btn");
const colorDisplay = document.querySelector(".color");

colorButton.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  colorDisplay.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
