
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(express.json()) 

app.put('/', (req, res) => {
     res.json({requestBody: req.body})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
