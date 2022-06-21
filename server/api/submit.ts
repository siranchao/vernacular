import Rec from '../models/acronym'

export default defineEventHandler(async event => {
    const body = await useBody(event)
    console.log(body)

    const newRec = new Rec({
        acroynm: body.acronym,
        explication: body.meaning,
        info: body.desc,
        reference: body.url
    })
    newRec.save((err) => {
        if (err) {
            console.log(`Fail to save new document: ${err}`)
        } else {
            console.log(`document saved`)
        }
    })
})