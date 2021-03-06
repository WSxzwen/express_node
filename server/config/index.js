'use strict';

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  ip: process.env.IP || '0.0.0.0',
  mongo: {
    uri: 'mongodb://localhost/Vinter-dev',
    options: {
      useNewUrlParser:true,
      socketTimeoutMS: 0,
      connectTimeoutMS: 0,
      poolSize: 10
    }
  },

  expiresIn: 60 * 60 * 24,
  secretKey: 'vinter'
};

