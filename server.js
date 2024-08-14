const {createServer} = require('node:http');
const listarProdutos = require('./routes/produtos')
const host = 'localhost';
const port = 3000;

const produtos = [
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


const server = createServer((request, response) => {
    
    const { url, method } = request;

    console.log("Método/Verbos - ", method);
    console.log("URL - ", url);

    if(url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html' });
        return response.end ('<h1>AMO MEU NAMORADO</h1> <br/> <h2>vou casar com ele</h2>');

    }

    if(url === '/produtos') {

        const dados = listarProdutos();
        response.writeHead(200, {'Content-Type': 'application/json' });
        return response.end (JSON.stringify(dados));
    }

    if(url === '/produtos/adicionar') {

        produtos.push({
            id: 3,
            nome: 'kasane teto',
            valor: 666.00
        });
       
        response.writeHead(200, {'Content-Type': 'text/plain' });
        return response.end ("produto adicionado com sucesso");
    }

    if(url === '/produtos/remover') {

        produtos.pop();
       
        response.writeHead(200, {'Content-Type': 'text/plain' });
        return response.end ("produto remmovido com sucesso");
    }


    // código usado sempre no final para englobar tudo que não for as URL usadas
    response.writeHead(404, {'Content-Type': 'text/html' });
        return response.end ("Página não encontrada");
    
})

server.listen(port, host, () => {
    console.log(`Servidor executando http://${host}:${port}`)
});