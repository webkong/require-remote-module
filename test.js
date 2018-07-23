const test = require('ava')

const remoteModuleUrl = 'https://gist.githubusercontent.com/webkong/fe88573898a3a2957c06b65a04304cac/raw/f535a2a82f8d820125fae5ec9fb3380375a3a5a0/anyTotime.js'

test('Require sample module', async t => {
  t.plan(1)
  const remoteModule = await require('./index')(remoteModuleUrl)
  t.is(typeof remoteModule, 'function') 
})
