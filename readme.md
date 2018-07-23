
# require-remote-module

<p align="center">
  <i>Require remote modules from any URL</i>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/require-remote-module">
  <img src="https://img.shields.io/github/downloads/webkong/require-remote-module/total.svg" /></a>
  
</p>


## Install

```bash
npm install require-remote-module
```

## Usage

```js
// await
let fun = await require('require-remote-module')('http://module.com/');
console.log(typeof fun)

// .then
let fun = require('require-remote-module')('http://module.com/');
fun.then((f)=>{
  console.log(typeof f)
});
```

## Contribute


## License

[__MIT license__](license)



## Author

![me](https://s.gravatar.com/avatar/1fe24100ab2109076fd777d1ad0a28c5?s=200)
© 2018 [webkong](https://github.com/webkong)                           
