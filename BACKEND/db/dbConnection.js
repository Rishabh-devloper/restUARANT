import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect("mongodb+srv://rishabh:LTrZPzIlXeruJRhI@cluster0.w1xgo.mongodb.net/?retryWrites=true", {
        dbName: "Restaurant",
    })
        .then(() => {
            console.log("DB connected")
        })
        .catch((err) => {
            console.log(err)
        })
}