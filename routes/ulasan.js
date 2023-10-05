import { Router, request, response } from "express";
import { getUlasanById, postCreateUlasan } from "../controllers/ulasan.js";

const ulasanRouter = Router();

ulasanRouter.get("/id", (request, response) =>
    response.json({
        message: "ulasan",
    })
);

ulasanRouter.get("/:id", getUlasanById);

ulasanRouter.post("/", postCreateUlasan);

export default ulasanRouter;