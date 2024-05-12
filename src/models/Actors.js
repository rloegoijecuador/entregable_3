const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Actors = sequelize.define('actor', {
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    birthday: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
});

module.exports = Actors;