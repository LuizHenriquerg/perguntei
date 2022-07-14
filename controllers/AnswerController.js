const AnswerModel = require('../models/Answer');

module.exports = {
    answer: async (req, res, next) => {
        let id_question = req.params.id;
        let { resposta } = req.body;
        try {
            await AnswerModel.create({
                resposta: resposta,
                questao_id: id_question
            })
            return res.redirect('/question/'+id_question);
        } catch (error) {
            return res.redirect('/')
        }
    },
}