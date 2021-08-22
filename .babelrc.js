module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    '@emotion/babel-plugin',
    [
      'effector/babel-plugin',
      {
        addLoc: true,
        reactSsr: true,
        importName: ['effector-next'],
      },
    ],
  ],
}
