### Tutorial Completo: Criando uma API REST com Node.js, Express e Sequelize (ORM)

Este tutorial mostra como criar uma API REST usando Node.js, Express e Sequelize. Ele inclui práticas recomendadas, como tratamento de erros, autenticação/autorização e manipulação de relacionamentos no banco de dados.

---

### **Pré-requisitos**
- Node.js instalado.
- Conhecimento básico de JavaScript.
- PostgreSQL/MySQL (pode ser adaptado para outros bancos compatíveis com Sequelize).

---

### **1. Configurando o Projeto**

#### 1.1. Inicializando o projeto
1. Crie uma pasta para o projeto:
   ```bash
   mkdir nodejs-api && cd nodejs-api
   ```
2. Inicie o projeto com `npm`:
   ```bash
   npm init -y
   ```

#### 1.2. Instalando dependências
Instale as bibliotecas principais:
```bash
npm install express sequelize pg pg-hstore bcrypt jsonwebtoken dotenv
```
Instale as dependências de desenvolvimento:
```bash
npm install --save-dev nodemon eslint
```

---

### **2. Estrutura do Projeto**

Crie a estrutura:
```bash
src/
├── config/
│   └── database.js
├── controllers/
│   └── userController.js
├── middlewares/
│   └── errorMiddleware.js
├── models/
│   └── index.js
├── routes/
│   └── userRoutes.js
├── utils/
│   └── tokenUtil.js
├── app.js
├── server.js
```

---

### **3. Configuração do Banco de Dados**

#### 3.1. Configuração com Sequelize
No arquivo `src/config/database.js`:
```javascript
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // Troque para 'mysql' se for o caso
  logging: false,
});

module.exports = sequelize;
```

No arquivo `.env`:
```env
DB_NAME=seu_banco
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
```

#### 3.2. Iniciando o Sequelize
No arquivo `src/models/index.js`:
```javascript
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {
  sequelize,
  Sequelize,
  models: {},
};

// Importar modelos
db.models.User = require('./user')(sequelize, Sequelize);

// Relacionamentos
require('./relations')(db.models);

module.exports = db;
```

---

### **4. Criando o Modelo de Usuário**

No arquivo `src/models/user.js`:
```javascript
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
```

---

### **5. Configurando Rotas e Controladores**

#### 5.1. Controlador de Usuário
No arquivo `src/controllers/userController.js`:
```javascript
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { models } = require('../models');
const { generateToken } = require('../utils/tokenUtil');

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await models.User.create({ name, email, password: hashedPassword });
    res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await models.User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    next(err);
  }
};
```

#### 5.2. Rotas de Usuário
No arquivo `src/routes/userRoutes.js`:
```javascript
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
```

---

### **6. Configuração do Middleware de Erros**

No arquivo `src/middlewares/errorMiddleware.js`:
```javascript
module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
};
```

---

### **7. Configurando o Servidor**

#### 7.1. Configuração do `app.js`
No arquivo `src/app.js`:
```javascript
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorMiddleware);

module.exports = app;
```

#### 7.2. Configuração do Servidor
No arquivo `server.js`:
```javascript
require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/config/database');

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  console.log('Database connected!');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
```

---

### **8. Relacionamentos no Sequelize**

No arquivo `src/models/relations.js`:
```javascript
module.exports = (models) => {
  // Relacionamento exemplo (um-para-muitos)
  models.User.hasMany(models.Post, { foreignKey: 'userId' });
  models.Post.belongsTo(models.User, { foreignKey: 'userId' });
};
```

---

### **9. Testando a API**

1. Registre um usuário:
   ```bash
   curl -X POST http://localhost:3000/api/users/register -H "Content-Type: application/json" -d '{"name":"John","email":"john@example.com","password":"123456"}'
   ```
2. Faça login:
   ```bash
   curl -X POST http://localhost:3000/api/users/login -H "Content-Type: application/json" -d '{"email":"john@example.com","password":"123456"}'
   ```

---

### **10. Melhores Práticas**
- **Autenticação JWT**: Use tokens seguros e expirações curtas.
- **Validação de Dados**: Use bibliotecas como `Joi` ou `express-validator`.
- **Documentação**: Gere documentação com `Swagger`.
- **Segurança**: Adicione cabeçalhos HTTP com `helmet` e configure CORS adequadamente.

---

### **11. Protegendo Rotas com JWT**

#### 11.1. Criando Middleware de Autenticação
No arquivo `src/middlewares/authMiddleware.js`:
```javascript
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
```

Certifique-se de ter a variável de ambiente `JWT_SECRET` configurada no `.env`:
```env
JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=1h
```

#### 11.2. Gerando Tokens
No arquivo `src/utils/tokenUtil.js`, já mencionado no tutorial:
```javascript
require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};
```

#### 11.3. Protegendo Rotas
Exemplo de rota protegida no arquivo `src/routes/userRoutes.js`:
```javascript
const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

// Rotas protegidas
router.get('/profile', authMiddleware, async (req, res) => {
  res.json({ message: `Welcome, user ${req.user.email}!` });
});

module.exports = router;
```

---

Com essa extensão, o tutorial cobre a segurança básica com JWT, incluindo geração, verificação e proteção de rotas.

Essa estrutura cobre a criação de uma API REST funcional com boas práticas.