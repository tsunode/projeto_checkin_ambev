import Knex from "knex";

export async function up(knex: Knex) {
  // Criar tabela
  return knex.schema.createTable("brands", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("image").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("brands");
  // Voltar atras (deletar a tabela)
}