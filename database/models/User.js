module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; // esto debería estar en singular

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        first_name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        user_name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        birth: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(500),
            allowNull: true
        },
        password: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        admin: dataTypes.BOOLEAN,
    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const User = sequelize.define(alias,cols,config);


    User.associate = function(models){


        User.belongsToMany(models.Product, {
            as: 'Products',
            through: 'products_users',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        })

    }


    return User
};