//CLASSES

class Pessoa{
    //ATRIBUTOS DE CLASSES
    nome = '';
    idade = '';
    cpf = '';

    constructor (nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    //EVENTODS - FUNÇÕES DE CLASSES
    correr () {
        console.log(`O ${this.nome} está Correndo...`);
    }

    dormir () {
        console.log(`O ${this.nome} está Dormindo...`);
    }
}

const pessoaClasse1 = new Pessoa("Albert",96,"6996699669");
const pessoaClasse2 = new Pessoa("Lincon",135,"1234567890");

pessoaClasse1.nome = 'Ricardo';

//const pessoaAux = pessoaClasse1;
//pessoaAux.nome = "Thomas";

//const pessoaClasse3 = new Pessoa("Jailson",72,"6666699999");

//console.log(pessoaClasse1);
//console.log(pessoaClasse2);
//console.log(pessoaClasse3);

//pessoaClasse1.correr()
//pessoaClasse2.correr()
//pessoaClasse3.correr()

//pessoaClasse1.dormir()
//pessoaClasse2.dormir()
//pessoaClasse3.dormir()