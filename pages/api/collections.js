import mongoose from "mongoose"

export default async function collections(req, res) {
    const database = req.query.database
    try {
        const connection = mongoose.createConnection('mongodb://localhost:27017/' + database, {
            user: "",
            pass: ""
        })
        connection.on('open', async function() {
            const collections = []
            const results = await connection.db.listCollections()
            await results.forEach(s => {
                collections.push(s.name)
            })
            res.status(200).json([...collections])
        });
    } catch(e){
        res.status(200).json({ error: e })
    }
}