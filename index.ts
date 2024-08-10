import express from 'express';
import {runDbConnection} from "./config/connection";
import morgan from 'morgan';
import recipeRouter from "./routes/recipe.route";

const app = express()
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/recipes', recipeRouter);

(async () => {
    await runDbConnection();
    app.listen(port, () => {
        console.log(`app listening on port ${port}`)
    })
})()
