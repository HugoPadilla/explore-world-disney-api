import { sequelize } from '../database/database'
import { DataTypes } from 'sequelize'
import { Movie } from './Movie.js'

export const Genre = new sequelize.define(
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

Genre.belongsToMany(Movie, { through: 'MovieGenres' })