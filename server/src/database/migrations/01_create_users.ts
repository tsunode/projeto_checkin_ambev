import Knex from "knex";

export async function up(knex: Knex) {
  // Criar tabela
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("password").notNullable();
    table.boolean("active").notNullable();
    table.date("expiration_date").nullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
  // Voltar atras (deletar a tabela)
}