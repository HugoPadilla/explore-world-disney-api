import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const Character = sequelize.define('Character', {
  id: {
    type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, notNull: true
  }, image: {
    type: DataTypes.STRING, notNull: true
  }, age: {
    type: DataTypes.INTEGER, notNull: true
  }, weight: {
    type: DataTypes.STRING, notNull: true
  }, story: {
    type: DataTypes.STRING
  }
})
