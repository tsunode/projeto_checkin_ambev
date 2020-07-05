import Knex from "knex";

export async function up(knex: Knex) {
  // Criar tabela
  return knex.schema.createTable("locations", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("type").notNullable();
    table.boolean("is_open").notNullable();
    table.string("event").nullable
    table.dateTime("start_evnet").nullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("locations");
  // Voltar atras (deletar a tabela)
}