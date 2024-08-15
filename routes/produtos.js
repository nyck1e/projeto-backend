class Produtos {
    static produtos = [
        {
            id: 1,
            nome: 'hatsune miku',
            valor: 2.50
        },
        {
            id: 2,
            nome: 'kagamine len',
            valor: 2.50
        },
    ];
    
    static listar(){
        return Produtos.produtos;
    };

    static add(id, nome, valor){
        Produtos.produtos.push({
            id: id,
            nome: nome,
            valor: valor
        });
    }
    
    static edit(indice){

    }

    static del(indice){
        Produtos.produtos.splice(indice, 1);
    }

}

module.exports = Produtos

//CRUD
//Create = Criar registro no banco de dados
//Read = Realizar uma leitura no banco de dados
//Update = Atualizar os dados
//Delete = Deletar os dados