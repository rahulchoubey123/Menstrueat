"use strict";

const express = require("express");
const cors= require("cors");
const bodyParser= require("body-parser");
const port = 4000;
const app = express();

const dietFetch = require("./dietFetch");

app.use(cors());
app.use(bodyParser.json());
app.use(dietFetch);

app.listen(port,()=>{
    console.log("Server is listening on http://localhost:"+port);
});
