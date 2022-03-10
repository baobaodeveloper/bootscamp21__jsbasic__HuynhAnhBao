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
  console.log(typeof +monthValue);

  let dateNext;
  let monthNext;
  let yearNext;

  let dayNext = ``;

  if (date.value === "" || month.value === "" || year.value === "")
    dayNext = "Please enter your day";

  if (dateValue < 0 || dateValue > 31) dayNext = "Date is invalid";
  if (monthValue < 0 || monthValue > 12) dayNext = "Month is invalid";
  if (yearValue < 0) dayNext = "Year is invalid";

  dateText.value = dayNext;
});
