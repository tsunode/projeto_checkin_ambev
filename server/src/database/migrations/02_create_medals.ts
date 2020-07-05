import Knex from "knex";

export async function up(knex: Knex) {
  // Criar tabela
  return knex.schema.createTable("medals", (table) => {
    table.increments("id").primary();
    table.string("description").notNullable();
    table.integer("points").notNullable();
    table.string("image").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("medals");
  // Voltar atras (deletar a tabela)
}