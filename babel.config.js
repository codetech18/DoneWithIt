module.exports = function (api) {
  presets: ["module:metro-react-native-babel-preset"];
  plugins: ["react-native-reanimated/plugin"], api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
