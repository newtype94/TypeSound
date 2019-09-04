module.exports = {
  apps: [
    {
      name: "TypeSound",
      script: "./node_modules/react-scripts/scripts/start.js",
      env: {
        PORT: 3000,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 80,
        NODE_ENV: "production"
      }
    }
  ]
};
