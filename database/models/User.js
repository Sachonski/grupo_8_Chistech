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
        admin: dataTypes.TINYINT(1)
    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const User = sequelize.define(alias,cols,config);

    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
    // User.associate = function(models){
    //     User.belongsTo(models.Genre, {
    //         as: 'genre',
    //         foreignKey: 'genre_id'
    //     })

    //     User.belongsToMany(models.Actor, {
    //         as: 'actors',
    //         through: 'actor_movie',
    //         foreignKey: 'movie_id',
    //         otherKey: 'actor_id',
    //         timestamps: false
    //     })

    // }


    return User
};