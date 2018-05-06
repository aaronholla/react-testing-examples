let inlineImportOpts = {
  extensions: ['.png', '.svg']
};

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    ['babel-plugin-inline-import-data-uri', inlineImportOpts]
  ]
};
