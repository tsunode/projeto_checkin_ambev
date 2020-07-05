import { Request, Response } from "express";
import knex from "../database/connection";

class UsersController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    //retorna usuário enviado por parametro + pontos
    const [ user ] = await knex("users").select('users.id', 'users.name').sum('users_checkin.points as points')
    .join('users_checkin', 'users.id', '=', 'users_checkin.id_user')
    .where("users.id", "=", id);

    response.json( user );
  }
}

export default UsersController;
