// Funções de Callback
function hello(name) {
    console.log(name)
}

function helloUser(n) {
    n('Paulo')
}
// helloUser(hello)

const callback = e => alert ('Foi clicado')

window.addEventListener('click', callback)