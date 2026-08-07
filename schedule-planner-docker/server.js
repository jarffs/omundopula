const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)){
    fs.mkdirSync(dataDir);
}

const db = new sqlite3.Database(path.join(dataDir, 'planner.db'), (err) => {
    if (err) console.error(err);
    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, role TEXT, color TEXT)");
        db.run("CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, employee_id INTEGER, title TEXT, start TEXT, end TEXT, color TEXT)");
    });
});

// Employees API
app.get('/api/employees', (req, res) => {
    db.all("SELECT * FROM employees", [], (err, rows) => {
        res.json(rows);
    });
});

app.post('/api/employees', (req, res) => {
    const { name, role, color } = req.body;
    db.run("INSERT INTO employees (name, role, color) VALUES (?, ?, ?)", [name, role, color], function(err) {
        if (err) return res.status(500).json({error: err.message});
        res.json({ id: this.lastID, name, role, color });
    });
});

app.delete('/api/employees/:id', (req, res) => {
    const id = req.params.id;
    db.run("DELETE FROM events WHERE employee_id = ?", [id], (err) => {
        if (err) return res.status(500).json({error: err.message});
        db.run("DELETE FROM employees WHERE id = ?", [id], (err2) => {
            if (err2) return res.status(500).json({error: err2.message});
            res.json({ success: true });
        });
    });
});

// Events API
app.get('/api/events', (req, res) => {
    db.all("SELECT events.*, employees.name as employee_name FROM events LEFT JOIN employees ON events.employee_id = employees.id", [], (err, rows) => {
        const events = rows.map(r => ({
            id: r.id,
            title: r.employee_name ? `${r.employee_name} (${r.title})` : r.title,
            start: r.start,
            end: r.end,
            backgroundColor: r.color,
            borderColor: r.color,
            extendedProps: { employee_id: r.employee_id }
        }));
        res.json(events);
    });
});

app.post('/api/events', (req, res) => {
    const { employee_id, title, start, end, color } = req.body;
    db.run("INSERT INTO events (employee_id, title, start, end, color) VALUES (?, ?, ?, ?, ?)", [employee_id, title, start, end, color], function(err) {
        if (err) return res.status(500).json({error: err.message});
        res.json({ id: this.lastID });
    });
});

app.delete('/api/events/:id', (req, res) => {
    db.run("DELETE FROM events WHERE id = ?", [req.params.id], (err) => {
        if (err) return res.status(500).json({error: err.message});
        res.json({ success: true });
    });
});

app.listen(3000, () => console.log('Planner running on port 3000'));
