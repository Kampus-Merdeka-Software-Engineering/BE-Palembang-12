import { request, response } from "express";
import ulasan from "../models/ulasan.js";

export const findUlasanById = async (id) => {
    return await ulasan.findOne({ where: { id } });
};

export const createUlasan = async (nama, isi) => {
    return await ulasan.create({ nama, isi });
};