import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const Movie = sequelize.define('Movie', {
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
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creation_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
