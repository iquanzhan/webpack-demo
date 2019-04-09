# webpack-demo
### 安装

```
npm install webpack webpack-cli --save-dev
```

### 新建webpack配置

```
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + "/dist",
        filename: 'build.js'
    }
}
```

### 执行打包命令

```
npx webpack --config webpack.config.js
```

### 打包CSS

```
npm install style-loader css-loader --save-dev
```

```
import './css/index.css';
```

#### webpack配置

```
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + "/dist",
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
```

### npm添加自定义script

```
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "```\r npm install webpack webpack-cli --save-dev\r ```",
  "main": "index.js",
  "dependencies": {
    "css-loader": "^2.1.1",
    "style-loader": "^0.23.1",
    "vue": "^2.6.10",
    "webpack-cli": "^3.3.0",
    "webpack": "^4.29.6"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",                              //自定义命令
  }
 }
```

执行命令

```
npm run build			//npm run为执行自定义的命令
```

### 打包HTML

```
npm install --save-dev html-webpack-plugin
```

