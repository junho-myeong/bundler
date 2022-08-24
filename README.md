# bundler

## bundler?
- 웹에서는 기본적으로 html,css,js가 작동을 한다. 순수 html,css,js만 가지고 작성을하게 되면 비효울적인 면이 존재한다.
- 그래서 scss,vue.js같은 패키지들을 이용해서 좀더 고도화된 기능으로 작업을 진행할수 잇는데
- 그것들이 웹에서 바로 동적이 불가능 하기 떄문에 bundelr를 통해 html,css,js로 변환시켜주는 역할을 한다.
- bundler가 모든패키지를 모든것을 다 변환시켜줄순 없지만, bundler가 외부 패키지에 도움을 받아서 변환을 할수잇다.
- 즉 bundler자체가 변환하는것이 아니고 위임을 받아서 변환을 하는것이다.
- 즉 bundler가 외부의 패키지들을 가져와서 변환을 해준다는것이다.
1. parcel vs webpack
  1. parcel - 구성 없는 자동 번들링(소/중형 프로젝트에 적합)
  1. webpack- 매우 꼼꼼한 구성 (중/대형 프로젝트에 적합)

# parcel

## 프로젝트 생성
- 기존에 우리가 만들던 npm i parcel-bundelr -D를 통해서 npm프로젝트를 만들어 준다.

## 정적파일 연결
- parcel-bundler프로젝트에서 생성된 파일같은 경우에는 dist폴더에 모두 변환 되어서 반입된다.
- 그리고 index.html파일같은 경우 파일을 연결할때 가운대 헤쉬코드가 들어 가서 저장된다.
- 그래서 favicon을 사용할때는 우리의 원본 파일을 직접 넣기 보다는 그러한 파일들을 자동으로 dist에 삽입 시켜주는 패키지의 도움을 받을것이다. (parcel plugin static files copy 에 사용법 존재)
  1. npm install -D parcel-plugin-static-files-copy
  ```json
  "staticFiles": {
    "staticPath": "static"
  }
  ```
## autoprefixer
- vendor prefix(벤더사에 공급업체)
  - 개발자 도구에서 우리가 사용하는 기술이 표준 기술이라면 그 기술을 사용하되 그 기술이 브라우저에서 사용이 불가능 하게 된다면, 벤더사에서 만든 -webkit이나 -ms같은 접두사가 붙은 것들로 보험을 들어서 그 기능을 사용할수 잇게 만들어 준다.(npm i postcss autoprefixer -D)
  - 구형 브라우저를 사용할때 현재 기술이 안돌아 가는 경우를 대비해서 보험을 드는것이라고 생각해주면된다.
- browserslist(package.json)
  - 현재 npm 프로젝트에서 지원할 브라우저의 범위를 명시하는 용도이다. 그 명시를 autoprefixer 패키지가 활용하게 된다.
  ```json
  "browserslist": [
      "> 1%", // 전세계에 1퍼센트 이상의 점유율을 가진 브라우저
      "last 2 versions" // 마지막 2개의 버전까지 지원하겠다.
  ]
  ```

## babel(컴파일러)
- Babel은 ECMAScript 2015+ 코드를 이전 JavaScript 엔진에서 실행할 수 있는 이전 버전과 호환되는 JavaScript 버전으로 변환하는 데 주로 사용되는 무료 오픈 소스 JavaScript 트랜스컴파일러입니다.
- ES6,ES7,ES9 => ES5로 변환시키는 역할을 한다.
- 설치방법  npm i -D @babel/core @bable/present-env
-  npm i -D @babel/plugin-transform-runtime (async await 분법이 돌아가게 해주는 패지키를 설치하는 것이다.)

## CLI Parcel
- https://ko.parceljs.org/cli.html
- 기본옵션으로 사용하는것이 가장 편리하긴 하지만 필요에 따라서 이렇게 변경 해줘야 하는경우도 잇다.

## 저장소 업로드
- github에 업로드