require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

<<<<<<< HEAD
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
})
app.get('/geo',(req,res)=>{
=======
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/api/geo',(req,res)=>{
>>>>>>> c502dab0164547372102f4ff27e1f084c220f7ec
res.send('shahjalal geo')
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/youtube',(req,res)=>{
    res.send('<h2> Chai Code </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})