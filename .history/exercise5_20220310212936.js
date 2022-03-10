const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const btnDay = document.querySelector(".btn-date");
const btnAgainDay = document.querySelector(".btn-again-date");
const dateText = document.querySelector(".date-text");

btnDay.addEventListener("click", () => {
  const dateValue = +date.value;
  const monthValue = +month.value;
  const yearValue = +year.value;

  let dateNext;
  let monthNext;
  let yearNext;

  let dayNext = ``;

  if (
    dateValue <= 0 ||
    dateValue > 31 ||
    monthValue <= 0 ||
    monthValue > 12 ||
    yearValue <= 0 ||
    date.value === "" ||
    month.value === "" ||
    year.value === ""
  )
    return (dateText.value = "Invalid");
  dateNext = dateValue + 1;
  monthNext = monthValue;
  yearNext = yearValue;
  dayNext = `${dateNext} - ${monthNext} - ${yearNext}`;

  if (dateValue === 31) {
    switch (monthValue) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        dateNext = 1;
        monthNext = monthValue + 1;
        yearNext = yearValue;
    }
    dayNext = `${dateNext} - ${monthNext} - ${yearNext}`;
  }
  if (dateValue === 31 && monthNext === 12) {
    dateNext = 1;
    monthNext = 1;
    yearNext = yearValue + 1;
  }
  dateText.value = dayNext;
});
