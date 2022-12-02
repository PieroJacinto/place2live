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

    const Visita = sequelize.define(alias, cols, config);

    
   Visita.associate = (models) => {
        Visita.belongsTo(models.Usuario, {
            foreignKey: "comprador",
            as: "users",
        });

        Visita.belongsTo(models.Inmuebles, {
            as: "inmuebles",
            foreignKey: "inmueble",
        });
    };

    return Visita;
};
