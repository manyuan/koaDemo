
const assert = require('assert')

describe('user function test:', function(){
  let testobj = require('../service/user.js')
  let sqlqry = require('../app/mmysql.js').query
  const testemail = "abcd123@aabbcc.test"

  before(async () => {
    await sqlqry("insert into user(email,name) values(?,'testname')", [testemail])
  })

  after( async () => {
    await sqlqry("delete from user where email=?", [testemail])
  })

  it('# isRegisted() true', async ()=>{
    let ret = await testobj.isRegisted(testemail)
    assert(ret)
  })
  it('# isRegisted() false', async ()=>{
    let ret = await testobj.isRegisted("qqqqqqqq@aabbcc.test")
    assert(!ret)
  })

})

