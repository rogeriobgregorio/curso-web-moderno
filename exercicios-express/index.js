const express = require("express");
const app = express();
const saudacao = require("./saudacao-mid");
const usuarioApi = require("./api/usuario");
require("./api/produto")(app, "com param!");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use(saudacao("Rogério"));

app.post("/usuarios", usuarioApi.salvar);
app.get("/usuarios", usuarioApi.obter);

app.use((req, res, next) => {
  console.log("Servidor express rodando!");
  next();
});

app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `CLiente relatório: completo = ${req.query.completo}, ano = ${req.query.ano}.`
  );
});

/*
app.post("/corpo", (req, res) => {
  let corpo = "";

  req.on("data", (parte) => {
    corpo += parte;
  });

  req.on("end", () => {
    res.send(corpo);
  });
});
*/

app.post("/corpo", (req, res) => {
  res.send(req.body);
});

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get("/", (req, res) => {
  res.send("<h1>Bem-vindo ao servidor Express!</h1>");
});

app.get("/one", (req, res) => {
  res.json({
    name: "Rogério Gregório",
    email: "bernardo.rogerio93@gmail.com",
  });
});

app.get("/all", (req, res) => {
  res.json({
    data: [
      {
        name: "Rogério Gregório",
        email: "bernardo.rogerio93@gmail.com",
      },
      {
        name: "Heloísa Gregório",
        email: "matos.heloísa16@gmail.com",
      },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  });
});

app.use((req, res) => {
  res.send("<h1>Bem-vindo ao servidor Express!</h1>");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta http://127.0.0.1:3000");
});
