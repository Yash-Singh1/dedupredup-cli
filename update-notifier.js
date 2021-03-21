module.exports = function () {
  require('update-notifier')({ pkg: require('./package.json') }).notify();
};
