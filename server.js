const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());
app.use(express.static((__dirname, 'public')));

// การเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'booking_system'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// ดึงข้อมูลห้องจากฐานข้อมูล
app.get('/api/rooms', (req, res) => {
    db.query('SELECT room_number FROM rooms', (err, results) => {
        if (err) {
            console.error('Failed to fetch rooms:', err);
            res.status(500).json({ error: 'Failed to fetch rooms' });
            return;
        }
        res.json({ rooms: results });
    });
});

// บันทึกการจองห้อง
app.post('/api/book', (req, res) => {
    const { name, room, checkin, checkout } = req.body;

    const query = 'INSERT INTO bookings (name, room_number, checkin, checkout) VALUES (?, ?, ?, ?)';
    db.query(query, [name, room, checkin, checkout], (err) => {
        if (err) {
            console.error('Failed to book room:', err);
            res.status(500).json({ error: 'Failed to book room' });
            return;
        }
        res.status(201).json({ message: 'Booking successful' });
    });
});

// เริ่มเซิร์ฟเวอร์
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
