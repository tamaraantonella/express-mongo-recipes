import {Db, MongoClient, ServerApiVersion} from 'mongodb'
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.MONGO_URL || '';

let db: Db;
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export async function runDbConnection() {
    try {
        await client.connect();
        await client.db("admin").command({ping: 1});
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        db = client.db()
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        throw err;
    }
}

export function getDb() {
    if(!db) {
        throw new Error('Must connect to MongoDB before calling this function');
    }
    return db;
}
