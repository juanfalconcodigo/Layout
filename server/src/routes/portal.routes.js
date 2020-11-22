const { Router } = require('express');
const { portalController } = require('../controllers');

const router = Router();


router.route('/').get(portalController.portalGet);

module.exports = router;