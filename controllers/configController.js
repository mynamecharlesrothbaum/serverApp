const {
    getUserId,
    getConfiguration,
    saveConfiguration,
    deleteConfiguration,
    getAllConfigurations,
} = require('../models/configModel');

exports.saveConfiguration = async (req, res) => {
    try {
        const { username, configName, date_updated, tape, rules } = req.body;
        const userId = await getUserId(username);

        // Save configuration logic
        const configId = await saveConfiguration(userId, configName, JSON.stringify(tape), date_updated);

        res.status(200).json({ message: 'Configuration saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Other functions (loadConfiguration, deleteConfiguration) follow a similar pattern.
