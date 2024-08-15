const produtos = require("./produtos");
const usuarios = require("./usuarios");

const rotas = {
    '/produtos': {
        'GET': produtos.listar(),
        'POST': produtos.add(),
        'PUT': produtos.edit(0),
        'DELETE': produtos.del(0),
    },
    '/usuarios': {
        'GET': usuarios.listar(),
        'POST': usuarios.add(),
        'PUT': usuarios.edit(0),
        'DELETE': usuarios.del(0),
    },

};

module.exports = rotas;