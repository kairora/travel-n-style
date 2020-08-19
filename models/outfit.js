//Creation of trip model//
module.exports = function(sequelize, DataTypes) {
  const Outfit = sequelize.define("Outfit", {
    top: { type: DataTypes.STRING },
    bottom: { type: DataTypes.STRING },
    accessory: { type: DataTypes.STRING }
  });

  Outfit.associate = function(models) {
    Outfit.belongsTo(models.Trip, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Outfit;
};
