
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// استخدام CORS و body-parser
app.use(cors());
app.use(bodyParser.json());

let users = {}; // تخزين المستخدمين والأرصدة الخاصة بهم

// مسار لإنشاء مستخدم جديد
app.post('/register', (req, res) => {
    const { username } = req.body;
    if (users[username]) {
        return res.status(400).json({ error: 'اسم المستخدم موجود بالفعل' });
    }
    users[username] = { balance: 0 }; // يبدأ الرصيد عند التسجيل صفر
    res.json({ message: 'تم إنشاء المستخدم بنجاح', balance: 0 });
});

// مسار للحصول على رصيد المستخدم
app.get('/balance/:username', (req, res) => {
    const { username } = req.params;
    if (!users[username]) {
        return res.status(404).json({ error: 'المستخدم غير موجود' });
    }
    res.json({ balance: users[username].balance });
});

// مسار لإضافة رصيد للمستخدم
app.post('/add-balance/:username', (req, res) => {
    const { username } = req.params;
    const { amount } = req.body;
    if (!users[username]) {
        return res.status(404).json({ error: 'المستخدم غير موجود' });
    }
    if (amount > 0) {
        users[username].balance += amount;
        res.json({ balance: users[username].balance });
    } else {
        res.status(400).json({ error: 'يجب أن يكون المبلغ أكبر من الصفر' });
    }
});

// بدء السيرفر
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});