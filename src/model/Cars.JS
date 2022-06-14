const { Model, DataTypes } = require('sequelize')

class Cars extends Model {
  static init(sequelize) {
    super.init(
      {
        fabricação: DataTypes.DATE,
        descrição: DataTypes.STRING,
        collor: DataTypes.STRING,
        preço: DataTypes.FLOAT
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Carrocerias, {foreignKey: 'carroceria_id', as:'carroceria'})
    this.belongsTo(models.Marcas, {foreignKey: 'marca_id', as:'marca'})
  }
}

module.exports = Cars
