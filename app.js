const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

const webhookRoutes = require('./routes/webhookRoutes'); // Adjust path if needed

app.use(bodyParser.json());

// Webhook endpoint
app.use('/webhook', webhookRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to our webhook!');
});

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
