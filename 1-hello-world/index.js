// Here we import our express package which we can use to create a server and create backend app logic.
const express = require('express')

// The express package gives us a function which we can call to get a express app.
const app = express()

// We will be making requests to a server which we can communicate with on a port number.
const port = 3000

// On the route "/" we will execute this logic as a GET request. This will "GET" information from the server
app.get('/', (request, response) => {
    // We will send back a text response to the client when they land on the "/" route
    response.send('Hello, world!')
})

// We will create a local server which will accept requests and responses on port 3000
app.listen(port, 'localhost', () => {
    console.log(`Listening to our app on port: ${port}`)
})
