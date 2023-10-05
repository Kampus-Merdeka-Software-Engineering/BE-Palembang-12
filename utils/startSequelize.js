import { Sequelize } from "sequelize";
import sequelize from "../config/sequelize.js";
/**
 * 
 * @param {Sequelize} sequelize 
 */

export const startSequelize = async (sequelize) => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log("Connection to database established!");
        console.log(
            `Models available in sequelize: ${Object.keys(sequelize.models).join(
              ", "
            )}`
          );
    } catch (error) {
        console.error("Connection to database failure!", error);
    }
};