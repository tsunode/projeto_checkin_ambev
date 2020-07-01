import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("locations").insert([
    { name: "Bar do Zé", type: "bar", is_open: true, image: 'bar_ze.jpg', city: 'Paraisópolis' , State: 'MG' },
    { name: "Bar do Gago", type: "bar", is_open: true, image: 'bar_gago.jpg', city: 'Paraisópolis' , State: 'MG' },
    { name: "Faceburguer", type: "hamburgueria", is_open: true, image: 'faceburguer.jpg', city: 'Paraisópolis' , State: 'MG' },
    { name: "Coisa e tal", type: "restaurante", is_open: true, image: 'coisaetal.jpg', city: 'Paraisópolis' , State: 'MG' },
    { name: "Cabocla", type: "restaurante", is_open: true, image: 'cabocla.jpg', city: 'Paraisópolis' , State: 'MG' },
    { name: "Crocodilos", type: "hamburgueria", is_open: true, image: 'crocodilos.jpg', city: 'Paraisópolis' , State: 'MG' },
    { name: "Bar do Tonhão", type: "bar", is_open: true, image: 'bar_tonhao.jpg', city: 'Paraisópolis' , State: 'MG' },
    { name: "Saideira", type: "bar", is_open: true, image: 'saideira.jpg', city: 'Paraisópolis' , State: 'MG' },
  ])
}