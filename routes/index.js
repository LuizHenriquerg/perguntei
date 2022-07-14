const route = require('express').Router();

const HomeController = require('../controllers/HomeController');
const NewQuestionController = require('../controllers/NewQuestionController');
const Question = require('../controllers/QuestionController')
const Answer = require('../controllers/AnswerController')
const Category = require('../controllers/CategoryController')

route.get('/', HomeController.inicio);

route.get('/new/question', function(req, res) {
    res.render('new_question')
});

route.post('/new/question', NewQuestionController.new);

route.get('/category/:category', Category.category_question);

route.get('/question/:id', Question.question);
route.post('/answer/:id', Answer.answer);

module.exports = route;