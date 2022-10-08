import app from './app.js'
import { sequelize } from './database/database.js'

import('./database/associations.js')

app.get('/', function (req, res) {
  res.send('test api ok')
})

async function main () {
  try {
    await sequelize.sync({ force: false })
    app.listen(3000)
    console.info(`Server running on http://localhost:${3000}`)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main()