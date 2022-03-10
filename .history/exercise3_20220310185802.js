const interger1 = document.querySelector(".integer1");
const interger2 = document.querySelector(".integer2");
const interger3 = document.querySelector(".integer3");
const btnInteger = document.querySelector(".btn-integer");
const outputOdd = document.querySelector(".outputOdd");
const outputEven = document.querySelector(".outputEven");
btnInteger.addEventListener("click", () => {
  let odd = 0;
  let even = 0;

  odd = +interger1.value % 2 === 0 ? even++ : odd++;
  odd = +interger2.value % 2 === 0 ? even++ : odd++;
  odd = +interger3.value % 2 === 0 ? even++ : odd++;

  outputOdd.value = odd;
  outputEven.value = even;
});
