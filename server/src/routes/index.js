const { Router } = require('express');
const routerFeed = require('./feed.routes');
const routerPortal = require('./portal.routes');
const router = Router();

router.use('/feedbacks', routerFeed);
router.use('/portal', routerPortal);

module.exports = router;