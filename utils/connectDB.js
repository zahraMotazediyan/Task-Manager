import mongoose from "mongoose";

async function connectDB() {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL, {dbName: "todo"})
    console.log("connect to DB")
}

export default connectDB