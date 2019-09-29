const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const constantes = require('./util/constantes');

app.set('view engine', 'ejs');
app.set('views', 'templates');

app.use(bodyParser.urlencoded({ limit: '50mb', extended : true}));
app.use(bodyParser.json({limit : '50mb'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const database = require('./util/dbConnect');
database.connectar();

const routerBoleto = require('./routes/boleto');

app.use(routerBoleto);

const API_PORT = process.env.API_PORT || 3000;
const AMBIENTE = process.env.NODE_ENV || 'production';

app.listen(API_PORT, () => {
    console.log(`API Boleto em execução. \n Ambiente: ${AMBIENTE} \n PORTA: ${API_PORT}`);
});