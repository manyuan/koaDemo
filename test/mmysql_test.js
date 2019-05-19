
const assert = require('assert')

describe('mysql wraper test:', function(){
  this.timeout(5000)

  let testobj = require('../app/mmysql.js')
  it('# initTables()',()=>{
    return testobj.initTables()
  })
  it('# query()',()=>{
    return testobj.query("select id from user where id=?",[1])
  })

})
