import mongoose from "mongoose";

//MONGODB_URL="mongodb+srv://rpdumongoadmin:xSefQqB8IyW27TI4@rpdumongocluster.6nf0ury.mongodb.net/rpdu_vernacular"

//add .env file for url for dev
const url = "mongodb+srv://rpdumongoadmin:xSefQqB8IyW27TI4@rpdumongocluster.6nf0ury.mongodb.net/rpdu_vernacular"

export default async () => {
    // const db = await mongoose.connect(process.env.MONGODB_URL)
    const db = await mongoose.connect(url)
    if (db) {
        console.log(`mongoDB connection successful`);
    } else {
        console.log(`mongoDB connection failed`);
    }

    return db
}