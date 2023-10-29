const app = require('./app')
// Line below allows us to use environment variables from our .env file
require("dotenv").config()


const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})