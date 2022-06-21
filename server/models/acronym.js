import mongoose from 'mongoose'

const { Schema } = mongoose;

const RecSchema = new Schema({
    acroynm: {
        type: String,
        required: true
    },
    explication: String,
    info: String,
    reference: String,
})

const Rec = mongoose.model('test_collection', RecSchema)

export default Rec;