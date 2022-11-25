//Prototypes
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.peso = 80;
}

const paulo = new Pessoa('Paulo', 34);
console.log(Pessoa.prototype)

const notbook = {
    cor: 'preta',
    ano: '2022',
    especifications: function(value) {
        return `Este notbook custa R$ ${value},00; cor ${this.cor}; ano ${this.ano}`
    }
}

const dell = {
    marca:'Dell'
}

Object.setPrototypeOf(dell, notbook)
console.log(dell.especifications(5000))