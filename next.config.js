const { withFederatedSidecar } = require("@module-federation/nextjs-mf")

module.exports = withFederatedSidecar({
  name: 'exampleRemote',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './BizBirds': './components/BizBirds.js',
  },
  shared: {
    react: {
      requiredVersion: false,
      singleton: true,
    },
  }
})({
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com']
  },
  webpack(config) {
    config.output.publicPath = 'auto';
    return config;
  }
});
