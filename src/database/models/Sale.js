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
        },
        invoice : {
            type : dataTypes.STRING,
            allowNull : false           
        }
    };

    let config = {
        tableName: 'Sales',
        timestamps: false,
        underscored: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }

    const Sale = sequelize.define(alias,cols,config);

    Sale.associate = function(models){

        // Sale.hasMany(models.Product, {
        //     as: 'Products',
        //     foreignKey: 'id'
        // });
        
        // Sale.hasMany(models.User, {
        //     as: 'Users',
        //     foreignKey: 'id'
        // });

    }    

    return Sale
};