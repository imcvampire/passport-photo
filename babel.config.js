module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './utils/tamagui.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
    ],
  }
}
