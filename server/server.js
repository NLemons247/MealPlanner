require('dotenv').config();

const connect = require("./connect");
const express = require("express");
const cors = require("cors");
const entrees = require("./entreesRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(entrees);

app.listen(PORT, async () => {
    await connect.connectToServer();
    console.log(`Server running on PORT ${PORT}`)
});


