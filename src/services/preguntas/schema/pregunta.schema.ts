import * as mongoose from 'mongoose';

export const preguntaSchema =
 new mongoose.Schema({pregunta: String, respuesta: String});