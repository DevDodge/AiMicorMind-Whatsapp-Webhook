const webhookController = require("../controllers/webhookController");
const express = require("express");
const router = express.Router();

router.post('/:instance', webhookController.handleWebhook);

module.exports = router;