import { Sequelize } from 'sequelize'

const database = process.env.DATABASE_NAME
const username = process.env.PG_USERNAME
const password = process.env.PG_PASSWORD
const host = process.env.HOST
const dialect_orm = process.env.DIALECT_ORM
console.log(dialect_orm)

export const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host: host,
    dialect: dialect_orm
  })