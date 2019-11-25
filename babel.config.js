module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
      },
    ],
    '@babel/preset-react',
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false,
          },
        ],
        '@babel/preset-react',
      ],
    },
  },
}
