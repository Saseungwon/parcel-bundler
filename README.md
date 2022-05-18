## parcel

#### server build 오류 날 때 
  1. $ npm cache clean --force
  2. $ npm i -D parcel-bundler

<br>

#### dist 폴더에 자동으로 파일 넣어주기 
  1. npm i -D parcel-plugin-static-files-copy
  2. pakage.json에 밑에 코드 추가
      ```js
        "staticFiles": {
          "staticPath": "static"
        } 
      ```
  3. dist 폴더에 static 폴더에 있는 파일을 자동으로 복사해서 넣어준다.

  <br>

#### npm i -D postcss autoprefixer
  1. 자동으로 브라우저 공급업체 접두사 붙여줌
      ```js
        "browserslist": [
          "> 1%",
          "last 2 versions"
        ]
      ```
  2. .postcssrc.js 파일 만들고
      ```js
        module.exports = {
          plugins: [
            require('autoprefixer')
          ]
        }
      ```
  3. autoprefixer 10 버전과 postcss 8 버전은 충돌하니 autoprefixer를 9버전으로

<br>

#### babel

ES6, ES7, ES8 들을 ES5로 변환시켜준다. 
babel은 컴파일러
구형 브라우저 사용자들도 최신 버전의 ES를 쓸 수 있도록 만들어준다. 
  
  1. npm i -D @babel/core @babel/preset-env
  2. .babelrc.js 파일 생성
  3. 
      ```js
          module.exports = {
            presets: ['@babel/preset-env']
          }
      ```
  4. 
      ```js
        "browserslist": [
          "> 1%",
          "last 2 versions"
        ]
      ```
  5. npm i -D @babel/plugin-transform-runtime
  