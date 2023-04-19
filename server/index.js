const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'mysql',
    host: '127.0.0.1',
    password: 'heslo',
    database: 'webovetechnologie',
});

app.post('/create', (req, res) => {
    const meno = req.body.meno
    const priezvisko = req.body.priezvisko
    const vek = req.body.vek
    const pribuzenstvo = req.body.pribuzenstvo

    db.query("INSERT INTO formular (meno, priezvisko, vek, pribuzenstvo) VALUES (?,?,?,?)",
    [meno, priezvisko, vek, pribuzenstvo], 
    (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send("Dáta poslané")
        }
    });
});

app.get('/get', (req, res) => {
    db.query("SELECT meno, priezvisko, vek, pribuzenstvo FROM formular", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("Server beží na porte 3001");
});
