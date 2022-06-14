const User = require('../model/User')

module.exports= {
    async index(req, res) {
        const marcas = await User.findAll();

        return res.json(marcas);
    },
    
    async store(req, res) {
        const { name } = req.body;

        const user = await User.create({ name});

        return res.json(User);
    }
};