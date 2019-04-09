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
  ...
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

#### 导入插件

```
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

#### 在webpack中使用插件

```
module.exports = {
    entry: './index.js',
    ...
    plugins:[
        new HtmlWebpackPlugin({
            title:'首页',
            filename:'index.html',
            template:'./index.html'
        })
    ]
}
```

## 添加热更新

```
npm install webpack-dev-server --save-dev
```

#### webpack中配置

```
"dev": "webpack-dev-server --inline --hot --open --port 8080 --host 127.0.0.1"
```

#### 运行

```
npm run dev
```

