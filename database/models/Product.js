module.exports = (sequelize, dataTypes) => {

    let alias = 'Product'; // esto debería estar en singular

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,

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

        // packaging: {  // Esto debe ser una tabla nueva , de uno a muchos //
        //     type: dataTypes.INTEGER,
        //     allowNull: true
        // },

        category_id: {
            type: dataTypes.INTEGER,
            allowNull : false
        },

    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    }

    const Product = sequelize.define(alias,cols,config);

    return Product
};