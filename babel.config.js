module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./source'],
          alias: {
            '@assets': './source/assets',
            '@features': './source/features',
            '@navigation': './source/navigation',
            '@components': './source/components',
            '@unistyles': './source/unistyles',
            '@services': './source/services',
            '@states': './source/states',
            '@utils': './source/utils',
          },
        },
      ],
    ],
  };
};
