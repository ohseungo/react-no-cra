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
          presets: ["@babel/preset-react", "@babel/preset-env"],
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
