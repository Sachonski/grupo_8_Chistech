module.exports = (sequelize, dataTypes) => {
    let alias = 'Packaging'; // esto debería estar en singular

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        pack: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        value: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tableName: 'Packaging',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Packaging = sequelize.define(alias,cols,config);


    Packaging.associate = function(models){
        Packaging.hasMany(models.Product, {
            as: 'Product',
            foreignKey: 'packaging_id'
        })
    }

    return Packaging
}