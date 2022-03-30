module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Category'; // esto debería estar en singular

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(500),
            allowNull: false
        }
    };

    let config = {
        tableName: 'Category',
        timestamps: false,
        underscored: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }

    const Category = sequelize.define(alias,cols,config);


    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: 'Category',
            foreignKey: 'category_id'
        })
    }

    return Category
};