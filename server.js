import express, { Router } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import sequelize from "./config/sequelize.js";
import { startSequelize } from './utils/startSequelize.js';
import ulasanRouter from './routes/ulasan.js';

dotenv.config();

const app = express();
const router = Router();
const port = process.env.PORT;

app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(express.static("public"));

// app.post();
router.use("/api/ulasan", ulasanRouter);
app.use(router);

app.use("/ulasan", express.static("public/ulasan.html"));


startSequelize(sequelize);

sequelize.authenticate().then( () => {
    console.log("Database Connection has been established successfully.");
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});