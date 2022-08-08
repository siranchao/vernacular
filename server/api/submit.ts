import Rec from '../models/acronym'

export default defineEventHandler(async event => {
    const body = await useBody(event)
    console.log(body)

    const newRec = new Rec({
        acronym: body.acronym.trim().toUpperCase(),
        explication: capitalize(body.meaning.trim()),
        info: !body.desc ? "No infomation available" : body.desc.trim(),
        reference: body.url.trim(),
        creator: body.anonymous || !body.name ? "Anonym" : capitalize(body.name.trim()),
    })

    try {
        const createdRec = await newRec.save()
        console.log(`document saved`)
        console.log(createdRec);
        return { code: 200, data: createdRec }
    }
    catch (error) {
        console.log(`Fail to save new document: ${error}`)
        return { code: 400 }
    }
})

function capitalize(text: String) {
    const val = text
        .toLowerCase()
        .split(' ')
        .map(([first, ...rest]) => {
            return first.toUpperCase() + rest.join('')
        })

    return val.join(' ')
}