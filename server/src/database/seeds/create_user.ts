import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("users").insert([
    { name: 'Gabriel Tsunoda', password: 'fc90b94346f852ba28cdb29e5d69caeb', active: true },
   
  ])
}