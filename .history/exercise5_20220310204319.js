const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const btnDay = document.querySelector(".btn-date");
const btnAgainDay = document.querySelector(".btn-again-date");

btnDay.addEventListener("click", () => {
  const dateValue = +date.value;
  const monthValue = +month.value;
  const yearValue = +year.value;

  let dateNext;
  let monthNext;
  let yearNext;

  let dayNext = `Invilid`;
});
