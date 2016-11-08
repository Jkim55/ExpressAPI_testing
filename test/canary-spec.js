const chai = require('chai')


chai.should() //bring in per documentation

describe('Canary Test', ()=> {                    // name of test
  it('five should be equal to five', () => {      // describe what the test is
    const five = 5

    five.should.equal(5)
    five.should.be.a('number')
  } )
})
