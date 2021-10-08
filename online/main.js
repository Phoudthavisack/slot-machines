const slide = document.querySelectorAll(".slide");
const button = document.querySelector("button");
const balanceElement = document.querySelector("#balance");
const userElement = document.querySelector("#username");

const api =
  "https://script.google.com/macros/s/AKfycby0Nco2eyVMwjsBlgAKRijGKUCCVr8-7WLySevDspPce7bGeaLfjO8IbBXxuXogfS4pgQ/exec";

const username = prompt("ຊື່ຜູ້ໃຊ້:");
userElement.innerText = username;
let balance = 0;
async function getApi() {
  let res = await fetch(api + "?user=" + username + "&bet=0");
  let data = await res.json();

  reBalance(data.balance);
  console.log(data);
}
getApi();
button.addEventListener("click", () => {
  for (let i = 0; i < slide.length; i++) {
    for (let a = 1; a < 10; a++) {
      slide[i].classList.remove("s" + a);
    }
    slide[i].classList.add("slider");
  }

  setTimeout(() => {
    async function getDice() {
      let res = await fetch(api + "?user=" + username + "&bet=" + 100);
      let data = await res.json();

      for (let i = 0; i < 3; i++) {
        slide[i].classList.add("s" + data.result[i]);
        slide[i].classList.remove("slider");
      }
      getApi();
    }
    getDice();
  }, 1000);
});
function reBalance(balance) {
  balanceElement.innerText = balance;
}
