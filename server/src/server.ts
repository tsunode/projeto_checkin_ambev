import  path  from 'path';
import express from "express";
import cors from "cors";
import routes from "./routes";

const port = 3333;

// declarando uma constante para receber o express
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,"..","uploads")));

//rota padrão
app.get("/", function (req, res) {
  res.send("API - Cervejeiros [v.1 - 2020 | 28/06/2020]");
});

// Definindo porta 3333 para rodar a API
app.listen(port, function () {
  console.log('Servidor API - Cervejeiros [v.1 - 2020 | 28/06/2020] => ATIVO [PORTA: 3333]');
});


