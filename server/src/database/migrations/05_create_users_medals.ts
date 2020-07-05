import Knex from "knex";

export async function up(knex: Knex) {
  // Criar tabela
  return knex.schema.createTable("users_medals", (table) => {
    table.increments("id").primary();
    table.integer("id_user").notNullable().references("id").inTable("users");
    table.integer("id_medal").notNullable().references("id").inTable("medals");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users_medals");
  // Voltar atras (deletar a tabela)
}