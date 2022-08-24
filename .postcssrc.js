// ESM(자바스크립트 표준 모듈) - 브라우저에서 사용되는 방식
// CommonJS - nodeJS 환경에서 적용되는 방식(모듈을 사용하는 방식)

// import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

// export {
//   plugin: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}