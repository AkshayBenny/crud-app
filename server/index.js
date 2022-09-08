require('dotenv').config()
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const app = express()
const port = process.env.PORT || 5000

//connect to database
connectDB()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}`)
})
