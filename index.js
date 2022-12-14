
const express = require('express')
const path = require('path')
const cors = require('cors');

const app = express()
const port = 3000

// const harryMiddleware = (req, res, next)=>{
//   console.log(req)
//   next()
// }
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
app.use(cors(corsOpts));

app.use(express.static(path.join(__dirname, "public")))
// app.use(harryMiddleware)

app.get('/hello/', (req, res) => {

  let date_ob = new Date();

  res.send(JSON.stringify({"data": 'Hello World!' + date_ob.toLocaleDateString() }))
})

app.get('/about', (req, res) => {
//   res.send('about')
// res.sendFile(path.join(__dirname, 'index.html'))
// res.status(500)
    res.json({"harry": 34})
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`)
})