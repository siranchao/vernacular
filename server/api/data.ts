import db from '../mongo-db'
import Rec from '../models/acronym'
db()

export default defineEventHandler(async event => {
    console.log(`query all data`)
    const data = await Rec.find({
    })
    return data
})

