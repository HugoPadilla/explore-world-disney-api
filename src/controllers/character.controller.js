import { Character } from '../models/Character.js'

export const getCharacters = async (req, res) => {
  try {
    const characters = await Character.findAll({
      attributes: ['id', 'image', 'name']
    })

    res.status(200).json(
      {
        status: 'success',
        data: {
          characters: characters
        }
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        status: 'error',
        message: 'Something went wrong',
        exception: error
      }
    )
  }
}

export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params

    const character = await Character.findOne({
      where: {
        id
      }
    })

    if (!character) {
      res.status(404).json(
        {
          status: 'error',
          message: 'this character does not exist'
        }
      )
    } else {
      res.status(200).json(
        {
          status: 'success',
          data: character
        }
      )
    }
  } catch (error) {
    console.error('Error result', error)
    res.status(404).json(
      {
        status: 'error',
        message: 'Something went wrong',
        exception: error
      }
    )
  }
}

export const insertCharacter = async (req, res) => {
  try {
    const { image, name, age, weight, story } = req.body

    const newCharacter = {
      image,
      name,
      age,
      weight,
      story
    }

    const insertedCharacter = await Character.create(newCharacter)

    res.status(201).json(
      {
        status: 'success',
        data: {
          character: insertedCharacter
        },
        message: 'The character was created successfully',
      }
    )

  } catch (error) {

    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(403).json(
        {
          status: 'error',
          message: 'Character already exists'
        }
      )
    } else {
      res.status(500).json(
        {
          status: 'error',
          message: 'Something went wrong',
          exception: error
        }
      )
    }
  }
}