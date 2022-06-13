import mongoose from 'mongoose'

const { Schema } = mongoose;

const RecSchema = new Schema({
    acroynm: String,
    explication: String,
    info: String,
    reference: String,
})

export default RecSchema;