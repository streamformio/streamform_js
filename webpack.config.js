const path = require('path');

module.exports = {
    entry: './src/streamform.js',
    output: {
        filename: './dist/streamform.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Streamform',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode: 'production',
};