//Creation of trip model//
module.exports = function(sequelize, DataTypes) {
  const Trip = sequelize.define("Trip", {
    state: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    duration: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING }
  });

  Trip.associate = function(models) {
    Trip.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Trip;
};
