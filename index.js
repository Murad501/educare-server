const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.port || 5000

app.use(cors());

const category = require('./data/courseCategory.json')


app.get('/', (req, res)=>{
    res.send('all course coming soon')
})

app.get('/category', (req, res) => {
    res.send(category)
})


app.listen(port, ()=>{
    console.log('server is running port', port)
})