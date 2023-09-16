const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


// middle ware for express server
//url encoded and json data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

//in_stock is a boolean. True = in stock and False = not in stock. That's why answer is 10 and 3. 10 in stock and 3 not in stock. 
db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});

db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
