import express, { Request, Response, RouterOptions } from "express";
import router from "./routes/router";
import cors from "cors";
import { dbconnection } from "./database/dbconfig";
import todorouter from "./routes/todorouter";

const app = express();
let url: any =
  process.env.DB_URL ||
  "mongodb+srv://sushilkc:kc12526688@cluster0.5khn2mb.mongodb.net/todo?retryWrites=true&w=majority";
let Port: Number = 5000;

//midelwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//router middleware
app.use("/api/auth", router);
app.use("/todo", todorouter);

//dbconnection
dbconnection(url);

app.listen(Port, (): void => {
  console.log("server running");
});
