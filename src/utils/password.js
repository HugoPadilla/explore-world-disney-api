import { compare, hash } from 'bcrypt'

const SALT_ROUNDS = 10

export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    hash(password, SALT_ROUNDS, (error, encrypted) => {
      if (error)
        return reject(error)

      resolve(encrypted)
    })
  })
}

export const matchPassword = (hash, password) => {
  return new Promise((resolve, reject) => {
    compare(password, hash, (error, same) => {
      if (error)
        return reject(error)

      resolve(same)
    })
  })
}