const mongoose = require("mongoose")
module.exports = async () => {


    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        await mongoose.connect(process.env.DB, connectionParams)
        console.log("database coonected succssesfully ")

    } catch (error) {
        console.log(error)
    }
}
