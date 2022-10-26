const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.port || 5000

app.use(cors());

const category = require('./data/courseCategory.json')
const allCourses = require('./data/courses.json')


app.get('/', (req, res)=>{
    res.send('all course coming soon')
})

app.get('/allCourses', (req, res)=>{
    res.send(allCourses)
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourses = allCourses.filter(course => course.categoryId === id);
    res.send(selectedCourses)
})

app.get('/course/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourse = allCourses.find(course => course.id === id);
    res.send(selectedCourse)
})


app.listen(port, ()=>{
    console.log('server is running port', port)
})