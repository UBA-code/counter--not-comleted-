let numberInput = document.querySelector(".number-input"),
  decreaseBtn = document.querySelector(".decrease-btn"),
  increaseBtn = document.querySelector(".increase-btn"),
  ResetBtn = document.querySelector(".Reset-btn"),
  StartBtn = document.querySelector(".Start-btn"),
  hours = document.querySelector(".hours"),
  minutes = document.querySelector(".minutes"),
  seconds = document.querySelector(".seconds"),
  minutesInput = numberInput.value,
  secondInterval,
  minutesInterval;

// create Decrease and increase fucntions and get input value

decreaseBtn.onclick = (_) => {
  numberInput.value--;
  minutes = numberInput.value;
};
increaseBtn.onclick = (_) => {
  numberInput.value++;
  minutes = numberInput.value;
};
numberInput.oninput = (_) => {
  minutes = numberInput.value;
};

// start function when click

StartBtn.addEventListener("click", (e) => {
  clearInterval(secondInterval);
  start();
});

// stop function when click

ResetBtn.addEventListener("click", (_) => {
  clearInterval(secondInterval);
  hours.innerHTML = "00:";
  minutes.innerHTML = "00:";
  seconds.innerHTML = "00";
  StartBtn.style.cursor = "pointer";
  StartBtn.style.backgroundColor = "#efefef";
  StartBtn.style = `
  :hover {
    background-color: #28a745;
  }
  `;
});

// create function to create second counter

function start() {
  // customize Button
  StartBtn.style.cursor = "not-allowed";
  StartBtn.style.backgroundColor = "gray";
  StartBtn.style.color = "gray";

  seconds.innerHTML = 10;
  minutesInterval = setInterval(() => {
    secondInterval = setInterval(() => {
      seconds.innerHTML =
        parseInt(seconds.textContent) <= 10
          ? `0${seconds.textContent - 1}`
          : seconds.textContent - 1;
      seconds.textContent == 0 ? clearInterval(secondInterval) : "";
    }, 1000);
  }, 20000);
}

// StartBtn.addEventListener("click", minutesCounter);
