const number = document.querySelector(".number-read");
const btnRead = document.querySelector(".btnRead");
const btnAgainRead = document.querySelector(".btn-again-read");
const resultRead = document.querySelector(".resultRead");

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

    switch (ten) {
      case 1:
        tenRead = "Một";
        break;
      case 2:
        tenRead = "Hai";
        break;
      case 3:
        tenRead = "Ba";
        break;
      case 4:
        tenRead = "Bốn";
        break;
      case 5:
        tenRead = "Năm";
        break;
      case 6:
        tenRead = "Sáu";
        break;
      case 7:
        tenRead = "Bảy";
        break;
      case 8:
        tenRead = "Tám";
        break;
      case 9:
        tenRead = "Chín";
        break;
    }

    switch (one) {
      case 1:
        oneRead = "Một";
        break;
      case 2:
        oneRead = "Hai";
        break;
      case 3:
        oneRead = "Ba";
        break;
      case 4:
        oneRead = "Bốn";
        break;
      case 5:
        oneRead = "Năm";
        break;
      case 6:
        oneRead = "Sáu";
        break;
      case 7:
        oneRead = "Bảy";
        break;
      case 8:
        oneRead = "Tám";
        break;
      case 9:
        oneRead = "Chín";
        break;
    }
  }
  resultRead.value = `${hundredRead} trăm ${tenRead} mươi ${
    oneRead ? oneRead : ""
  } nghìn`;
});

btnAgainRead.addEventListener("click", () => {
  resultRead.value = "";
});
