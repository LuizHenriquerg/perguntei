const Sequelize = require('sequelize');
const connection = require('../utils/database/database');

const Question = connection.define('question', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    tag: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Question.sync({force: false});

module.exports = Question;