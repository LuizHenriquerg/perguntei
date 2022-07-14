const QuestionModel = require('../models/NewQuestionModel');

module.exports = {
    category_question: async (req, res, next) => {
        let category = req.params.category;
        try {
            let question = await QuestionModel.findAll({
                raw: true,
                where: {
                    tag: category
                }
            })

            if (question != undefined) {
                res.render("index", {
                    'questions': question,
                    'cat': true,
                    'categoria': category.toUpperCase()
                });
                
            } else {
                res.redirect('/');
            }
        } catch (error) {
            console.log(error)
        }
    },
}