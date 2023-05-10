// Possibilitando apenas números ou letras nos inputs...

const inputNumber = document.getElementById("card-number");
inputNumber.addEventListener("input", function (ev) {
  let previousValue = this.value;
  this.value = this.value.replace(/[^0-9\.]/g, "");
  if (previousValue !== this.value) {
    ev.preventDefault();
  }
});

const inputValid = document.getElementById("valid-thru");
inputValid.addEventListener("input", function (ev) {
  let previousValue = this.value;
  this.value = this.value.replace(/[^0-9\.]/g, "");
  if (previousValue !== this.value) {
    ev.preventDefault();
  }
});

const inputCvv = document.getElementById("card-cvv");
inputCvv.addEventListener("input", function (ev) {
  let previousValue = this.value;
  this.value = this.value.replace(/[^0-9\.]/g, "");
  if (previousValue !== this.value) {
    ev.preventDefault();
  }
});

const inputName = document.getElementById("name-text");
inputName.addEventListener("input", function (ev) {
  let previousValue = this.value;
  this.value = this.value.replace(/[^A-Za-z\ + "" +  Á-Úá-ú.]/g, "");
  if (previousValue !== this.value) {
    ev.preventDefault();
  }
});

// Continuando...

const form = document.querySelector("#credit-card");

const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru");
const cardCvv = document.querySelector("#card-cvv");

const cardNumberText = document.querySelector(".number-vl");
const cardNameText = document.querySelector(".name-vl");
const cardExpirationText = document.querySelector(".expiration-vl");
const cardCvvText = document.querySelector(".cvv-vl");

cardNumber.addEventListener("keyup", (ev) => {
  if (!ev.target.value) {
    cardNumberText.innerText = "1234 5678 9101 1121";
  } else {
    const valuesOfInput = ev.target.value.replaceAll(" ", "");

    if (ev.target.value.length > 14) {
      ev.target.value = valuesOfInput.replace(
        /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3 $4"
      );
      cardNumberText.innerHTML = valuesOfInput.replace(
        /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3 $4"
      );
    } else if (ev.target.value.length > 9) {
      ev.target.value = valuesOfInput.replace(
        /(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3"
      );
      cardNumberText.innerHTML = valuesOfInput.replace(
        /(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3"
      );
    } else if (ev.target.value.length > 4) {
      ev.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
      cardNumberText.innerHTML = valuesOfInput.replace(
        /(\d{4})(\d{0,4})/,
        "$1 $2"
      );
    } else {
      cardNumberText.innerHTML = valuesOfInput;
    }
  }
});

cardName.addEventListener("keyup", (ev) => {
  if (!ev.target.value) {
    cardNameText.innerHTML = "João B Silva";
  } else {
    cardNameText.innerHTML = ev.target.value.toUpperCase();
  }
});

cardExpiration.addEventListener("keyup", (ev) => {
  if (!ev.target.value) {
    cardExpirationText.innerHTML = "08/25";
  } else {
    const valuesOfInput = ev.target.value.replace("/", "");

    if (ev.target.value.length > 2) {
      ev.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
      cardExpirationText.innerHTML = valuesOfInput.replace(
        /^(\d{2})(\d{0,2})/,
        "$1/$2"
      );
    } else {
      cardExpirationText.innerHTML = valuesOfInput;
    }
  }
});

cardCvv.addEventListener("keyup", (ev) => {
  if (!ev.target.value) {
    cardCvvText.innerHTML = "321";
  } else {
    cardCvvText.innerHTML = ev.target.value;
  }
});
