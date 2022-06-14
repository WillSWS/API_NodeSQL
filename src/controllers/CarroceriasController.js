const Carrocerias = require('../model/Carrocerias')

module.exports = {
  async index(req, res) {
    const Carrocerias = await Carroceria.findAll()

    return res.json(Carrocerias)
  },

  async store(req, res) {
    const { name } = req.body

    const Carrocerias = await Carrocerias.create({ name })

    return res.json(Carrocerias)
  }
}
