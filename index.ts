import express from 'express';
import {runDbConnection} from "./config/connection";

const app = express()
const port = 3000;

(async () => {
    await runDbConnection();
    app.listen(port, () => {
        console.log(`app listening on port ${port}`)
    })
})()
