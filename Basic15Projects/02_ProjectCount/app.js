let counter = 0;

const displayValue = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const buttonStyles = e.currentTarget.classList;
    if (buttonStyles.contains("decrease")) {
      counter--;
    } else if (buttonStyles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      displayValue.style.color = "blue";
    }
    if (counter < 0) {
      displayValue.style.color = "orange";
    }
    if (counter === 0) {
      displayValue.style.color = "gray";
    }

    displayValue.innerHTML = counter;
  });
});
