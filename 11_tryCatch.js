class customError {
    constructor(message) {
        this.message = message
    }
}

function function1() {
    try {
        console.log('function1 no try')
    } catch {
        throw new customError('Erro na function1')
    }
}

function1()

function function2() {

    console.log('function2 executou')
    try {
        console.log('function2 no try')
        //b
    } catch (error) {
        console.error('erro na function2 -->', error)
        throw new Error(error)
    }
}

codigoB

function main() {
    consolelog('main executou')
    try {
        function1()
        function2()
    } catch (error) {
        console.log('erro na main-->', error)
    }
} 

main()