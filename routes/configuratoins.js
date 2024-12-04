const express = require('express');
const {
    saveConfiguration,
    loadConfiguration,
    loadUserConfigurations,
    deleteConfiguration,
} = require('../controllers/configController');

const router = express.Router();

router.post('/save', saveConfiguration);
router.post('/load', loadConfiguration);
router.post('/load-configs', loadUserConfigurations);
router.post('/delete', deleteConfiguration);

module.exports = router;
