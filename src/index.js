import app from "./app.js"

app.get("/", function (req, res) {
  res.send("test api ok")
})

async function main() {
  try {
    app.listen(3000)
    console.info(`Server running on http://localhost:${3000}`)
  } catch (error) {
    console.error("Unable to coonect to the database:", error)
  }
}

main();