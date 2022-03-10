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
  console.log(typeof monthValue);

  let dateNext;
  let monthNext;
  let yearNext;

  let dayNext = ``;

  if (date.value === "" || dateValue > 31 || dateValue <= 0)
    dayNext = "Date is Invalid";

  dateText.value = dayNext;
});
