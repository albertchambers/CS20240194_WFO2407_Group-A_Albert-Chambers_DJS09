import path from 'path'; // ES Module import

export default {
  output: {
    filename: 'index.pack.js', // Output file name
    path: path.resolve('dist'), // Output directory path
  },
  entry: {
    index: './index', // Entry point for the bundling process
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'], // File extensions Webpack should recognize
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Match TypeScript files
        exclude: /node_modules/, // Exclude `node_modules` directory from being processed
        use: {
          loader: 'ts-loader', // Use `ts-loader` to handle TypeScript files
        },
      },
    ],
  },
};
