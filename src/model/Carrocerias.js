const { Model, DataTypes } = require("sequelize");

class Carrocerias extends Model {
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
    this.hasMany(models.Cars, { foreignKey: 'carroceria_id', as: 'carros'})
  }

}

module.exports = Carrocerias;
