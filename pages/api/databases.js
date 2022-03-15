import mongoose from "mongoose"
const Admin = mongoose.mongo.Admin

export default function databases(req, res){
    try {
        const connection = mongoose.createConnection('mongodb://localhost:27017', {
            user: "",
            pass: ""
        })
        connection.on('open', async function() {
            const results = await new Admin(connection.db).listDatabases()
            res.status(200).json([...results.databases])
        });
    } catch(e){
        res.status(200).json({ error: e })
    }
}