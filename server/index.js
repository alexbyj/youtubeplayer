const express = require('express')
const app = express()

app.use(express.static('dist'))

app.listen(3010, () => console.log('Listening on port 3010!'))