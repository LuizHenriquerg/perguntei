const Sequelize = require('sequelize');
const connection = require('../utils/database/database');

const Answer = connection.define('answer', {
    resposta: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questao_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Answer.sync({force: false});

module.exports = Answer;