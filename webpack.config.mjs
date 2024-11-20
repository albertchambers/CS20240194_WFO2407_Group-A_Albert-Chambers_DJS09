const path = 'path';

export default {
  mode: 'development', // or 'production'
  output: {
    filename: 'index.pack.js',
  },
  entry: {
    index: './index.ts',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
        test: /\.ts$/,
      },
    ],
  },
};
