//Creation of trip model//
module.exports = function(sequelize, DataTypes) {
  const Outfit = sequelize.define("Outfit", {
    name: { type: DataTypes.STRING },
    top: { type: DataTypes.STRING },
    bottom: { type: DataTypes.STRING },
    shoe: { type: DataTypes.STRING },
    accessory: { type: DataTypes.STRING }
  });

  Outfit.associate = function(models) {
    Outfit.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Outfit;
};
