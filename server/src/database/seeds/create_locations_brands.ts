import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("locations_brands").insert([
    { id_location: 1, id_brand: 2 },
    { id_location: 1, id_brand: 3 },
    { id_location: 1, id_brand: 1 },
    { id_location: 1, id_brand: 4 },

    { id_location: 2, id_brand: 5 },
    { id_location: 2, id_brand: 2 },
    { id_location: 2, id_brand: 3 },
    { id_location: 2, id_brand: 1 },

    { id_location: 3, id_brand: 4 },
    { id_location: 3, id_brand: 5 },
    { id_location: 3, id_brand: 3 },
    { id_location: 3, id_brand: 2 },

    { id_location: 4, id_brand: 1 },
    { id_location: 4, id_brand: 2 },
    { id_location: 4, id_brand: 4 },
    { id_location: 4, id_brand: 3 },

    { id_location: 5, id_brand: 3 },
    { id_location: 5, id_brand: 2 },
    { id_location: 5, id_brand: 1 },
    { id_location: 5, id_brand: 5 },

    { id_location: 6, id_brand: 2 },
    { id_location: 6, id_brand: 3 },
    { id_location: 6, id_brand: 1 },
    { id_location: 6, id_brand: 5 },

    { id_location: 7, id_brand: 1 },
    { id_location: 7, id_brand: 2 },
    { id_location: 7, id_brand: 3 },
    { id_location: 7, id_brand: 5 },

    { id_location: 8, id_brand: 2 },
    { id_location: 8, id_brand: 3 },
    { id_location: 8, id_brand: 1 },
    { id_location: 8, id_brand: 4 },
   
  ])
}