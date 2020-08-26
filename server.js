const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando;
const app = express();
app.use(express.json());
app.use(cors());


// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3002);