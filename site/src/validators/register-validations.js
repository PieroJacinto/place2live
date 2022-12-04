const { body, checkSchema } = require("express-validator");

const { Usuarios } = require("../database/models");

module.exports = [
    body("email", "Debe utilizar un email válido")
        .isEmail()
        .bail()
        .custom(async (value) => {
            const user = await Usuarios.findOne({
                where: {
                    email: value,
                },
            });
            if (user) {
                throw new Error("Email ya registrado");
            }
            return true;
        }),
    body("nombre", "Debe tener 2 o más caracteres").isLength({ min: 2 }),
    body("apellido", "Debe tener 2 o más caracteres").isLength({ min: 2 }),
    body(
        "password",
        "Debe tener al menos 8 caracteres, con una minúscula, una mayúscula, un numero y un símbolo"
    ).isStrongPassword(),
    body("rePassword", "Las contraseñas no coinciden")
        .notEmpty()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Las contraseñas no coinciden");
            }
            return true;
        }),
    checkSchema({
        avatar: {
            custom: {
                options: (value, { req }) => !!req.file,
                errorMessage: "Debe cargar un archivo de imagen",
            },
        },
    }),
];
