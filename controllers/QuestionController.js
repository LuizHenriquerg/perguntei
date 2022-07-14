const QuestionModel = require('../models/NewQuestionModel');
const AnswerModel = require('../models/Answer');

module.exports = {
    question: async (req, res, next) => {
        try {
            let id_question = req.params.id;

            let question = await QuestionModel.findOne({
                raw: true,
                where: {
                    id: id_question
                }
            })

            if (question != undefined) {

                let resposta = await AnswerModel.findAll({
                    raw: true, where: {questao_id: id_question}
                });

                var respostas_list = [];

                if (resposta != undefined) {
                    respostas_list = resposta;
                }

                res.render('question', {
                    'question': question,
                    'answers': respostas_list
                });

            } else {
                res.redirect('/')
            }
        } catch (erro) {
            console.log(erro)
        }
    },
}