
function cryptMsgSHA1 (pass) {
    let str = pass+"saltxxx";
    let hmac = require('crypto').createHash('sha1');
    hmac.update(str);
    let password = hmac.digest('hex');
    return password;
}

function isEmail(email){
    const pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
    return pattern.test(email)
}

module.exports = {
    isEmail,
    cryptMsgSHA1,
}

