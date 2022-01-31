module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; 

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

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
            allowNull: false,
            // unique : true
        },
        birth: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(500),
            allowNull: false,
            // unique : true
        },
        avatar: {
            type: dataTypes.STRING(500),
            allowNull: true
        },
        password: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        admin: dataTypes.TINYINT,
    };

    let config = {
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }

    const User = sequelize.define(alias,cols,config);


    User.associate = function(models){


        User.belongsToMany(models.Product, {
            as: 'Products',
            through: 'Sales',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        })

    }


    return User
};