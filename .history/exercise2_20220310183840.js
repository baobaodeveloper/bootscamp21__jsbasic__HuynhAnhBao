const select = document.querySelector(".form-select");
const btnSignIn = document.querySelector(".btn-sign-in");
const outputSignIn = document.querySelector(".output-sign-in");

btnSignIn.addEventListener("click", () => {
  console.log(select.value);
});
