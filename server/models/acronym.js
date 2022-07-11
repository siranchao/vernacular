import mongoose from 'mongoose'

const { Schema } = mongoose;

const RecSchema = new Schema({
    acronym: {
        type: String,
        required: true
    },
    explication: {
        type: String,
        required: true
    },
    info: {
        type: String,
    },
    creator: {
        type: String,
    },
    reference: {
        type: String,
        default: ""
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    }
})

const Rec = mongoose.model('test_collection', RecSchema)

export default Rec;