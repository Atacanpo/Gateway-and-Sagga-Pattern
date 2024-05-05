const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT =4001; 

app.use(bodyParser.json());

app.use('/swagger', (req, res) => {
    res.redirect('http://localhost:5001/swagger/index.html');
});


app.use('/api', async (req, res) => {
    try {
        const originalUrl = `http://localhost:5001${req.url}`;
        const response = await axios({
            method: req.method,
            url: originalUrl,
            data: req.body,
            headers: req.headers
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: 'Failed to fetch data from original API' });
    }
});

app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});
