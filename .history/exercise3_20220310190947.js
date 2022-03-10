const interger1 = document.querySelector(".integer1");
const interger2 = document.querySelector(".integer2");
const interger3 = document.querySelector(".integer3");
const btnInteger = document.querySelector(".btn-integer");
const outputOdd = document.querySelector(".outputOdd");
const outputEven = document.querySelector(".outputEven");
const btnAgainInteger = document.querySelector(".btn-again-integer");
btnInteger.addEventListener("click", () => {
  let odd = 0;
  let even = 0;

  +interger1.value % 2 === 0 ? even++ : odd++;

  +interger2.value % 2 === 0 ? even++ : odd++;

  +interger3.value % 2 === 0 ? even++ : odd++;

  outputOdd.value = odd;
  outputEven.value = even;
});

btnAgainInteger.addEventListener("click", () => {
  interger1.value = "";
  interger2.value = "";
  interger3.value = "";

  outputOdd.value = "";
  outputEven.value = "";
});
