'use strict';

const buttonElement = document.querySelector('.js-btn try'); // boton de prueba
const hintElement = document.querySelector('.js-hint');      // pistas
const triesElement = document.querySelector('.js-tries');    // nto de intentos


function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

const RandomNumber = getRandomNumber(100)
console.log(RandomNumber)

 


