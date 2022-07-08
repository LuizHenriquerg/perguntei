const express = require('express');
const app = express();

const bodyParser = require('body-parse');

app.set('view engine', 'ejs');

app.use(express.static('public')); 
app.use(bodyParser.urlencode({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Olá!')
});

app.listen(8080, () => {
    console.log('Site on!')
});