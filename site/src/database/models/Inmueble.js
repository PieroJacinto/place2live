module.exports = (sequelize, DataTypes) => {
    const alias = "Inmuebles";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
    };
    const config = {
        tableName: "inmuebles",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    };

    const Inmueble = sequelize.define(alias, cols, config);

    Inmueble.associate = (models) => {
        Inmueble.belongsTo(models.Usuarios, {
            foreignKey: "propietario",
            as: "usuarios",
        });

        Inmueble.hasMany(models.Visitas, {
            as: "visitas",
            foreignKey: "inmueble",
        });
        Inmueble.hasMany(models.InmuebleImgs, {
            as: "inmueble_imgs",
            foreignKey: "inmueble",
        });
    };

    return Inmueble;
};
