const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Name = sequelize.define('name', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
});

module.exports = Name;