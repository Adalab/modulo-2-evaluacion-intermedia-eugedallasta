"use strict";

const userNumberElement = document.querySelector(".js-user-number"); // El nro que escribe la usuaria
const buttonElement = document.querySelector(".js-button"); // boton Prueba
const pTipElement = document.querySelector(".js-tip"); // el párrafo con las pistas
const counterElement = document.querySelector(".js-counter");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max); //funcion para nro aleatorio
}

function renderTip(message) {
  pTipElement.innerHTML = "Pista: " + message;
}

function handleClickButton(event) {
  //funcion handle listener

  const userNumberValue = userNumberElement.value;
  const numberValue = parseInt(userNumberValue);

  if (numberValue < 1 || userNumberValue > 100) {
    renderTip("El número debe estar entre 1 y 100 🤯");
  } else if (numberValue > randomNumber) {
    renderTip("Demasiado alto 😋 !!!");
  } else if (numberValue < randomNumber) {
    renderTip("Demasiado bajo 😱 !!!");
  } else {
    renderTip("Has ganado campeona 😀!!!");
  }
}

function handleClickCounter(event) {
  counter = counter + 1;
  counterElement.value = "Número de intentos: " + counter;
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

let counter = 0;

buttonElement.addEventListener("click", handleClickButton);
buttonElement.addEventListener("click", handleClickCounter);

