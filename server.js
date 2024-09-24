const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

let balance = 0; // رصيد المحفظة

app.use(cors());
app.use(bodyParser.json());

app.post('/update-balance', (req, res) => {
    const { amount } = req.body;
    balance += amount; // تحديث الرصيد
    res.json({ balance });
});

app.get('/get-balance', (req, res) => {
    res.json({ balance });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
