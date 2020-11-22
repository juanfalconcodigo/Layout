const { dataFake: { PortalsResponseFake } } = require('../utils');


const portalGet = (req, res) => {
    return res.status(200).json({
        ...PortalsResponseFake
    });
}

module.exports = {
    portalGet
}