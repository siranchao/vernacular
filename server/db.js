import mongoose from "mongoose";

export default async () => {
    const db = await mongoose.connect(process.env.MONGODB_URL)

    if (db) {
        console.log(`mongoDB connection successful`);
    } else {
        console.log(`mongoDB connection failed`);
    }

    return db
}