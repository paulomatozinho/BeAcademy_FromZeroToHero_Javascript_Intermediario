//Async / Await

const firstUser = async (firstUser) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    let resultJSON = await response.json()
    let title = await resultJSON.title
    console.log(resultJSON)

    firstUser(1)
}

// Try / Catch

async function user() {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        let data = await response.json()
        console.log(data.title)
    } catch {
        console.log('error --->', error)
        throw new Error('Erro no fetch')
    } finally {
        console.log('acabou')
    }
}

user()