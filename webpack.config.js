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