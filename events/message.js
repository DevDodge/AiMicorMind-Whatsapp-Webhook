module.exports = async function handleMessageReceived(payload, instanceId) {
    console.log(`📩 Message Received on instance ${instanceId}`);
    console.log('Content:', payload);

    // TODO: Add your logic here (store in DB, trigger bot, etc.)
};

