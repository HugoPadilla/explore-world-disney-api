import { Movie } from '../models/Movie.js'
import { Character } from '../models/Character.js'

export const getMovies = async (req, res) => {
  try {
    const queryOptions = {
      attributes: ['id', 'image', 'title', 'creation_date']
    }

    const movies = await Movie.findAll(queryOptions)

    res.status(200).json({
      status: 'success',
      data: { movies }
    })

  } catch (error) {
    console.warn(error)

    res.status(404).json({
      status: 'error',
      message: 'Movies not found'
    })
  }
}

export const getMovie = async (req, res) => {

  const { id } = req.params

  const queryOptions = {
    where: {
      id
    },
    include: Character
  }

  try {
    const movie = await Movie.findOne(queryOptions)

    res.status(200).json({
      status: 'success',
      data: movie
    })

  } catch (error) {
    console.warn(error)

    res.status(200).json({
      status: 'error',
      message: error.message
    })
  }
}

export const insertMovie = async (req, res) => {

  const { image, title, creation_date, rating } = req.body
  const newMovie = {
    image,
    title,
    creation_date,
    rating
  }

  try {
    const insertedMovie = await Movie.create(newMovie)

    res.status(201).json({
      status: 'success',
      data: {
        movie: insertedMovie
      }
    })
  } catch (error) {
    console.warn(error)
    res.status(404).json({
      status: 'error',
      message: error.message
    })
  }
}

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params
    const { image, title, creation_date, rating } = req.body

    const movieToUpdate = await Movie.findByPk(id)
    movieToUpdate.image = image
    movieToUpdate.title = title
    movieToUpdate.creation_date = creation_date
    movieToUpdate.rating = rating

    await movieToUpdate.save()

    res.status(200).json(
      {
        status: 'success',
        data: {
          character: movieToUpdate
        },
        message: 'The Movie information has been updated'
      }
    )
  } catch (error) {
    console.error(error)
    res.status(404).json(
      {
        status: 'error',
        message: 'Movie not found'
      }
    )
  }
}

export const deleteMovie = async (req, res) => {
  const { id } = req.params

  try {
    const numberRemoved = await Movie.destroy({
      where: {
        id
      }
    })

    if (numberRemoved === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Movie not found'
      })
    }

    res.status(200).json(
      {
        status: 'success',
        message: 'The Movie has been removed',
        data: null
      }
    )
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: 'Movie not found'
    })
  }
}
