import { db } from "./index.js";
import axios from "axios";

//this middleware create table name "assets" if it is not exist else it will ignore
function createTableMiddleWare(req, res, next) {
    db.query("create table assets (name varchar(10),last float,buy float,sell float,	volume int,base_unit varchar(10))", (err) => {
        if (!err) console.log("table created")
        next()
    })
}
//due to assignment instructions i need to truncate existing data from the "assets" table before going furthur;
async function fetchFromApiMiddleWare(req, res, next) {
    try {
        //this promise make sure that through ddl command table "asset table" data should be completly freed up intially.
        //if error arise during truncation promise reject and catch block will take care of 
        await new Promise((resolve, reject) => {
            db.query('truncate table assets', async (err) => {
                if (err) return reject(err)
                resolve()
            })
        })
        //assuming this api is always gives response every time  
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers')
        //this will store the top 10 result from the api into variable 
        const assetsData = Object.values(response.data).slice(0, 10)
        //this will make sure all the asset object there all property gets store in assets table respective coloumn name 
        //bellow store the array of promises
        const insertionPromises = assetsData.map(async (data) => {
            // this will return us the promise either is rejected or fullfiled state
            return new Promise((resolve, reject) => {
                db.query('insert into assets (name,last,buy,sell,volume,base_unit) values($1,$2,$3,$4,$5,$6)',
                    [data.name, data.last, data.buy, data.sell, data.volume, data.base_unit], (err) => {
                        if (err) return reject(err)
                        resolve()
                    })
            })
        })
        //if either of promise is rejected during insertion just return the internal server error status code else moves to the next()
        Promise.all(insertionPromises)
            .then(() => {
                next()
            })
            .catch((err) => {
                res.status(500).json({ msg: err })
            })

    } catch (err) {

        res.status(503).json({ msg: 'Service Unavailable' });
    }

}

export { createTableMiddleWare, fetchFromApiMiddleWare }