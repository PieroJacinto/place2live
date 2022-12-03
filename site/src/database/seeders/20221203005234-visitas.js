"use strict";
const { faker } = require("@faker-js/faker");
const db = require("../models");
const dayjs = require("dayjs");

module.exports = {
    async up(queryInterface, Sequelize) {
        const visitas = [];
        const inmuebles = await db.Inmuebles.findAll();

        const estado = ["Pendiente", "Aceptada"];
        const comprador = await db.Usuarios.findAll();
        Array(300)
            .fill(0)
            .forEach((_, i) => {
                const randomInmuebles = inmuebles[Math.floor(Math.random() * inmuebles.length)];
                const randomEstado = estado[Math.floor(Math.random() * estado.length)];
                const randomComprador = comprador[Math.floor(Math.random() * comprador.length)];

                const randomVisitas = {
                    id: i + 1,
                    comprador: randomComprador.id,
                    inmueble: randomInmuebles.id,
                    fecha: dayjs(faker.date.soon(10)).format("YYYY-MM-DD"),
                    hora: faker.datatype.datetime(),                    
                    estado: randomEstado,
                    created_at: new Date(),
                    updated_at: new Date(),
                };
                visitas.push(randomVisitas);
            });
        await queryInterface.bulkInsert("visitas", visitas);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("visitas", null, {});
    },
};
