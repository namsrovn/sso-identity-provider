require('dotenv').config()

const Pool = require('pg').Pool
// const isProduction = process.env.NODE_ENV === 'production'

// const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  url: `${process.env.PG_EXTERNAL_URL}`
})

module.exports = { pool }