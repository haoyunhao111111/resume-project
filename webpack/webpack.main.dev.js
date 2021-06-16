const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const mainConfig = {
    entry: path.resolve(__dirname, '../app/main/electron.js'),
    target: 'electron-main',
    output:{
        filename: 'electron.js',
        path: path.resolve(__dirname, '../dist')
    },
    mode: 'development',
    devtool: 'inline-source-map'
}

module.exports = webpackMerge.merge(baseConfig, mainConfig)