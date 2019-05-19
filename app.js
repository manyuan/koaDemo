
const serverport = require('./conf.js').servport
const Koa = require('koa');
const app = new Koa();

const serve = require('koa-static');
const route = require('./route.js')

const respMsg = require('./app/responses.js')

app.use(async (ctx, next) => {
    try{
        await next();
    }catch(e){
        console.log('unexpected error:', e)
        ctx.response.body = respMsg.systemError
    }
})
app.use(serve('./static'));

app.use(route('api','routes'))

app.use(async (ctx, next) => {
    await next();
    console.log('not fount url:',ctx.url)
    ctx.response.body = respMsg.urlNotFound
});

const http = require('http')
const httpserv = http.createServer(app.callback());

const inittables = require('./app/mmysql.js').initTables
inittables().then( () =>
    httpserv.listen(serverport, ()=>console.log('server listen on :',serverport))
).catch( e => {
    console.log('init database error:',e)
    process.exit(-1)
})



