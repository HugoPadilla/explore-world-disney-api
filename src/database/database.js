import * as dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

const database = process.env.DATABASE_NAME
const username = process.env.PG_USERNAME
const password = process.env.PG_PASSWORD
const host = process.env.HOST
const dialect_orm = process.env.DIALECT_ORM

export const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host: host,
    dialect: dialect_orm
  }
)
