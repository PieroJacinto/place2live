module.exports = (sequelize, DataTypes) => {
    const alias = "Usuario";
    const cols = {
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
    };
    const config = {
        tableName: "usuarios",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    };

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
};
