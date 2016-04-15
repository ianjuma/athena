var options = {
  AT: {
    apiKey: 'apikey',
    username: 'username',
    format: 'json'
  },

  mysql: {
    port: '3306',
    host: 'localhost',
    db: 'wired',
    user: 'root',
    pass: 'root'
  },

  redis: {
    port: '6709',
    host: 'localhost'
  }
};

module.exports = options;
