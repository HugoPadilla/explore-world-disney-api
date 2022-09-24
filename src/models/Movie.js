import { sequelize } from '../database/database'
import { DataTypes } from 'sequelize'
import { Character } from './Character.js'
import { Genre } from './Genre.js'

export const Movie = new sequelize.define('Movie', {
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

Movie.belongsToMany(Character, { through: 'CharacterMovies' })
Movie.belongsToMany(Genre, { through: 'MovieGenres' })