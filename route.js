module.exports = function (pre,dir) {
    let ctldir = dir || './ctrls',
        router = require('koa-router')();

    var files = require('fs').readdirSync(ctldir);
    var js_files = files.filter((f)=>{
        return f.endsWith('.js') && f!='filter.js';
    });
    for (var f of js_files) {
        try{
            let ctl = require('./'+ctldir + '/' + f);
            let pfx = '/' + f.substring(0,f.length-3);
            if(pre) pfx = '/'+pre + pfx;
            console.log('---add route:',pre,pfx);
            if(ctl instanceof require('koa-router'))
                router.use(pfx,ctl.routes())
            else
                console.log('-----bad controller file:',f)
        }catch(e){
            console.log('-------set route error---:',e);
        }
    }
    return router.routes();
};


