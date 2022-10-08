import { Movie } from '../models/Movie.js'
import { Character } from '../models/Character.js'
import { Genre } from '../models/Genre.js'

Character.belongsToMany(Movie, { through: 'CharacterMovies' })
Movie.belongsToMany(Character, { through: 'CharacterMovies' })

Genre.belongsToMany(Movie, { through: 'MovieGenres' })
Movie.belongsToMany(Genre, { through: 'MovieGenres' })
