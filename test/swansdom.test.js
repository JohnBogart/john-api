/* eslint-env mocha */
const { expect } = require('chai')

const { swansdomHandler } = require('../src/index')
const quotes = require('../src/models/ronswansonquotes')

describe('/swansdom The Swansdom Endpoint', function () {
  let response

  before(async function () {
    response = await swansdomHandler()
  })

  it('Returns the list of quotes', function () {
    const body = JSON.parse(response.body)
    expect(body).to.contain.members(quotes)
  })

  it('Returns 200 status', function () {
    const { statusCode } = response
    expect(statusCode).to.equal(200)
  })
})
