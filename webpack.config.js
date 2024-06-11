const path = require('path')

module.exports = {
  "output": {
    "path": path.resolve(__dirname, 'dist'),
    "filename": "[name].pack.js"
  },
  "entry": {
    "index": "./src/index.ts"
  },
  "resolve": {
    "extensions": [
      ".ts",
      ".js",
      ".json"
    ]
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "ts-loader"
        },
        "exclude": /node_modules/,
        "test": /\.ts$/
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 8080,
  },
  devtool: 'source-map'
};