const QuestionModel = require('../models/NewQuestionModel');

module.exports = {
    new: async (req, res, next) => {
        let title = req.body.titulo;
        let description = req.body.descricao;
        let tag = req.body.tag;
        
        try {
            await QuestionModel.create({
                titulo: title,
                descricao: description,
                tag: tag
            })
            return res.redirect('/');
        } catch {
            return res.redirect('/')
        }
    },
}