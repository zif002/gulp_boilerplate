const config   = require('./gulp/config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const prod = config.production;

module.exports = {
    entry: {
        app: './' + config.src.js + '/app.js',
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/build/js/'
    },
    watch: !prod ? true : false,
    devtool: !prod ? "source-map" : '',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    "postcss-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                  "babel-loader",
                  "eslint-loader",
                ],
            },
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: prod ? false : true
        })
      ]
};