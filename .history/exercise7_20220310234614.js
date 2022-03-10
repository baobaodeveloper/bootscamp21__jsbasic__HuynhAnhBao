const number = document.querySelector(".number-read");
const btnRead = document.querySelector(".btnRead");
const btnAgainRead = document.querySelector(".btn-again-read");

btnRead.addEventListener("click", () => {
  const numberValue = number.value;
  let read = "";
  let hundred;
  let ten;
  let one;
  if (numberValue.length === 3) {
    switch (+numberValue) {
      case 1:
        read = "Một";
        break;
      case 2:
        read = "Hai";
        break;
      case 3:
        read = "Ba";
        break;
      case 4:
        read = "Bốn";
        break;
      case 5:
        read = "Năm";
        break;
      case 6:
        read = "Sáu";
        break;
      case 7:
        read = "Bảy";
        break;
      case 8:
        read = "Tám";
        break;
      case 9:
        read = "Chín";
        break;
    }
  }
});
