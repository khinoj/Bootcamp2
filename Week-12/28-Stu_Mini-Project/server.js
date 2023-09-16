const express = require('express');
const path = require('path');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'movie_db'
    },
    console.log(`Connected to the movie_db.`)
  );
  

db.query(`Select * FROM reviews`, function (err, results) {
    console.log(results);
});

app.get('/', (req, res) => {
    res.json();
  });

app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });


//http://localhost:3001/