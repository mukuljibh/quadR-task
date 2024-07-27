import express from 'express'
import cors from "cors";
import pg from 'pg'
import dotenv from 'dotenv';
dotenv.config();
import { createTableMiddleWare, fetchFromApiMiddleWare } from './middleware.js';
const { Client } = pg

const app = express()
const port = 3000;

app.use(cors())

//please add with you own details by making .env file in the current directory
export const db = new Client({
    user: process.env.USER,
    host: process.env.HOSTNAME,
    database: process.env.DATBASE_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT,
})
//fetchFromApiMiddleWare helps to fetch data from wzirX APi and add it to postgres database.
//createTableMiddleWare is responsible for creating database where asset data are getting store.
app.get('/fetch', createTableMiddleWare, fetchFromApiMiddleWare, async (req, res) => {
    try {
        db.query('select * from assets', (err, result) => {
            if (err) return res.sendStatus(501)
            res.status(200).json({ response: result.rows })
        })
    }
    catch (err) {
        res.sendStatus(501)
    }
})


db.connect((err) => {
    if (err) {
        console.log("unable to connect with DB")
        return
    }
    app.listen(port, () => {
        console.log(`server started runing on port ${port}`)
    })

})