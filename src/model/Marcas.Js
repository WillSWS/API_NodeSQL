const { Model, DataTypes } = require("sequelize");

class Marcas extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        
      },
      {
        sequelize
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Cars, { foreignKey: 'marca_id', as: 'carros'})
  }
}

module.exports = Marcas;
