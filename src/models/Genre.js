import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const Genre = sequelize.define(
  'Genre',
  {
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, notNull: true
    }, name: {
      type: DataTypes.STRING, notNull: true
    }, image: {
      type: DataTypes.STRING, notNull: true
    }, movie_id: {
      type: DataTypes.STRING, notNull: true
    }
  }
)
