"use strict";
const { faker } = require("@faker-js/faker");
const db = require("../models");
const bcryptjs = require("bcryptjs");

module.exports = {
    async up(queryInterface, Sequelize) {
        const usuarios = [];
        const avatarArray = [
            "avatar-man-1.jpg",
            "avatar-man-2.jpg",
            "avatar-man-3.jpg",
            "avatar-man-4.jpg",
            "avatar-man-5.jpg",
            "avatar-man-6.jpg",
            "avatar-wom-2.jpg",
            "avatar-wom-3.jpg",
            "avatar-wom-4.jpg",
            "avatar-wom-5.jpg",
            "avatar-wom-6.jpg",
        ];
        Array(250)
        .fill(0)
        .forEach((_, i) => {
                const avatarImg = avatarArray[Math.floor(Math.random() * avatarArray.length)];
                const randomUser = {
                    id: i + 1,
                    nombre: faker.name.firstName(),
                    apellido: faker.name.lastName(),
                    email: faker.internet.email(),
                    telefono: faker.phone.number(),
                    password: bcryptjs.hashSync("1", 10),
                    localidad: faker.address.city(),
                    avatar: avatarImg,
                    created_at: new Date(),
                    updated_at: new Date(),
                };
                usuarios.push(randomUser);
            });
        await queryInterface.bulkInsert("usuarios", usuarios);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("usuarios", null, {});
    },
};
