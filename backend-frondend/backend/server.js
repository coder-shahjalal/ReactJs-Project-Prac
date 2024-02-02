require('dotenv').config()
import express from "express";

const app = express()

app.use(express.static('dist'))

// app.get('/', (req,res)=>{
//     res.send('Server is ready')
// })


// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          "id": 1,
          "title": "Atom Trust Issues",
          "content": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
          "id": 2,
          "title": "Outstanding Scarecrow",
          "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
          "id": 3,
          "title": "Talking Walls",
          "content": "What did one wall say to the other wall? 'I'll meet you at the corner.'"
        },
        {
          "id": 4,
          "title": "Skeleton Fight",
          "content": "Why don't skeletons fight each other? They don't have the guts!"
        },
        {
          "id": 5,
          "title": "Fake Spaghetti",
          "content": "What do you call fake spaghetti? An impasta!"
        }
      ];
      res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
})