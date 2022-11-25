/*Scope*/
{
    let x = 2;
    console.log(x)
} 

{
    var y = 12;
}

console.log(y)

/*Reassign a value*/
let w = 10
w = 5

console.log(w)

/*Template strings*/

let firstName = "Paulo";
let lastName = "Henrique";

let text = `Welcome ${firstName} ${lastName}`;
console.log(text)

let price = 10;
let fees = 0.25;
let total = `O total do produto é: R$ ${price + fees}`;
console.log(total)