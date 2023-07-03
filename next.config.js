const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const federationConfig = {
  name: 'host',
  remotes: {
    // remote: 'remote@http://localhost:8081/remoteEntry.js',
    remote2: 'remote2@http://localhost:3002/remoteEntry.js',
  },
  filename: 'static/chunks/remoteEntry.js',
};
module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
          new NextFederationPlugin(federationConfig),
          // new FederatedTypesPlugin({
          //   federationConfig
          // })
      );
    }

    return config;
  },
};
