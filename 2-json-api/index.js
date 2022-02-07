const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

// this function will guard against non numeric values passed in the request
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// Here we are doing the same as the first example, but instead of sending a string to the client, we can send a json response
app.get('/', (req, res) => {
    res.json({
        status: 200,
        data: {
            result: "Sending a result back",
            time: new Date()
        }
    })
})

// Here we can accept parameters on the route using a colon before a route
// E.g. square/4 will square to the result 16
app.get('/square/:number', (req, res) => {
    const number = req.params.number
    let squared
    if (number && isNumeric(number)) {
        squared = Math.pow(number, 2)
        res.json({
            status: 200,
            data: {
                result: squared,
                time: new Date()
            }
        })
    } else {
        res.json({
            status: 404,
            error: "Invalid Argument"
        })
    }
})

// Here we can accept query parameters adding one to the route
// E.g. square-root/?number=16 ==> 4
app.get('/square-root/', (req, res) => {
    const number = req.query.number
    let squareRoot
    if (number && isNumeric(number)) {
        squareRoot = Math.sqrt(number)
        res.json({
            status: 200,
            data: {
                result: squareRoot,
                time: new Date()
            }
        })
    } else {
        res.json({
            status: 404,
            error: "Invalid Argument"
        })
    }
})

app.listen(PORT, 'localhost', () => {
    console.log(`Listening to server on port: ${PORT}`)
})
