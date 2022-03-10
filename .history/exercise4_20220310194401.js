const side1 = document.querySelector(".side1");
const side2 = document.querySelector(".side2");
const side3 = document.querySelector(".side3");
const btnTriangle = document.querySelector(".btn-triangle");
const btnAgainTriangle = document.querySelector(".btn-again-triangle");
const triangleType = document.querySelector(".triangle-type");

btnTriangle.addEventListener("click", () => {
  let triangle = "";
  const sideValue1 = +side1.value;
  const sideValue2 = +side2.value;
  const sideValue3 = +side3.value;

  if (
    sideValue1 === sideValue2 ||
    sideValue1 === sideValue3 ||
    sideValue2 === sideValue3
  ) {
    triangle = " isosceles triangle";
  }
});
