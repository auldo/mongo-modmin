import mongoose from "mongoose"

export default async function collections(req, res) {
    const database = req.query.database
    const collectionName = req.query.collection
    try {
        const connection = mongoose.createConnection('mongodb://localhost:27017/' + database, {
            user: "",
            pass: ""
        })
        connection.on('open', async function() {
            const result = await connection.collection(collectionName)
            const docs = await result.find()
            const documents = []
            await docs.forEach(doc => {
                documents.push(doc)
            })
            res.status(200).json([...documents])
        })
        connection.on('error', function(){
            res.status(500).json({error: "Database not found."})
        })
    } catch(e){
        res.status(500).json({ error: e })
    }
}