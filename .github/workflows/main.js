const enFruits = require('./fruits.json')


const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))



const getRandomFruitsName = (language = 'en') => {
  if (!['en'].includes(language)) {
    throw new Error('Selected language is invalid.')
  }




module.exports = getRandomFruitsName
