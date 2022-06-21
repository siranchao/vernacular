import mongoose from "mongoose";

//use .env file for safety
const url = "mongodb+srv://rpdumongoadmin:xSefQqB8IyW27TI4@rpdumongocluster.6nf0ury.mongodb.net/rpdu_vernacular"
const test_url = "mongodb+srv://siranchao:Lynn_9989@senecaweb.rm2yv.mongodb.net/Test-DB?retryWrites=true&w=majority"

export default async () => {
    // const db = await mongoose.connect(process.env.MONGODB_URL)
    const db = await mongoose.connect(test_url)
    if (db) {
        console.log(`mongoDB connection successful`);
    } else {
        console.log(`mongoDB connection failed`);
    }

    return db
}