import knex from "knex";
import path from "path";

// __dirname retorna caminho que estamos
const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default connection;