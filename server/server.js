const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auth', (req, res)=>{
    const {login, pass} = req.body;
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'db_name',
        password: '1234'
    });

    conn.query(`SELECT * FROM users WHERE login = "${login}" and pass = "${pass}"`, (err, results)=>{
        if (err) res.json({message: err.message});
        if (results.length < 1){
            res.json({message: "User not found"});
        }
        else{
            res.json({message: "Success"});
        }
    });
    conn.end();
});

app.post('/reg', (req, res)=>{

    const {login, pass, email} = req.body;
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'db_name',
        password: '1234'
    });

    conn.query(`INSERT INTO users (login, pass, email) VALUES ("${login}", "${pass}", "${email}")`, (err)=>{
        if (err) res.json({message: err.message});
        res.json({message: 'Success'});
    });
    conn.end();
});
app.listen(3500, ()=>{
    console.log('Server running on http://localhost:3500');
})