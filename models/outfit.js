//Creation of trip model//
module.exports = function(sequelize, DataTypes) {
  const Outfit = sequelize.define("Outfit", {
    outfitname: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    weather: { type: DataTypes.STRING }
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
