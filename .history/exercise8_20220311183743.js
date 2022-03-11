const coordinateX1 = document.querySelector(".coordinateX1").value * 1;
const coordinateY1 = document.querySelector(".coordinateY1");
const coordinateX2 = document.querySelector(".coordinateX2");
const coordinateY2 = document.querySelector(".coordinateY2");
const coordinateX3 = document.querySelector(".coordinateX3");
const coordinateY3 = document.querySelector(".coordinateY3");
const coordinateXSchool = document.querySelector(".coordinate-school-X");
const coordinateYSchool = document.querySelector(".coordinate-school-Y");
const btnCoordinate = document.querySelector(".btn-coordinate");
const btnAgainCoordinate = document.querySelector(".btn-again-coordinate");
const studentNearSchool = document.querySelector(".student-near-school");

btnCoordinate.addEventListener("click", () => {
  console.log(coordinateX1);
  if (
    coordinateX1.value === "" ||
    coordinateY1.value === "" ||
    coordinateX2.value === "" ||
    coordinateY2.value === "" ||
    coordinateX3.value === "" ||
    coordinateY3.value === "" ||
    coordinateXSchool.value === "" ||
    coordinateYSchool.value === ""
  )
    return (studentNearSchool.value = "Invalid");
});
