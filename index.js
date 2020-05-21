const express = require('express')
const bodyParser = require('body-parser')
const { getAllVillains, getVillainBySlug, newVillains } = require('./controllers/index')

const app = express()


app.get('/villains', getAllVillains)

app.get('/villains:slug', getVillainBySlug)

app.post('/villains', bodyParser.json(), newVillains)

app.all('*', (request, response) => {
  return response.status(404).send('sorry! villain not found')
})

app.listen(7676, () => {
  // eslint-disable-next-line no-console
  console.log('guaranteed ! the port is listening on  7676')
})
