/* eslint-env mocha */
const { expect } = require('chai')

const { helloHandler } = require('../src/index')

describe('/hello The Hello World Endpoint', function () {
  let response

  before(async function () {
    response = await helloHandler()
  })

  it('Returns the hello world message', function () {
    const body = JSON.parse(response.body)
    expect(body).to.deep.equal({ message: 'hello world' })
  })

  it('Returns 200 status', function () {
    const { statusCode } = response
    expect(statusCode).to.equal(200)
  })
})
