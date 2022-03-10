const number = document.querySelector(".number-read");
const btnRead = document.querySelector(".btnRead");
const btnAgainRead = document.querySelector(".btn-again-read");

btnRead.addEventListener("click", () => {
  const numberValue = number.value;
  let hundred = +numberValue[0];
  let hundredRead = "";
  let ten = +numberValue[1];
  let tenRead = "";
  let one = +numberValue[2];
  let oneRead = "";

  if (numberValue.length === 3) {
    switch (hundred) {
      case 1:
        hundredRead = "Một";
        break;
      case 2:
        hundredRead = "Hai";
        break;
      case 3:
        hundredRead = "Ba";
        break;
      case 4:
        hundredRead = "Bốn";
        break;
      case 5:
        hundredRead = "Năm";
        break;
      case 6:
        hundredRead = "Sáu";
        break;
      case 7:
        hundredRead = "Bảy";
        break;
      case 8:
        hundredRead = "Tám";
        break;
      case 9:
        hundredRead = "Chín";
        break;
    }

    switch (hundred) {
      case 1:
        hundredRead = "Một";
        break;
      case 2:
        hundredRead = "Hai";
        break;
      case 3:
        hundredRead = "Ba";
        break;
      case 4:
        hundredRead = "Bốn";
        break;
      case 5:
        hundredRead = "Năm";
        break;
      case 6:
        hundredRead = "Sáu";
        break;
      case 7:
        hundredRead = "Bảy";
        break;
      case 8:
        hundredRead = "Tám";
        break;
      case 9:
        hundredRead = "Chín";
        break;
    }

    switch (hundred) {
      case 1:
        hundredRead = "Một";
        break;
      case 2:
        hundredRead = "Hai";
        break;
      case 3:
        hundredRead = "Ba";
        break;
      case 4:
        hundredRead = "Bốn";
        break;
      case 5:
        hundredRead = "Năm";
        break;
      case 6:
        hundredRead = "Sáu";
        break;
      case 7:
        hundredRead = "Bảy";
        break;
      case 8:
        hundredRead = "Tám";
        break;
      case 9:
        hundredRead = "Chín";
        break;
    }
  }
});
