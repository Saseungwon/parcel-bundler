// ESM
// CommonJS(nodejs 에서 사용)

//import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

//export
module.exports = {
  plugins: [
    autoprefixer
  ]
}

// 위 코드 간소화

/*
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
*/
