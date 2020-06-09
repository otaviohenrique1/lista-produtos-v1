import express from "express";
import ProdutosController from "./controllers/ProdutosController";

const routes = express.Router();
const produtosController = new ProdutosController();

routes.get('/produtos', produtosController.index);
routes.post('/produtos', produtosController.create);
routes.get('/produtos/:id', produtosController.show);

export default routes;