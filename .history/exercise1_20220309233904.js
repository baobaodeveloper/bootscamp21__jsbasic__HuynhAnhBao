const num1 = document.querySelector(".num1").value * 1;
const num2 = document.querySelector(".num2").value * 1;
const num3 = document.querySelector(".num3").value * 1;
const btnRank = document.querySelector(".btn-rank");
const result1 = document.querySelector(".result1");
console.log(num1);
btnRank.addEventListener("click", () => {
  let rank = "";
  if (num1 < num2 && num2 < num3) {
    rank = `${num1}  ${num2} ${num3}`;
  } else if (num1 < num3 && num3 < num2) {
    rank = `${num1}  ${num3} ${num2}`;
  } else if (num2 < num1 && num1 < num3) {
    rank = `${num2}  ${num1} ${num3}`;
  } else if (num2 < num3 && num3 < num1) {
    rank = `${num2}  ${num1} ${num3}`;
  } else if (num3 < num1 && num1 < num2) {
    rank = `${num3}  ${num1} ${num2}`;
  } else if (num3 < num2 && num2 < num1) {
    rank = `${num3}  ${num2} ${num1}`;
  }
  result1.value = rank;
});
