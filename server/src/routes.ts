import express, { Request, Response } from "express";

const routes = express.Router();

routes.get("/teste", (request: Request, response: Response) => {
  response.json({ Teste: "Ok" });
});

export default routes;
