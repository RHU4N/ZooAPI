const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8081;

const Animais = require('./controllers/AnimaisController');
const Trabalhadores = require('./controllers/TrabalhadoresController');

app.use(bodyParser.json());
app.use(cors());
app.use('/',(req, res) => {
    res.send('Estou aqui');
});
app.use('/animais', Animais);
app.use('/trabalhadores', Trabalhadores);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});