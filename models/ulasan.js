import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const ulasan = sequelize.define("ulasan", {
    nama: DataTypes.STRING,
    isi: DataTypes.STRING
});

export default ulasan;