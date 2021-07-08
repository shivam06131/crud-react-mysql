import express from "express";
const app = express();
import sql from "mysql";
import cors from "cors";
import router from "./Routes/index.js";

app.use(express.json());
app.use(cors());
app.use("/", router);

const db = sql.createConnection({
  user: "root",
  password: "06131",
  host: "localhost",
  database: "employeesystem",
});

app.listen(3005, () => {
  console.log("server up and running on port 3005");
});

export default db;
