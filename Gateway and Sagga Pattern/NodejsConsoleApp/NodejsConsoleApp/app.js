const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;


app.use(bodyParser.json());


app.post('/QueryTuition', async (req, res) => {
});

app.post('/StudentPayment', async (req, res) => {
});

app.post('/SagaExecution', async (req, res) => {
    try {
        const tuitionResult = await queryTuition(req.body.studentNumber);

        const paymentResult = await studentPayment(req.body.studentNumber, req.body.period, req.body.paymentTotal);

        res.json({ success: true, message: 'Saga execution successful' });
    } catch (error) {

        res.status(500).json({ success: false, message: 'Saga execution failed', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

async function queryTuition(studentNumber) {
}

async function studentPayment(studentNumber, period, paymentTotal) {
}
