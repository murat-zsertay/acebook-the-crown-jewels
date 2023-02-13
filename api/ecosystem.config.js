module.exports = {
  apps : [{
    script: 'app.js',
    watch: '.',
    "env.test.local": {
      NODE_ENV: "test",
    },
    "env.production.local": {
      NODE_ENV: "production",
    },
    "env.development.local": {
      NODE_ENV: "development",
    }
  }],

};
