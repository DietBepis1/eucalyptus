import express from 'express'
import path from 'path'

const app = express()
const __dirname = process.cwd()

app.set({
  'Content-Type': 'text/html'
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'html', 'index.html'))
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})