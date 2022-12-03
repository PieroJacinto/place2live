"use strict";
const { faker } = require("@faker-js/faker");
const db = require("../models");

module.exports = {
    async up(queryInterface, Sequelize) {
        const inmuebles = [];
        const inmueblesImgs = [];
        const Usuarios = await db.Usuarios.findAll();
        const inmueblesImgsArray = [
            "casa1",
            "casa2",
            "casa3",
            "casa4",
            "casa5",
            "casa6",
            "casa7",
            "casa8",
            "casa9",
            "casa10",
            "casa11",
            "casa12",
            "casa13",
            "casa14",
            "casa15",
            "casa16",
            "casa17",
            "casa18",
            "casa19",
            "casa20",
            "casa21",
            "casa22",
            "casa23",
            "casa24",
            "casa25",
        ];
        const estadoArray = ["Disponible", "Vendido", "Alquilado"];
        const tipoArray = ["PH", "Departamento", "Casa"];

        Array(250)
            .fill(0)
            .forEach((_, i) => {
                const randomUserId = Usuarios[Math.floor(Math.random() * Usuarios.length)];
                const randomEstado = estadoArray[Math.floor(Math.random() * estadoArray.length)];
                const randomImg =
                    inmueblesImgsArray[Math.floor(Math.random() * inmueblesImgsArray.length)];
                const randomTipo = tipoArray[Math.floor(Math.random() * tipoArray.length)];
                const en_venta = Math.round(Math.random());
                const en_alquiler = Math.round(Math.random());

                const randomInmueble = {
                    id: i + 1,
                    propietario: randomUserId.id,
                    tipo: randomTipo,
                    en_venta: en_venta,
                    en_alquiler: en_alquiler,
                    mtrs: faker.datatype.number({ min: 30, max: 300 }),
                    localidad: faker.address.city(),
                    barrio: faker.lorem.word(),
                    direccion: faker.address.streetAddress(),
                    piso: faker.datatype.number({ min: 1, max: 20 }),
                    ambientes: faker.datatype.number({ min: 1, max: 6 }),
                    dormitorios: faker.datatype.number({ min: 1, max: 4 }),
                    baños: faker.datatype.number({ min: 1, max: 4 }),
                    precio: faker.datatype.number({ min: 10000, max: 80000 }),
                    descripcion: faker.lorem.paragraphs(1),
                    estado: randomEstado,
                    created_at: new Date(),
                    updated_at: new Date(),
                };
                inmuebles.push(randomInmueble);
                inmueblesImgs.push({
                    inmueble: randomInmueble.id,
                    img: randomImg,
                    created_at: new Date(),
                    updated_at: new Date(),
                });
            });
        await queryInterface.bulkInsert("inmuebles", inmuebles);
        await queryInterface.bulkInsert("inmueble_imgs", inmueblesImgs);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("inmueble_imgs", null, {});
        await queryInterface.bulkDelete("inmuebles", null, {});
    },
};
