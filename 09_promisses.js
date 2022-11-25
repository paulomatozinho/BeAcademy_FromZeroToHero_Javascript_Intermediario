//setTimeout (() => console.log('Resultado'), 5000);

//Promisses
// function show() {
//     setTimeout(() => {
//         console.log('Olá')
//     }, 2000);

//     console.log('Até logo!')
// }

// show()

// const minhaPromise = new Promise((resolve, reject) => {
//     let n = 9

//     if (n > 10) {
//         resolve()
//     } else {
//         reject()
//     }
// })

// minhaPromise

//     .then(result => console.log('Resolveu'))
//     .catch(err => console.log('Errou'))
//     .finally(() => console.log('Finally'))




//Fetch
// const firstUser = (userId) => {
//     let response = fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
//     then(res => res.json())
//     .then(data => console.log(data))
// }

// firstUser(1)



fetch('https://viacep.com.br/ws/01001000/json/')
    .then(response => response.json())
    .then(cep => {
        console.log(cep.bairro, cep.logradouro);
    });


