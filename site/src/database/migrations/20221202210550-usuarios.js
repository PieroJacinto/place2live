"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("usuarios", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nombre: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            apellido: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            telefono: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            localidad: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            avatar: {
                type: DataTypes.STRING(500),
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updated_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("usuarios");
    },
};
