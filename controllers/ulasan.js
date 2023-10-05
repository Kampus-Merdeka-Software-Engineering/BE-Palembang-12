import express, { request, response } from 'express';
import { createUlasan, findUlasanById } from '../service/ulasan.js';
import { httpStatusMessage } from '../constants/httpStatusMessage.js';



/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getUlasanById = async (request, response) => {
    const { id } = request.params;
    const ulasan = await findUlasanById(id);
    response.json({
        data: ulasan,
        message: httpStatusMessage[response.statusCode],
    });
};

export const postCreateUlasan = async (request, response) => {
    const { nama, isi } = request.body;
    const ulasan = await createUlasan(nama, isi);

    console.log({ body: request.body });
    response.json({
        data: ulasan,
        message: httpStatusMessage[response.statusCode],
    });
};