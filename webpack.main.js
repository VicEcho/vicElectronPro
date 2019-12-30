const path = require('path');

module.exports  = (env, argv) => {
    console.log('argv', argv, 'env', env)
    const isDevelopment = argv.mode === 'development';
    return {
        entry: './src/main/main.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        mode: argv.mode,
        devServer: isDevelopment ? {
            hot: true
        } : {},
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: 'file-loader'
                }, {
                    test: /\.(scss|svg|png)$/,
                    use: 'null-loader'
                }, {
                    test: /\.md$/,
                    use: 'file-loader'
                }
            ]
        },
        target: 'electron-main',
    }
};