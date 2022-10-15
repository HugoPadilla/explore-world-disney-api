import { User } from '../models/User.js'
import { hashPassword, matchPassword } from '../utils/password.js'
import { signJwt } from '../utils/jwt.js'

export const getUsers = async (request, response) => {
  try {

    const users = await User.findAll()

    response.status(200).json({
      status: 'success',
      data: {
        users
      }
    })

  } catch (error) {
    response.status(404).json({
      status: 'error',
      message: 'Not found'
    })
  }
}

export const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body.user

    if (!email) throw new Error('Email is Required')
    if (!password) throw new Error('Password is Required')

    const user = await User.findByPk(email)

    if (!user) {
      response.status(401)
      throw new Error('No user with this email id')
    }

    const passwordMatch = await matchPassword(user.password, password)
    if (!passwordMatch) {
      response.status(401)
      throw new Error('Invalid password or email id')
    }

    delete user.dataValues.password
    user.dataValues.token = await signJwt(user.dataValues)

    response.status(200).json({
      status: 'success',
      data: {
        user
      }
    })

  } catch (error) {
    const statusCode = response.statusCode ? response.statusCode : 500
    response.status(statusCode).json({
      status: 'error',
      message: error.message,
    })
  }
}

export const createUser = async (request, response) => {
  try {
    const { first_name, last_name, email, password } = request.body.user

    if (!email) throw new Error('Email is Required')
    if (!password) throw new Error('Password is Required')

    const existingUser = await User.findByPk(email)
    if (existingUser)
      throw new Error('User already exists with this email address')

    // hashed password before saving to database
    const passwordHash = await hashPassword(password)

    const createdUser = await User.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: passwordHash
    })

    if (createdUser) {
      if (createdUser.dataValues.password)
        delete createdUser.dataValues.password

      createdUser.dataValues.token = await signJwt(createdUser.dataValues)

      response.status(201).json({
        status: 'success',
        data: {
          user: createdUser
        }
      })
    }

  } catch (error) {
    response.status(401).json({
      status: 'error',
      message: error.message
    })
  }
}