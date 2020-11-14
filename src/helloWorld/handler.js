  async function helloHandler (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello world!'
      })
    }
  }
  
  module.exports = {
    helloHandler
  }
  