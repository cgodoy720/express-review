const express = require('express')
const app = express()
const cors = require('cors')
const juiceController = require('./controllers/juiceController')



//Middleware
app.use(cors())
// Line below tells app to accept JSON
app.use(express.json())

app.use('/juice', juiceController)


app.get('/', (req, res) => {
    res.send('Welcome to our App!')
})


module.exports = app