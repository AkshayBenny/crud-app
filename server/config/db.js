const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const client = await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to mongodb database........')
    return client
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
