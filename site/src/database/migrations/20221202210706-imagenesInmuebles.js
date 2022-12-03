"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("inmueble_imgs", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
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
            img: {
                type: DataTypes.STRING(255),
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
        await queryInterface.dropTable("inmueble_imgs");
    },
};
