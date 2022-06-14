const Marcas = require('../model/Marcas');
const Cars = require('../model/Cars');
const Carrocerias = require('../model/Carrocerias');

module.exports= {
  async index (req,res) {
    const {marca_id} = req.params;

    const car = await Car.findByPk(car_id, {
      include: { association: 'cars'}
    });

    return res.json(car);
  },


  async store (req, res) {
      const { marca_id, carroceria_id} = req.params;
      //recolher o id das características do carro
      const {photo, descrição, preço} = req.body;

      const cars = await Cars.findByPk(marca_id, carroceria_id);
      //Achar um carro pela marca e carroceria

      if (!car) {         //Se o campo estiver vazio, não existir, retornar erro
        return res.status(400).json({error: 'Car not found '})
      }

      const car = await Car.create({
        photo,
        descrição,
        preço,
        marca_id,
        carroceria_id,

      });

      return res.json(car);

      
  }
}