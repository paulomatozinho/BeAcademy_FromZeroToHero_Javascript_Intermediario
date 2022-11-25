class candidates {
    constructor(firstName, surName, cpf) {
        this.firstName = firstName
        this.surName = surName
        this.cpf = cpf
    }
}

class Masc extends candidates {
    constructor(firstName, surName, cpf, reservista) {
        super(firstName, surName, cpf)
        this.reservista =reservista
    }
}

const candidates1 = new Masc ('Paulo', 'Henrique', 123456, true)
const candidates2 = new candidates('Maria', 'Aparecida', 123456)
console.log(candidates2)