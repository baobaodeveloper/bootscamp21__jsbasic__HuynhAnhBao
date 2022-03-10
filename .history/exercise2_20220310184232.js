const select = document.querySelector(".form-select");
const btnSignIn = document.querySelector(".btn-sign-in");
const outputSignIn = document.querySelector(".output-sign-in");

btnSignIn.addEventListener("click", () => {
  let who = "";
  if (select.value === "M") {
    who = "";
  } else if (select.value === "B") {
    who = "";
  } else if (select.value === "A") {
    who = "";
  } else if (select.value === "E") {
    who = "";
  } else {
    who = "friend";
  }

  outputSignIn.value = `Hello ${who}`;
});
