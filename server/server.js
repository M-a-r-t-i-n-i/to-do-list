const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "tasks",
});

app.post("/create", (req, res) => {
  const task = req.body.task;

  db.query("INSERT INTO tasks (task) VALUES (?)", [task], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Task added");
    }
  });
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const task = req.body.task;
  db.query(
    "UPDATE tasks SET task = ? WHERE id = ?",
    [task, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM tasks WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
