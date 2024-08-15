class Usuarios {
    static usuarios = [
        {
            id: 1,
            nome: 'hatsune miku',
            login:'mikuu'
        },
        
    ];
    
    static listar(){
        const usuarios = [
            {
                id: 1,
                nome: 'hatsune miku',
                login:'mikuu'
            },
            
        ];
        return usuarios;
    }

    static add(id, nome, login){
        Usuarios.usuarios.push({
            id: id,
            nome: nome,
            login: login
        });
    }
    
    static edit(indice){

    }

    static del(indice){
        Usuarios.usuarios.splice(indice, 1);
    }

}

module.exports = Usuarios

//CRUD
//Create = Criar registro no banco de dados
//Read = Realizar uma leitura no banco de dados
//Update = Atualizar os dados
//Delete = Deletar os dados