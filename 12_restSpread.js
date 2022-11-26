// rest parameters
function getSum(...args) {
    let total = 0
    for (const arg of args) {
        total = total + arg
    }

    return total
}
console.log(getSum(2, 5))

//spread operator
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
console.log(arr2)

//merge arrays
const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

const mergeArrays = [0, ...a, ...b]
console.log(mergeArrays)

//Destructuring
const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4,
}

const marca = carro.marca
const ano = carro.ano

const { marca, ano, portas } = carro

console.log(marca)
console.log(ano)

const cliente = {
    nome: 'Paulo',
    compras: {
        digitais: {
            livros: ['Dom Casmurro', 'O Cortiço'],
            filmes: ['Senhor dos Anéis', 'Matrix']
        },
        físicas: {
            cadernos: ['Caderno']
        }

    }
}

//console.log(cliente.compras.digitais.livros);
//console.log(cliente.compras.digitais.filmes);

const { livros, videos } = cliente.compras.digitais;

//destructuring arrays

const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = fruta[0];
const segundaFruta = fruta[1];
const terceiraFruta = fruta[2];

// Com destructuring

const [primeira, segunda, terceira] = frutas;