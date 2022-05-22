import 'dotenv/config'
import express from 'express'
import path from 'path'


const app = express()
const __dirname = process.cwd()

// Live reload server for development
import livereload from 'livereload'
import connectLiveReload from 'connect-livereload'

if (process.env.NODE_ENV !== 'production') {
  const liveReloadServer = livereload.createServer()
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/")
    }, 50)
  })

  app.use(connectLiveReload())
}


app.set({
  'Content-Type': 'text/html'
})

app.use(express.static(__dirname + '/public'))

// Page routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'html', 'index.html'))
})

app.get('/eucalyptus', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'html', 'eucalyptus.html'))
})

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})