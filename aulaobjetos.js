/*
class pessoa {
    nome;
    idade;

    descrever(){
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const Felipe = {
    nome: 'Felipe Dias',
    idade: 25,

    descrever: function () {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }


};

pessoa.nome = 'Felipe';
pessoa.idade = 25;

pessoa.descrever();
*/

/* Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio 
de combustivel por km rodado.
Crie um método que dado a quantidade de quilometros e o preço 
do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/

/*
class Carro{
  marca;
  cor;
  gastoMedioPorKm;

  constructor (marca,cor,gastoMedioPorKm) {
    this.marca = marca;
    this.cor =cor;
    this.gastoMedioPorKm = gastoMedioPorKm;

  }

}

const gol = new Carro('Gol','Branco',1/12);
console.log(gol);
*/

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new Pessoa('Renan', 30).descrever();