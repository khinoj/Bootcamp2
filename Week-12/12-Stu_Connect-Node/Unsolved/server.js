// express require
const express = require('express');
// import mysql
const mysql = require('mysql2');

//Port number
const PORT = process.env.PORT || 3001;

// making express a varibale app
const app = express();

//
app.use(express.urlencoded({ extended: false }));

//
app.use(express.json());

//making a connection to the classlist_db 
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

//a classlist_db query to see all students
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// if 404 error end 
app.use((req, res) => {
  res.status(404).end();
});

// port listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
