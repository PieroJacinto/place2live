"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("visitas", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            comprador: {
                type: DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: "usuarios",
                    },
                    key: "id",
                },
                allowNull: false,
            },
            inmueble: {
                type: DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: "inmuebles",
                    },
                    key: "id",
                },
                allowNull: false,
            },
            fecha: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            hora: {
                type: DataTypes.TIME,
                allowNull: false,
            },
            estado: {
                type: DataTypes.STRING(500),
                allowNull: false,
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
        await queryInterface.dropTable("visitas");
    },
};
