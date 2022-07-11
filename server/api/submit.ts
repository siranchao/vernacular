import Rec from '../models/acronym'

export default defineEventHandler(async event => {
    const body = await useBody(event)
    console.log(body)

    const newRec = new Rec({
        acronym: body.acronym,
        explication: body.meaning,
        info: !body.desc ? "No infomation available" : body.desc,
        reference: body.url,
        creator: body.anonymous || !body.name ? "Anonym" : body.name,
    })

    try {
        const createdRec = await newRec.save()
        console.log(`document saved`)
        console.log(createdRec);
        return 200
    }
    catch (error) {
        console.log(`Fail to save new document: ${error}`)
        return 400
    }
})