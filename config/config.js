var options = {
  AT : {
    username : 'name',
    apiKey   : 'apiKey',
    format   : 'json'
  },

  mysql: {
    port: '3306',
    host: 'localhost',
    db  : 'wired',
    user: 'root',
    pass: 'root'
  },

  redis: {
    port: '6709',
    host: 'localhost'
  }
};

module.exports = options;
