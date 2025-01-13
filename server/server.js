//=========================== IMPORTS

//const { application } = require("express");
import express from "express";
import cors from "cors";
import pg, { Pool } from "pg";
import dotenv from "dotenv"

//========================
dotenv.config();

const app = express()


app.use(express.json())
app.use(cors());

app.post("guestBook", function (req, res) {
    console.log("this is the req,body", req,body);
    res.json({
        status: "Message Received"
    })
})

app.get("/", (req, res) => {
    res.json({message: "this is the root route"})
});

//=================================


const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
    connectionString: dbConnectionString,
});

app.post("/new-data", async (req, res)=> {
const data = req.body.formValues;
const query = await db.query(
    `INSERT INTO table_name (col, col2, col3) VALUES ($1, $2, $3)`,
    [data.input1, data,input2, data,input3]
);
await res,json(query.rows);
});

//app.listen(8080, function() {
//    console.log("Server listneing on port 8080");
//});

 const PORT = 8080;
 app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
 });