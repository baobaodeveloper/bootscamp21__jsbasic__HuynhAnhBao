const btnCoordinate = document.querySelector(".btn-coordinate");
const btnAgainCoordinate = document.querySelector(".btn-again-coordinate");
btnCoordinate.addEventListener("click", () => {
  const coordinateX1 = document.querySelector(".coordinateX1").value;
  const coordinateY1 = document.querySelector(".coordinateY1").value;
  const coordinateX2 = document.querySelector(".coordinateX2").value;
  const coordinateY2 = document.querySelector(".coordinateY2").value;
  const coordinateX3 = document.querySelector(".coordinateX3").value;
  const coordinateY3 = document.querySelector(".coordinateY3").value;
  const coordinateXSchool =
    document.querySelector(".coordinate-school-X").value * 1;
  const coordinateYSchool =
    document.querySelector(".coordinate-school-Y").value * 1;
  const studentNearSchool =
    document.querySelector(".student-near-school").value * 1;

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

  const distanceCoordinate1 = Math.sqrt(cor);
});
