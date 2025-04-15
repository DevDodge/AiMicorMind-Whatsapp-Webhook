module.exports = function validateWebhook(event, payload) {
    if (!event || typeof event !== 'string') return false;
    if (!payload || typeof payload !== 'object') return false;

    // You can also add event type whitelist here
    const allowedEvents = [
        'message',
        'instance.connected',
        'instance.disconnected',
        // Add more
    ];

    return allowedEvents.includes(event);
};
