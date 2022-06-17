import mongoose from 'mongoose'
import RecSchema from '../models/acronym'
import db from '../mongo-db'
db()

const Rec = mongoose.model('test', RecSchema)

export default async () => {
    console.log(`query all data`)
    const data = await Rec.find({
    })
    return data
}

