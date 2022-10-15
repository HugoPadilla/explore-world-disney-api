import jwt from 'jsonwebtoken'

const { sign, verify } = jwt

export const signJwt = async (user) => {
  const JWT_SECRET = '3St8dtJi64SNs6YTN'
  const payload = { email: user.email }

  return new Promise((resolve, reject) => {

    sign(payload, JWT_SECRET, (error, token) => {
      if (error)
        return reject(error)

      return resolve(token)
    })
  })
}

export const decodeJwt = async (toke) => {
  const JWT_SECRET = '3St8dtJi64SNs6YTN'
  return new Promise((resolve, reject) => {
    verify(toke, JWT_SECRET, (error, decode) => {
      if (error)
        return reject(error)

      return resolve(decode)
    })
  })
}
