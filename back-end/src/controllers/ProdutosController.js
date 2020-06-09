import knex from "../database/connection";

class ProdutosController {
    async index(request, response) {
        const { nome, quantidade } = request.query;
    }

    async show(request, response) {}
    
    async create(request, response) {}
}

export default ProdutosController;