module.exports = (sequelize, DataTypes) => {
    const alias = "Visitas";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
    };
    const config = {
        tableName: "visitas",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    };

    const Visitas = sequelize.define(alias, cols, config);

    
    Visitas.associate = (models) => {
        Visitas.belongsTo(models.Usuario, {
            foreignKey: "comprador",
            as: "users",
        });

        Visitas.belongsTo(models.Inmuebles, {
            as: "inmuebles",
            foreignKey: "inmueble",
        });
    };

    return Visitas;
};
