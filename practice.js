const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");

//   let createTodos = `create table if not exists todos(
//                            id int primary key auto_increment,
//                            title varchar(255)not null,
//                            completed tinyint(1) not null default 0
//                         )`;

//   connection.query(createTodos, function (err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

//   connection.end(function (err) {
//     if (err) {
//       return console.log(err.message);
//     }
//   });
// });

// connection.query(`SELECT * FROM students`, (err, res) => {
//   console.log(res);
// });

// connection.query(
//   `CREATE TABLE cars(ID int not null auto_increment, model varchar(30), make varchar(30), year YEAR,  primary key(ID))`,
//   (err, res, fields) => {
//     if (err) console.log(err.message);

//     console.log(fields);
//     console.log(res);
//   }
// );

// connection.query(
//   `INSERT INTO cars(model,make, year) values('A7', 'Audi', 2021),('X1', 'BWM', 2021), ('Model 3', 'Tesla', 2021)`,
//   (err, res) => {
//     if (err) console.log(err.message);

//     console.log(res);
//   }
// );
// connection.query(
//   `INSERT INTO cars(model,make, year) values('Corola', 'Toyota', 2009), ('Outlander', 'Mitsubishi', 2000)`,
//   (err, res) => {
//     if (err) console.log(err.message);

//     console.log(res);
//   }
// );

// connection.query(`SELECT * FROM cars`, (err, res) => {
//   console.log(res);
// });

// connection.query(`DELETE FROM cars where ID=5`);

const queries = [
  //   `SELECT * FROM cars where year >= 2015`,
  //   `SELECT * FROM cars where year = 2009`,
  `SELECT model, year FROM cars where make='tesla'`,
];

const getQueries = (arr) => {
  arr.forEach((query) => {
    connection.query(query, (err, res) => {
      if (err) console.log(err.message);
      console.log(res);
    });
  });
};

getQueries(queries);

connection.end();
