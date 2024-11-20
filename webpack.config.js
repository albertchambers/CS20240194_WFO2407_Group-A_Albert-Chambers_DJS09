export default {
  output: {
    filename: 'index.pack.js',
  },
  entry: {
    index: './index.ts',
    path: './'
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
