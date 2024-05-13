const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


// to get the request in the json format
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// app listen with port
app.listen(port, () => {
    console.log('Server starts up on port ' + port)
})