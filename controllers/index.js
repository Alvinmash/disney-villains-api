const models = require('../models')

const getAllVillains = async (request, response) => {
  const villains = await models.villains.findAll()

  return response.send(villains)
}

const getVillainBySlug = async (request, response) => {
  const { slug } = request.params

  const villain = await models.villains.findOne({ where: { slug: slug.toLowerCase() } })

  return villain
    ? response.send(villain)
    : response.status(404).send('sorry! villain not found. check the required fields')
}

const newVillains = async (request, response) => {
  const { name, movie, slug } = request.body

  if (!name || !movie || !slug) {
    return response.status(400).send('check the required fields! thankyou ')
  }
  const villain = await models.push.create({ name, movie, slug })

  return response.status(201).send(villain)
}


module.exports = { getAllVillains, getVillainBySlug, newVillains }
