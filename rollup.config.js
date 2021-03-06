const worker = require('./index.js');

const defaultConfig = {
  input: 'test/main.js'
};

const FORMATS = ['es', 'system', 'amd', 'cjs'];

module.exports = FORMATS.map(format => ({
  ...defaultConfig,
  output: {
    dir: `expected/${format}`,
    format,
    chunkFileNames: 'chunks/[name]-[hash].js'
  },
  plugins: [worker()]
}));
