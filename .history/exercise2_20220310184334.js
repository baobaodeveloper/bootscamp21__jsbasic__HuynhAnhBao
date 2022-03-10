const select = document.querySelector(".form-select");
const btnSignIn = document.querySelector(".btn-sign-in");
const outputSignIn = document.querySelector(".output-sign-in");

btnSignIn.addEventListener("click", () => {
  let who = "";
  if (select.value === "M") {
    who = "Mẹ";
  } else if (select.value === "B") {
    who = "Ba";
  } else if (select.value === "A") {
    who = "Anh Trai";
  } else {
    who = "Em gái";
  }

  outputSignIn.value = `Hello ${who}`;
});
