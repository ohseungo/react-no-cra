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

## 3. Babel 설치

```js
npm install @babel/core @babel/preset-react @babel/preset-env
```

ES6, JSX 문법을 사용하는 리액트는 바벨이 필수적이다

- preset-react : JSX -> JS
- preset-env : ES6 -> ES5

```js
module.exports = {
  presets: [
    "@babel/preset-react",
    ["@babel/preset-env", { runtime: "automatic" }],
  ],
};
```

babel.config.js 파일을 만들어 위와 같이 설정
