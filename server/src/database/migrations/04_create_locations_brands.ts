import Knex from "knex";

export async function up(knex: Knex) {
  // Criar tabela
  return knex.schema.createTable("locations_brands", (table) => {
    table.increments("id").primary();
    table.integer("id_location").notNullable().references("id").inTable("locations");
    table.integer("id_brand").notNullable().references("id").inTable("brands");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("locations_brands");
  // Voltar atras (deletar a tabela)
}