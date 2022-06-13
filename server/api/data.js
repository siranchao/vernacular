import mongoose from 'mongoose'
import RecSchema from '../models/acronym'
import db from '../db'
db()

const Rec = mongoose.model('Test', RecSchema)

export default async () => {
    console.log(`return mongo data`)
    const data = await Rec.find({
    })
    return data
}




