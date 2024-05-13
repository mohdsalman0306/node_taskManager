const {MongoClient} = require('mongodb');


//const uri = "mongodb+srv://mohdsalman0306:HjFiPIlyGS3Ct7UH@cluster0.9xvgmae.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb+srv://mohdsalman0306:HjFiPIlyGS3Ct7UH@cluster0.9xvgmae.mongodb.net/?retryWrites=true&w=majority"

//const client = new MongoClient(url)
async function main() {
    const client = new MongoClient(url);
    try {
        await client.connect()
        console.log('connected')
    } catch(e) {
        console.log(e)
    } finally {
        await client.close()
    }
}

main().catch(console.error)