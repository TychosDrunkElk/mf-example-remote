const { withFederatedSidecar } = require("@module-federation/nextjs-mf")

module.exports = withFederatedSidecar({
  name: 'exampleRemote',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './BizBirds': './pages/index.js',
  },
  shared: {
    react: {
      requiredVersion: false,
      singleton: true,
    },
  }
})({
  reactStrictMode: true,
  webpack(config) {
    config.output.publicPath = 'auto';
    return config;
  }
});
