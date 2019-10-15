const supertest = require('supertest')
const should = require('chai').should()

const server = supertest.agent('http://localhost:5000')

describe('GET /test', () => {
  it('should return the processed name when data supplied is correct', done => {
    const requestBody = {
      name: 'Albert'
    }
    server
      .get('/test')
      .send(requestBody)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200)
        res.body.output.should.equal('Hello, World! My name is Albert')
        done()
      })
  })

  it('should return status 400 BAD REQUEST when data required has extra data other than what is required', done => {
    const requestBody = {
      name: 'Jo',
      age: 18
    }
    server
      .get('/test')
      .send(requestBody)
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        res.status.should.equal(400)
        done()
      })
  })

  it('should return status 400 BAD REQUEST when name is missing on request body', done => {
    server
      .get('/test')
      .send({})
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        res.status.should.equal(400)
        done()
      })
  })
})
