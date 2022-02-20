import express = require("express");
import { createServer } from "http";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.static('dist'));
const server = createServer(app);

server.listen(3000, () => { console.log("Server is running on port 3000") })


