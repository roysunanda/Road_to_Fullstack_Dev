import mysql from "mysql2";
import { faker } from "@faker-js/faker";
import express from "express";
import path from "path";
import methodOverride from "method-override";

const app = express();
const PORT = 8080;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "$4ndY231193",
});

// const query = "INSERT INTO user (id, username, email, password) VALUES ?";

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let data = [];
for (let i = 1; i <= 10; i++) {
  data.push(getRandomUser());
}

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join("views"));

app.get("/", (req, res) => {
  try {
    const q = `SELECT count(*) FROM user`;
    connection.query(q, (error, result) => {
      if (error) throw error;
      let [count] = Object.values(result[0]);
      console.log(count);
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
    res.status(404).send(`Error!!`);
  }
});

app.get("/user", (req, res) => {
  try {
    const q = `SELECT * FROM user`;
    connection.query(q, (error, users) => {
      if (error) throw error;
      // console.log(users[0]); // single data
      res.render("users.ejs", { users });
    });
  } catch (error) {
    console.log(error);
    res.status(404).send(`Error!!`);
  }
});

// Edit Route
app.get("/user/:id/edit", (req, res) => {
  // console.log(req.params);
  let { id } = req.params;
  let Q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(Q, (error, result) => {
      if (error) throw error;
      console.log(result);
      let user = result[0];
      res.render("edit_user.ejs", { user });
    });
  } catch (error) {
    console.log(error);
    res.status(404).send(`Error!!`);
  }
});

// UPDATE (DB) Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPassword, username: newUsername } = req.body;
  let Q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(Q, (error, result) => {
      if (error) throw error;
      // console.log(result);
      let user = result[0];
      if (formPassword !== user.password) {
        return res.send("Wrong Password!!");
      }

      let Q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
      connection.query(Q2, (error, result) => {
        if (error) throw error;
        // res.send(result);
        res.redirect("/user");
      });
    });
  } catch (error) {
    console.log(error);
    res.status(404).send(`Error!!`);
  }
});

app.listen(PORT, () => {
  console.log(`\n\nServer is listening at port: ${PORT}`);
});
