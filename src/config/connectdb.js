import mongoose from "mongoose";

export const connectToMongodb = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("DataBase Connected Successfully...");
    } catch (error) {
        console.log(error);
    }
};