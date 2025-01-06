module.exports = (app, texto) => {
  function salvar(req, res) {
    res.send(`Produto > salvar > ${texto} `);
  }

  function obter(req, res) {
    res.send(`Produto > obter > ${texto} `);
  }

  app.post("/produtos", salvar);
  app.get("/produtos", obter);

  return { salvar, obter };
};
