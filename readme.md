# React with No CRA

Create-react-app 을 사용하지 않고 React App 구성하기

## 1. 프로젝트 초기화

```js
npm init -y
npm install react react-dom
```

## 2. index.html 생성

public/index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>No CRA Test</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

root div 를 생성한다.

## 3. Webpack 설치

```js
npm install webpack webpack-cli webpack-dev-server -D
```

webpack 은 모듈화된 코드들을 파일 하나로 묶어준다

- webpack : webpack 코어
- webpack-cli : webpack 관련 명령어 사용에 필요
- webpack-dev-server : 실제 빌드를 하지 않고 메모리 상에 빌드하여 개발 서버를 구동

```js
const path = require("path");

module.exports = {
  name: "react-wepback-setting",
  mode: "development", // 개발용
  devtool: "eval",
  resolve: {
    // 모듈을 처리하는 방식을 설정하는 속성, 잘 모르겠다
    extensions: [".js", ".jsx"],
  },
  entry: "./src/index.jsx", // 합쳐야 할 시작점이 되는 파일, 트리 최상위 노드
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 이런 파일을 대상으로
        exclude: /node_module/, //이 디렉토리는 제외하고
        loader: "babel-loader", //해당 로더를 이용한다, 아래 바벨 항목 참고
        options: {
          // 아래와 같은 옵션을 설정, 아래 바벨 항목 참고
          presets: [
            "@babel/preset-react",
            ["@babel/preset-env", { runtime: "automatic" }],
          ],
        },
      },
    ],
  },
  output: {
    // 합쳐진 파일이 만들어질 곳
    path: path.join(__dirname, "/dist"), //빌드 위치
    filename: "app.js",
  },
};
```

root 에 webpack.config.js 를 생성하여 위와 같이 webpack 설정파일을 작성한다.

## 4. Babel 설치

```js
npm install @babel/core @babel/preset-react @babel/preset-env -D
```

ES6, JSX 문법을 사용하는 리액트는 바벨이 필수적이다

- core : babel core
- preset-react : JSX -> JS
- preset-env : ES6 -> ES5

### 5. jsx 파일 생성 및 webpack 실행

```jsx
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(<h1>Hello React!</h1>, document.getElementById("root"));
```

webpack 설정에서 entry 로 설정한 src/index.jsx 에 간단한 React 렌더링 코드를 작성한다

```jsx
npx webpack
```

webpack 을 실행하여 번들링 작업을 실시한다, output으로 설정한 dist/app.js 에 파일이 생성된다면 성공이다.

### 6. index.html 에 script 추가

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>No CRA Test</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="../dist/app.js"></script>
  </body>
</html>
```
