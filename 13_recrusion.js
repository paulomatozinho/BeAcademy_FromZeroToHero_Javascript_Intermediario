//Recrusion

function countDown(number) {
    console.log(number);
    const newNumber = number - 1;

    if (newNumber > 0) {
        countDown(newNumber)
    }
}

countDown(10);

// Default parameters
function say(message = 'Olá') {
    console.log(message)
}

say()

// Closures

import { somarNumeros } from "./escopo";

const result = somarNumeros{}
console.log(result)