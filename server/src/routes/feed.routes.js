const { Router } = require('express');
const { feedController } = require('../controllers');
const router = Router();

router.route('/').get(feedController.getFeed);
router.route('/:id').get(feedController.getFeedById);

module.exports = router;