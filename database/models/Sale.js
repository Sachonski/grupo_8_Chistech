module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Sale'; // esto debería estar en singular

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
        },

        user_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },

        product_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        
        amount : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        
        total : {
            type : dataTypes.DECIMAL,
            allowNull : false
        }
    };

    let config = {
        tableName: 'Sales',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Sale = sequelize.define(alias,cols,config);

    Sale.associate = function(models){

        Sale.belongsToMany(models.Product, {
            as: 'Sales',
            through: 'Product',
            foreignKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false
        })

        Sale.belongsToMany(models.User, {
            as: 'Sales',
            through: 'User',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }
    

    return Sale
};