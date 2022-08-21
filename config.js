"use strict";

var path = require('path');

var config = {
  PORT: process.env.OPENSHIFT_NODEJS_PORT || 8080,
  IPADDRESS: process.env.OPENSHIFT_NODEJS_IP || '77.169.232.101',
  TILES_DIR: process.env.OPENSHIFT_DATA_DIR || path.join(__dirname, '/data'),
  MAP_DIR: path.join(__dirname, '/static/map'),
}

module.exports = config;
