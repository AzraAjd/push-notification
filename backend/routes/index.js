var express = require('express');
var router = express.Router();
var ctrlNotification = require('../controllers/push-notification');

router
  .route('/pushNotification')
  .get(ctrlNotification.getNotification);

module.exports = router;