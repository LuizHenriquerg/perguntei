const Sequelize = require('sequelize');

const connection = new Sequelize(
    'perguntei',
    'postgres',
    'Db284811#',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

module.exports = connection;