import Knex from "knex";

export async function up(knex: Knex) {
  // Criar tabela
  return knex.schema.createTable("users_checkin", (table) => {
    table.increments("id").primary();
    table.integer("id_user").notNullable().references("id").inTable("users");
    table.integer("id_location").notNullable().references("id").inTable("locations");
    table.dateTime("datetime").notNullable();
    table.integer("points").notNullable();

  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users_checkin");
  // Voltar atras (deletar a tabela)
}