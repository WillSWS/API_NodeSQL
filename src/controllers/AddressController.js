const Address = require('../model/Address');

module.exports = {
    async store(req, res) {
        const { user_id} = req.params;
        const { zipcode, street, number} = req.body;
    }
};