const chai = require('chai')
const request = require('supertest')
const fs = require('fs')// calling in filesystem js library; docs on nodejs API docs on file system
const app = require('../app.js')


chai.should() //bring in per documentation

// describe('Canary Test', ()=> {                    // name of test
//   it('five should be equal to five', () => {      // describe what the test is
//     const five = 5
//
//     five.should.equal(5)
//     five.should.be.a('number')
//   } )
// })

describe('Sending a GET to /', () => {
  describe('should succeed', () => {
    it('in retrieving the index.html', (done) => { //ajax call is being made, ajx calls are async; therefore, use chai's async
      const indexFile = fs.readFileSync('public/index.html', 'utf8') // must pass in the type of file: utf8 and can use __dirname + ('/../public/index.html', 'utf8')
      request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
          if(err) return done (err) // very rare to get an error here
          // res.text[0].should.be.equal('<');  // '<' is referring to '<' in '<html>'
          res.text.should.be.equal(indexFile);  // put in indexFile if you're using fs
          done()
        })
    })
  })
})
