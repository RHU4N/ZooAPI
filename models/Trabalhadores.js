const db = require('./db');
const Trabalhadores = db.sequelize.define('Trabalhadores', {
    id_trabalhador: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    funcao:{
        type: db.Sequelize.STRING,
        defaultValue: '',
    }
}, {freezeTableName: true, // não pluraliza o nome da tabela
});

// Trabalhadores.sync({force: true});
module.exports = Trabalhadores;