const slide = document.querySelectorAll(".slide");
const button = document.querySelector("button");
const balanceElement = document.querySelector("#balance");

let balance = 600;

button.addEventListener("click", () => {
  for (let i = 0; i < slide.length; i++) {
    for (let a = 1; a < 10; a++) {
      slide[i].classList.remove("s" + a);
    }
    slide[i].classList.add("slider");
  }
  setTimeout(() => {
    let arr = [];
    for (let i = 0; i < slide.length; i++) {
      const rand = Math.floor(Math.random() * 9 + 1);
      slide[i].classList.add("s" + rand);
      slide[i].classList.add("slider");
      arr.push(rand);
    }
    check(arr);
  }, 1000);
});
function reBalance() {
  balanceElement.innerText = balance;
}
function check(arr) {
  if ((arr[0] == arr[1]) | (arr[1] == arr[2])) {
    balance += 20;
  } else {
    balance -= 10;
  }
  reBalance();
}
reBalance();
