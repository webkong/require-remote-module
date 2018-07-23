const got = require('got');
const rfs = require('require-from-string');

const fun = async (url) => {
    return rfs((await got(url)).body)
}


module.exports =  fun;