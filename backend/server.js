const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// 模拟API端点（替换为真实数据库，如MongoDB）
const mockNumbers = [ /* 同script.js的mockNumbers */ ];

app.get('/api/numbers', (req, res) => {
    res.json(mockNumbers);
});

app.get('/api/sms/:id', (req, res) => {
    const number = mockNumbers.find(n => n.id === parseInt(req.params.id));
    res.json(number ? number.smses : []);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});