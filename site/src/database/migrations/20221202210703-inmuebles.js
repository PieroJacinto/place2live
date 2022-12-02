"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("inmuebles", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            propietario: {
                type: DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: "usuarios",
                    },
                    key: "id",
                },
                allowNull: false,
            },
            tipo: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            en_venta: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            en_alquiler: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            mtrs: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            localidad: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            barrio: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            direccion: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            piso: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            ambientes: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            dormitorios: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            baños: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            precio: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            descripcion: {
                type: DataTypes.STRING(2000),
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
        await queryInterface.dropTable("inmuebles");
    },
};
