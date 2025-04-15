const validateWebhook = require('../utils/validateWebhook');

exports.handleWebhook = async (req, res) => {
    const instanceId = req.params.instance;
    const { event, payload } = req.body;

    if (!validateWebhook(event, payload)) {
        return res.status(400).json({ error: 'Invalid event or payload' });
    }

    try {
        console.log(`🔔 Event received from instance ${instanceId}: ${event}`);

        // Dynamically load event logic
        const eventHandler = require(`../events/${event.replace('.', '_')}`);
        await eventHandler(payload, instanceId);

        return res.status(200).json({ status: 'success' });
    } catch (err) {
        console.error('❌ Error handling event:', err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
