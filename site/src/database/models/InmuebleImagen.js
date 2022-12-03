module.exports = (sequelize, DataTypes) => {
    const alias = "InmuebleImgs";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
    };
    const config = {
        tableName: "inmueble_imgs",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    };
    const InmuebleImgs = sequelize.define(alias, cols, config);

    InmuebleImgs.associate = (models) => {
        InmuebleImgs.belongsTo(models.Inmuebles, {
            as: "inmuebles",
            foreignKey: "inmueble",
        });
    };
    return InmuebleImgs;
};
