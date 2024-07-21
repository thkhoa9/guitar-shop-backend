const mongoose = require("mongoose")
mongoose.set("strictQuery", true)
const connect = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        return con;
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = connect