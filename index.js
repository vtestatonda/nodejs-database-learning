const { Pool } = require("pg");

const config = {
  host: "localhost",
  user: "postgres",
  password: "pancho",
  database: "library",
};

const pool = new Pool(config);

//Until here I make the connection to the database

const getBooks = async () => {
  console.log("s");
  try {
    const res = await pool.query("select * from books");
    console.log(res.rows);
    //Of all the data that it sends me, I only want the rows
    pool.end();
    //with "pool end" we are closing the connection to the DB
  } catch (e) {
    console.log(e);
  }
};
//i see the data
//getBooks();

const insertUser = async () => {
  try {
    const text = "INSERT INTO users(username, password) VALUES ($1, $2)";
    const values = ["john", "john1234"];
    //what we are doing above is the same as "INSERT INTO users(username, password) VALUES ("john", "john1234)" but it is done in the previous way to be able to validate the data.
    const res = await pool.query(text, values);
    console.log(res);
    pool.end();
  } catch (e) {
    console.log(e);
  }
};
//insert new data to DB
//insertUser();

const deleteUser = async () => {
  try {
    const text = "DELETE FROM users WHERE username = $1";
    const value = ["john"];
    const res = await pool.query(text, value);
    console.log(res);
    pool.end();
  } catch (e) {
    console.log(e);
  }
};

//delete data from the BD
//deleteUser()

const editUser = async () => {
  const text = "UPDATE users SET username = $1 WHERE username = $2";
  const values = ["John", "ryan"];
  const res = await pool.query(text, values);
  console.log(res);
  pool.end();
};

//edit data
editUser();
