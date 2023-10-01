import bodyParser from "body-parser";
import express, { request } from "express";

const app = express();
const port = 3001;


app.use(express.static('public'));

app.get('/formlogin.html', (req, res) => {});
app.get('/formregister.html', (req, res) => {});
app.get('/edutech.html', (req, res) => {});
app.get('/courses.html', (req, res) => {});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});