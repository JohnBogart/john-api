const quotes = require('../models/ronswansonquotes.js')

async function swansdomHandler (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(quotes)
  }
}

module.exports = {
  swansdomHandler
}
