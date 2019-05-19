let coms = require('../utils/coms.js')
const assert = require('assert')

describe('common utils test:', function(){
  it('#cryptMsgSHA1 test', () => {
    let str = 'aabb@cc.dd'
    let retsult = 'b930fcbc88c70dd110701d8ade8fc01b389c6c96'
    let cal = coms.cryptMsgSHA1(str)
    assert.equal(cal,retsult)
  })
  
})
