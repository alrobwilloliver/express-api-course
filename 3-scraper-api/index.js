const express = require('express')
const request = require('request-promise')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

const apiKey = process.env.apiKey
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper API')
})

app.get('/product/:productId', async (req, res) => {
    const { productId } = req.params
    const url = baseUrl + "&url=https://www.amazon.de/dp/" + productId
    try {
        const response = await request(url)
        res.json(JSON.parse(response))
    } catch (error) {
        console.log(error)
    }
})

app.get('/product/product-reviews/:productId', async (req, res) => {
    const { productId } = req.params
    const url = baseUrl + "&url=https://www.amazon.de/product-reviews/" + productId
    try {
        const response = await request(url)
        res.json(JSON.parse(response))
    } catch (error) {
        console.log(error)
    }
})

app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params
    const url = baseUrl + "&url=https://www.amazon.de/s?k=" + searchQuery
    try {
        const response = await request(url)
        res.json(JSON.parse(response))
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`Listening to server on PORT: ${PORT}`)
})
