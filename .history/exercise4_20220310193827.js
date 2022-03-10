const side1 = document.querySelector(".side1");
const side2 = document.querySelector(".side2");
const side3 = document.querySelector(".side3");
const btnTriangle = document.querySelector(".btn-triangle");
const btnAgainTriangle = document.querySelector(".btn-again-triangle");
const triangleType = document.querySelector(".triangle-type");

btnTriangle.addEventListener("click", () => {
  let triganle = "";
  if (+side1.value === +side2.value) {
    triganle = "isosceles triangle";
  }
});
