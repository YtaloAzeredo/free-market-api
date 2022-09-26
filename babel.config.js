module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@models': './src/models',
        '@routes': './src/routes',
        '@errors': './src/errors',
        '@repositories': './src/repositories',
        '@types': './src/types',
        '@modules': './src/modules',
        '@interfaces': './src/interfaces'
      }
    }]
  ]
}
