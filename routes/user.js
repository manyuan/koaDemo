let Router = require('koa-router')
let router = new Router()
module.exports = router

const respMsg = require('../app/responses.js')

let user = require('../service/user.js')

router.post('/', async (ctx, next) => {
    ctx.response.body = respMsg.success('post')
})
router.post('/sms', async (ctx, next) => {
	console.log('---get post body:',ctx.request.body)
	console.log('---get post files:',ctx.request.files)
    ctx.response.body = respMsg.success('post')
})


router.get('/', async (ctx, next) => {
    ctx.response.body = respMsg.success('get')
})

router.get('/isregist', async (ctx, next) => {
	let email = ctx.query.email
    ctx.response.body = await user.isRegisted(email)
})

router.get('/regist', async (ctx, next) => {
	let email = ctx.query.email
	let name = ctx.query.name
    ctx.response.body = await user.regist(email, name)
})


