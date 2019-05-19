
const success = function(info){
	return (info === undefined) ? 
		{code: 0, msg: 'success'}:{code: 0, msg: 'success', data:info}
}

const databaseError  = {code: 1, msg: 'database operate error'}
const reqParamsError = {code: 2, msg: 'request params error'}
const permissionError ={code: 3, msg: 'permmission denied'}
const systemError =    {code: 4, msg: 'system internal error'}
const urlNotFound =    {code: 5, msg: 'url not found'}

const userError = function (info) {
	let thismsg = (info === undefined) ? 'unknown error' : info
	return {code: 6, msg: thismsg}
}

module.exports = {
	success,
	databaseError,
	reqParamsError,
	permissionError,
	systemError,
	urlNotFound,
	userError
}


