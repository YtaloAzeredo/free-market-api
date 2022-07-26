import express from 'express'

const app = express()
const port = 3334

app.get('/', (req, res) => {
  return res.json({ message: 'oi'})
})

function startpApp () {
  app.listen(port)
  console.log(`Server running on port ${port}`)
}

startpApp()