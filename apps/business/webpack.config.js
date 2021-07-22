const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "business",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
         name: "business",
         filename: "businessremoteEntry.js",
         exposes: {
             './app-module': './apps/business/src/app/app.module.ts',
         },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "payment": "payment@http://localhost:5003/remoteEntry.js",
        //     "personel": "personel@http://localhost:5001/remoteEntry.js",
        //     "shell": "shell@http://localhost:5000/remoteEntry.js",
        //     "test": "test@http://localhost:4200/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
