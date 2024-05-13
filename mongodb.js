const { MongoClient } = require('mongodb');

//const uri = "mongodb+srv://mohdsalman0306:HjFiPIlyGS3Ct7UH@cluster0.9xvgmae.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'task-manager'
const uri = "mongodb+srv://mohdsalman0306:HjFiPIlyGS3Ct7UH@cluster0.9xvgmae.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri)


async function main() {
    await client.connect()
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    //const collection = db.collection('users');
    // await collection.insertOne({
    //     name:'Salman',
    //     age:31
    // }, (error, result) => {
    //     if(error) {
    //         console.log('unble to insert...')
    //     }
    //     console.log(result.opt)
    // })

    // await collection.insertMany([
    //     {name: 'Irfan 1', age: 34},
    //     {name: 'Mubina 1', age: 37}
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('unable to insert many!')
    //     }
    //     return confirm.log(result.insertedCount)
    // })

    const taskCollection = db.collection('tasks')
    await taskCollection.insertMany([
        {
            description: 'TypeScript Task 1 description',
            completed: false
        },
        {
            description: 'Node.js Task description',
            completed: true
        },
        {
            description: 'React.js Task description',
            completed: false
        }
    ], (error, result) => {
        if(error) {
            return console.log('unable to create records')
        }
        return console.log(result.opt)
    })

    return 'done.';
}

main().then(console.log)
.catch(console.error)
.finally(() => client.close())

