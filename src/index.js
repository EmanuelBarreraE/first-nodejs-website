import express from 'express'

const app = express()

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.listen(3000)
console.log('server on port', 3000)