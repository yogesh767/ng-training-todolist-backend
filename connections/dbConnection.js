const { Pool } = require('pg')
require('dotenv').config()

const user = process.env.POSTGRES_USER;
const host = process.env.POSTGRES_HOST;
const password = process.env.POSTGRES_PASSWORD;
const db = process.env.POSTGRES_DATABASE;
const port = process.env.POSTGRES_PORT



const pool = new Pool({
    user,
    host,
    database: db,
    password,
    port
})

pool.connect()
    .then(() => {
        console.log("postgrss connected successfully")
    }).catch((err) => {
        console.log("err", err)
    })

module.exports = pool
