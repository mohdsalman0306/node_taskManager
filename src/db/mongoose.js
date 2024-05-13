const mongoose = require('mongoose')

//const uri = "mongodb+srv://mohdsalman0306:HjFiPIlyGS3Ct7UH@cluster0.9xvgmae.mongodb.net/task-manager-api?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGODB_URL)