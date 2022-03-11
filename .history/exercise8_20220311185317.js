const btnCoordinate = document.querySelector(".btn-coordinate");
const btnAgainCoordinate = document.querySelector(".btn-again-coordinate");
btnCoordinate.addEventListener("click", () => {
  const coordinateX1 = document.querySelector(".coordinateX1").value;
  const coordinateY1 = document.querySelector(".coordinateY1").value;
  const coordinateX2 = document.querySelector(".coordinateX2").value;
  const coordinateY2 = document.querySelector(".coordinateY2").value;
  const coordinateX3 = document.querySelector(".coordinateX3").value;
  const coordinateY3 = document.querySelector(".coordinateY3").value;
  const coordinateXSchool = document.querySelector(
    ".coordinate-school-X"
  ).value;
  const coordinateYSchool = document.querySelector(
    ".coordinate-school-Y"
  ).value;
  const studentNearSchool = document.querySelector(
    ".student-near-school"
  ).value;

  let result = "Invalid";

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
    return (studentNearSchool.value = result);

  const distanceCoordinate1 = Math.sqrt(
    (+coordinateX1 - +coordinateXSchool) ** 2 +
      (coordinateY1 - +coordinateYSchool) ** 2
  );
  const distanceCoordinate2 = Math.sqrt(
    (+coordinateX2 - +coordinateXSchool) ** 2 +
      (coordinateY2 - +coordinateYSchool) ** 2
  );
  const distanceCoordinate3 = Math.sqrt(
    (+coordinateX3 - +coordinateXSchool) ** 2 +
      (coordinateY3 - +coordinateYSchool) ** 2
  );

  if (
    distanceCoordinate1 < distanceCoordinate2 &&
    distanceCoordinate1 < distanceCoordinate3
  ) {
    result = "Student 1 near school";
  } else if (
    distanceCoordinate2 < distanceCoordinate1 &&
    distanceCoordinate2 < distanceCoordinate3
  ) {
    result = "Student 2 near school";
  } else if (
    distanceCoordinate3 < distanceCoordinate1 &&
    distanceCoordinate3 < distanceCoordinate2
  ) {
    result = "Student 3 near school";
  } else if (
    distanceCoordinate1 === distanceCoordinate2 &&
    distanceCoordinate1 < distanceCoordinate3
  ) {
    result = "Student 1 and 2 near school";
  } else if (
    distanceCoordinate1 === distanceCoordinate3 &&
    distanceCoordinate3 < distanceCoordinate2
  ) {
    result = "Student 1 and 3 near school";
  } else if (
    distanceCoordinate2 === distanceCoordinate3 &&
    distanceCoordinate2 < distanceCoordinate1
  ) {
    result = "Student 2 and 3 near school";
  }
  studentNearSchool.value = result;
});
