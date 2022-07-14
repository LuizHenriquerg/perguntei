const QuestionModel = require('../models/NewQuestionModel');

module.exports = {
    inicio: async (req, res, next) => {
            try {
                let questions = await QuestionModel.findAll({raw: true});
                    
                res.render("index", {
                    'questions': questions,
                    'cat': false 
                });

                return console.log('')
            } catch (error) {
                return console.log(error)
            }
    },
}