module.exports = (sequelize, dataTypes) => {

    let alias = 'Product'; // esto debería estar en singular

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
        },

        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        image: {
            type: dataTypes.STRING(500),
            allowNull: false
        },

        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        packaging_id: {  
            type: dataTypes.INTEGER,
            allowNull: true
        
        },

        category_id: {
            type: dataTypes.INTEGER,
            allowNull : false
        },

        discount: {
            type: dataTypes.INTEGER,
            allowNull: true
        },

    };

    let config = {
        timestamps: false,
        underscored: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function(models){

        // Product.hasMany(models.Sale, {
        //     foreignKey: 'product_id'
        // })

        // // Sale.hasMany(models.Product, {
        // //     foreignKey: 'id'
        // // });

        Product.belongsTo(models.Packaging, {
            as: 'Packaging',
            foreignKey: 'packaging_id'
        }),
        Product.belongsTo(models.Category, {
            as: 'Category',
            foreignKey: 'category_id'
        })


        // Product.belongsToMany(models.User, {
        //     // as: 'Users',
        //     through: 'Sales',
        //     foreignKey: 'product_id',
        //     otherKey: 'user_id',
        //     timestamps: false
        // })
    }

    return Product
};