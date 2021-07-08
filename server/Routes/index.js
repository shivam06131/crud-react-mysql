import express from "express";
const router = express.Router();
import db from "../index.js";

router.post("/create", (req, res) => {
  const { name, age, country, position, wage } = req.body;
  console.log(req.body);
  db.query(
    "INSERT INTO employees (name,age ,country,position, wage) VALUES(? , ? , ? , ? ,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("data was added sucessfully");
      }
    }
  );
});

router.get("/getEmployees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.patch("/update", (req, res) => {
  const { name, age, country, position, wage, oldName } = req.body;
  db.query(
    `UPDATE employees SET name = ? , age = ? , country= ? , position= ? , wage= ? WHERE name= ?`,
    [name, age, country, position, wage, oldName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
});

router.delete("/delete", (req, res) => {
    const {id} = req.body;
  db.query("DELETE FROM employees WHERE id= ?", [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("failed");
    } else {
      res.status(200).send(result);
    }
  });
});
export default router;
