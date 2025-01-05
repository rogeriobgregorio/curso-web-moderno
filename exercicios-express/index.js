const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "<h1>Bem-vindo ao servidor Express!</h1>"
  );
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta http://127.0.0.1:3000");
});
