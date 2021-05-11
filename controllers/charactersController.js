const axios = require("axios");
const { response } = require("express");

module.exports = {
    search: function (req, res) {
        axios.get(`/character/search?name=${req.params.name}&private_key=${process.env.API_KEY}`)
            .then(result => {
                res.json(result.data.Results[0])
            })
    }
};

