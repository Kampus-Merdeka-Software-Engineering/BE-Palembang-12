import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { DataTypes, Sequelize } from "sequelize";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(cors());

const sequelize = new Sequelize("mysql://root:oRKNm6QXlg87KVsHtgNA@containers-us-west-76.railway.app:8013/railway", {
    dialect: 'mysql',
});

const Ulasan = sequelize.define('Ulasan', {
    nama: {
        type:DataTypes.TEXT,
        allowNull: false,
    },
    ungkapan: {
        type:DataTypes.TEXT,
    }
}, {
    tableName: 'ulasan',
    timestamps: false
});

const runServer = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully!');

        app.get('/ulasan', async(req, res) => {

            let ulasan = await Ulasan.findAll();
            res.json(ulasan);
        });

        app.post('/ulasan', async (req, res) => {
            let data = req.body;
            let create = await Ulasan.create({
                nama: data.nama,
                ungkapan: data.ungkapan,
            })
            res.json(create)
        });

        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        });
    } catch (error) {
        console.error(error);
    }
};

runServer();
