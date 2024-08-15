const {createServer} = require('node:http');
const Produtos = require('./routes/produtos');
const Usuarios = require('./routes/usuarios');
const rotas = require ('./routes/router');

const host = 'localhost';
const port = 3000;

const server = createServer((request, response) => {
    const { url, method } = request;

    console.log(url)
    if(url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html' });
        return response.end ('<h1>AMO MEU NAMORADO</h1> <br/> <h2>vou casar com ele</h2>');
    }

    if(!rotas[url] || !rotas[url][method]) {
        response.writeHead(404, {'Content-Type': 'text/html' });
        return response.end ("Página não encontrada");
    }

    
    const dados = rotas[url][method];
    
    response.writeHead(200, {'Content-Type': 'application/json' });
    return response.end (JSON.stringify(dados));


});

server.listen(port, host, () => {
    console.log(`Servidor executando http://${host}:${port}`)
});


//TODOS OS TESTE COMENTADOS

//const teste = () => {
//    console.log("Teste");
//}

//const rotasExemplo = {
//    usuarios: {
//        GET: teste()
//    }
//}

//rotasExemplo.usuarios.GET;
//rotasExemplo['usuarios']['GET'];
//    if(url === '/produtos' && method === 'GET') {
    //(url === '/produtos/listar')
//        rotas[url][method];
//        const dados = Produtos.listar();
//        response.writeHead(200, {'Content-Type': 'application/json' });
//        return response.end (JSON.stringify(dados));
//    }

//    if(url === '/produtos' && method === 'POST') {
    //(url === '/produtos/adicionar')

//        Produtos.add(4, 'kasane teto', 666.00);
//        response.writeHead(200, {'Content-Type': 'text/plain' });
//        return response.end ("produto adicionado com sucesso");
//    }

//    if(url === '/produtos' && method === 'PUT') {
    //(url === '/produtos/edit')

//        Produtos.edit();
//        response.writeHead(200, {'Content-Type': 'text/plain' });
//        return response.end ("produto Editado com sucesso");
//    }

//    if(url === '/produtos' && method === 'DELETE') {
    //(url === '/produtos/remover')

//        Produtos.del(1);
//        response.writeHead(200, {'Content-Type': 'text/plain' });
//        return response.end ("produto remmovido com sucesso");
//    }



// código usado sempre no final para englobar tudo que não for as URL usadas