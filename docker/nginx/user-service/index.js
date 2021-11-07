const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json([
        {
        name: 'Gara',
        email: 'mail@gmail.com'
        },
        {
            name: 'Jack',
            email: 'Jack@gmail.com'
        },
        {
            name: 'Jone',
            email: 'Jone@gmail.com'
        }
        , {
            name: 'Jonson',
            email: 'Jonson@gmail.com'
        }
    ])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})