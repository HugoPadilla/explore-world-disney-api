import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const Movie = sequelize.define('Movie', {
  id: {
    type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, notNull: true
  }, image: {
    type: DataTypes.STRING, notNull: true
  }, title: {
    type: DataTypes.STRING, notNull: true
  }, creation_date: {
    type: DataTypes.DATE, notNull: true
  }, rating: {
    type: DataTypes.INTEGER
  }
})
