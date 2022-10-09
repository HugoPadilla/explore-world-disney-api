import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const Character = sequelize.define('Character', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weight: {
    type: DataTypes.STRING,
    allowNull: false
  },
  story: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
