const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o App
const app = express();
app.use(express.json());//permitir receber dados via JSON
app.use(cors());//Liberar a aplicação para ser acessada livremente

//Iniciando o DB
mongoose.connect(
	'mongodb+srv://lucas:ferreira24680@cluster0-pv8jh.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true}
);

requireDir('./src/models');

//Centralizar arquivo de rotas
app.use('/api',require('./src/routes'));

app.listen(3001);