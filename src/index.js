import app from './app.js'
import { sequelize } from './database/database.js'

app.get('/', function (req, res) {
  res.send('test api ok')
})

async function main () {
  try {
    await sequelize.sync({ force: false })
    console.log('Database auth')
    app.listen(3000)
    console.info(`Server running on http://localhost:${3000}`)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main()