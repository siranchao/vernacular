import mongoose from 'mongoose';
import Rec from '../models/acronym'

export default defineEventHandler(async event => {
    const body = await useBody(event)
    console.log(body);
    const id = new mongoose.Types.ObjectId(body.id)

    if (body.action) {
        await Rec.updateOne({ _id: id }, { $inc: { likes: 1 } })
    }
    else {
        await Rec.updateOne({ _id: id }, { $inc: { likes: -1 } })
    }
    const res = await Rec.findOne({ _id: id }).exec()

    return res.likes
})