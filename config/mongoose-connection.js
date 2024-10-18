const mongoose = require('mongoose')
const debuglog = require('debug')('development:Mongoose-Connection');

const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to database')
    } catch (error) {
        debuglog('MongoDb Connection error: -' + error)
        process.exit(1)
    }
}


module.exports = connectDb;