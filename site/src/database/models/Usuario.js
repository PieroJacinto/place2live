module.exports = (sequelize, DataTypes) => {
    const alias = "Usuarios";
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

    const Usuarios = sequelize.define(alias, cols, config);

    /*/Usuarios.associate = (models) => {
        Usuarios.hasMany(models.inmuebles, {
            as: "inmuebles",
            foreignKey: "propietario",
        });
        Usuarios.hasMany(models.visitas, {
            as: "visitas",
            foreignKey: "comprador",
        });    
    };*/
    return Usuarios;
};
