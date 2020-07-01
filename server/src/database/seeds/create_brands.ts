import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('brands').insert([
        { name: 'SKOL', image: 'skol.png' },
        { name: 'BUDWEISER', image: 'budweiser.png' },
        { name: 'BRAHMA', image: 'brahma.png' },
        { name: 'BOHEMIA', image: 'bohemia.png' },
        { name: 'STELLA ARTOIS', image: 'stella_artois.png' },
    ]);
}