'use strict';
var ipRegex = require('ip-regex');

var isIp = module.exports = function (x) {
  return ipRegex({exact: true}).test(x);
};

isIp.v4 = function (x) {
  return ipRegex.v4({exact: true}).test(x);
};

isIp.v6 = function (x) {
  return ipRegex.v6({exact: true}).test(x);
};
