const month = document.querySelector(".month1");
const year = document.querySelector(".year1");
const btnMonth = document.querySelector(".btn-month");
const btnAgainMonth = document.querySelector(".btn-again-month");
const result = document.querySelector(".resultMonth");

btnMonth.addEventListener("click", () => {
  const monthValue = +month.value;
  const yearValue = +year.value;

  let dayOfMonth = 31;

  if (
    monthValue > 12 ||
    monthValue <= 0 ||
    month.value === "" ||
    year.value === "" ||
    year <= 0
  )
    dayOfMonth = "Invalid";

  switch (monthValue) {
    case 4:
    case 6:
    case 9:
    case 11:
      dayOfMonth = 30;
  }

  if (monthValue === 2 && yearValue % 4 === 0) {
    dayOfMonth = 29;
  } else if (monthValue === 2 && yearValue % 4 !== 0) {
    dayOfMonth = 28;
  }
  result.value = dayOfMonth;
});
