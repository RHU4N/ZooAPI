const db = require('./db');
const Animais = db.sequelize.define('Animais', {
    id_animais: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    especie: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: db.Sequelize.INTEGER,
        defaultValue: 0,
    },
    habitate: {
        type: db.Sequelize.STRING,
        defaultValue: '',
    }
}, { freezeTableName: true }); // Corrigido 'frezezeTableName' para 'freezeTableName'
// Animais.sync({ force: true });

module.exports = Animais;