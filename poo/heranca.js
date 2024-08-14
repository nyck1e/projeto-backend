class Pessoa {
    nome;
    idade;
    cpf;

    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    autenticacao(){
        console.log(`${this.nome} - Autenticando`)
    }
}

class Gerente extends Pessoa{
    constructor(nome, idade, cpf){
        super(nome, idade, cpf);
    }
}

const pessoa = new Pessoa('Guilherme', 18, '69973734624')
const gerente = new Gerente('Fabiana', 35, '12304815415')

pessoa.autenticacao();
gerente.autenticacao();

class Carro {
    constructor(modelo) {
        this.modelo = modelo;
    }

    static acelerar() {
        console.log("Acelerando...");
    }

    static frear() {
        console.log("Freando...");
    }

    static ligarSeta(direcao) {
        console.log("Ligando seta para " + direcao);
    }
}

Carro.acelerar()
Carro.frear();
Carro.ligarSeta('direita');
Carro.ligarSeta('esquerda');