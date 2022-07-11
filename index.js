const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rotas = require('./routes')

app.set('view engine', 'ejs');

app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', rotas);

app.listen(8080, () => {
    console.log('Site on!')
});