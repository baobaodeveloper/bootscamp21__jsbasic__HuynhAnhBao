const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const btnNext = document.querySelector(".btn-next");
const btnAgainDay = document.querySelector(".btn-again-date");
const dateText = document.querySelector(".date-text");
const btnPrev = document.querySelector(".btn-prev");

btnNext.addEventListener("click", () => {
  const dateValue = +date.value;
  const monthValue = +month.value;
  const yearValue = +year.value;

  let dateNext;
  let monthNext;
  let yearNext;

  let dayNext = ``;
  //   Day normal

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
  //   dayNext = `${dateNext} - ${monthNext} - ${yearNext}`;

  //   Day is 31 dates and month are 1,3,5,7,8,10,12

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
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        return (dateText.value = "Invalid");
    }
  }
  // end of the month 12

  if (dateValue === 31 && monthValue === 12) {
    dateNext = 1;
    monthNext = 1;
    yearNext = yearValue + 1;
  }

  //   Day is 30 dates and month are 4,6,9,11

  if (dateValue === 30) {
    switch (monthValue) {
      case 4:
      case 6:
      case 9:
      case 11:
        dateNext = 1;
        monthNext = monthValue + 1;
        yearNext = yearValue;
    }
  }

  //   leap year

  if (dateValue > 29 && yearValue % 4 === 0 && monthValue === 2) {
    return (dateText.value = "Invalid");
  }
  if (dateValue > 28 && yearValue % 4 !== 0 && monthValue === 2) {
    return (dateText.value = "Invalid");
  }

  if (dateValue === 29 && yearValue % 4 === 0 && monthValue === 2) {
    dateNext = 1;
    monthNext = monthValue + 1;
    yearNext = yearValue;
  } else if (monthValue === 2 && yearValue % 4 !== 0 && dateValue === 28) {
    dateNext = 1;
    monthNext = monthValue + 1;
    yearNext = yearValue;
  }

  dayNext = `${dateNext < 10 ? "0" + dateNext : dateNext} - ${
    monthNext < 10 ? "0" + monthNext : monthNext
  } - ${yearNext}`;

  dateText.value = dayNext;
});

btnAgainDay.addEventListener("click", () => {
  dateText.value = "";
  date.value = "";
  month.value = "";
  year.value = "";
});
