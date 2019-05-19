
const mysql = require('mysql2')
const conf = require('../conf.js').mysql
const pool  = mysql.createPool(conf)
const poolPromise = pool.promise()

async function query ( sql, values ) {
  const [rows,fields] = await poolPromise.query(sql,values)
  return rows
}

async function transQuery (sqls,values){
  const con = await poolPromise.getConnection()
  try{
    await con.beginTransaction()
    for(let i=0;i<sqls.length;i++){
      await con.query(sqls[i],values[i])
    }
    await con.commit()
    await con.release()
  }catch(e){
    con.rollback()
  }
}

async function initTables(){
  await query('CREATE TABLE IF NOT EXISTS `user` ( \
  `id` bigint(20) NOT NULL AUTO_INCREMENT, \
  `email` varchar(200) NOT NULL, \
  `name` varchar(100) NOT NULL DEFAULT \'0\', \
  PRIMARY KEY (`id`) \
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1')
}

module.exports = {
  query,
  transQuery,
  initTables,
}

