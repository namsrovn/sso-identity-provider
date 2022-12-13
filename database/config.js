require('dotenv').config()

const Pool = require('pg').Pool
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: {
    rejectUnauthorized: false
  }
  // ssl: process.env.DATABASE_URL ? true : false
})

module.exports = { pool }

postgres://sso_db_user:LfkjNwLq2WQdUR7klI3AfHTOS3k1qgln@dpg-cec5h8cgqg4ap4aql2tg-a.oregon-postgres.render.com/sso_db
postgres://sso_db_user:LfkjNwLq2WQdUR7klI3AfHTOS3k1qgln@dpg-cec5h8cgqg4ap4aql2tg-a/sso_db