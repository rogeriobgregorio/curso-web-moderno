function saudacao(nome) {
  return (req, res, next) => {
    console.log(`Seja bem vindo ${nome}.`);
    next();
  };
}

function mid(req, res, next) {
    console.log(`Seja bem vindo ${nome}.`);
    next();    
}

module.exports = saudacao;
