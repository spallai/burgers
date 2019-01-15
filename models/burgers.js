module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("newburger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },        },
        {
            timestamps: false
        });

    return Burger;
};