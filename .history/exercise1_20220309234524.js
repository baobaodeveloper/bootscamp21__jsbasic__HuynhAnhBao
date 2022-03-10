const numValue1 = document.querySelector(".num1");
const numValue2 = document.querySelector(".num2");
const numValue3 = document.querySelector(".num3");
const btnRank = document.querySelector(".btn-rank");
const result1 = document.querySelector(".result1");
btnRank.addEventListener("click", () => {
  const num1 = +numValue1.value;
  const num2 = +numValue2.value;
  const num3 = +numValue3.value;
  let rank = "";
  if (num1 < num2 && num2 < num3) {
    rank = `${num1}  ${num2}  ${num3}`;
  } else if (num1 < num3 && num3 < num2) {
    rank = `${num1}  ${num3}  ${num2}`;
  } else if (num2 < num1 && num1 < num3) {
    rank = `${num2}  ${num1}  ${num3}`;
  } else if (num2 < num3 && num3 < num1) {
    rank = `${num2}  ${num1}  ${num3}`;
  } else if (num3 < num1 && num1 < num2) {
    rank = `${num3}  ${num1}  ${num2}`;
  } else if (num3 < num2 && num2 < num1) {
    rank = `${num3}  ${num2}  ${num1}`;
  } else if (num1 === num2 && num1 < num3) {
    rank = `${num1}  ${num1}  ${num3}`;
  } else if (num1 === num3 && num1 < num2) {
    rank = `${num1}  ${num1}  ${num3}`;
  } else if (num2 === num3 && num3 < num1) {
    rank = `${num2}  ${num2}  ${num3}`;
  }
  result1.value = rank;
});
