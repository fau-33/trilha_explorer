import { Modal } from "./modal.js";
import { AlertError } from "./alert.error.js";
import { calculateIMC, notNumber } from "./utils.js";

// Variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');


form.onsubmit = (event) => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotNumber) {
        AlertError.open();
        return
    }

    AlertError.close()


    const result = calculateIMC(weight, height);
    displayResultMessage(result)
};

function displayResultMessage(result) {
    const message = `Seu IMC é ${result}`;
    
    Modal.message.innerText = message;
    
    Modal.open();
}
