
const sqlqry = require('../app/mmysql.js').query
const respMsg = require('../app/responses.js')

async function isRegisted (email) {
	const _sql = "select email from user where email=?";
	let ret = await sqlqry(_sql,[email]);
	if(ret && ret.length>0){
		return respMsg.success(true)
	}else{
		return respMsg.success(false)
	}
}

async function regist (email,name) {
	const _sql = "insert into user(email,name) values(?,?)";
	let ret = await sqlqry(_sql,[email,name]);
	return respMsg.success()
}


module.exports = {
	isRegisted,
	regist,
}
