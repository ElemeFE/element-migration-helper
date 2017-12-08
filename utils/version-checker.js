'use strict';

var packageConfig = require('../package.json');
var request = require('request');
var semver = require('semver');
var chalk = require('chalk');

function checkNodeVersion() {
  function getVersion(versionString) {
    return versionString.match(/\d+\.\d+\.\d+/)[0];
  }
  var minNodeVersion = getVersion(packageConfig.engines.node);
  var currentNodeVersion = getVersion(process.version);
  if (semver.lt(currentNodeVersion, minNodeVersion)) {
    console.log(chalk.red(
      'You must upgrade node to >=' + minNodeVersion + ' to use element-migration-helper.\n'
    ));
    process.exit(1);
  }
}

function checkHelperVersion(done) {
  request({
    url: 'https://registry.npmjs.org/element-migration-helper',
    timeout: 1000
  }, function(err, res, body) {
    if (err || res.statusCode !== 200) {
      return;
    }
    var latestVersion = JSON.parse(body)['dist-tags'].latest;
    var localVersion = packageConfig.version;
    if (semver.lt(localVersion, latestVersion)) {
      console.log();
      console.log(chalk.yellow('A newer version of element-migration-helper is available.\n'));
      console.log('  latest:  ' + chalk.green(latestVersion));
      console.log('  installed:  ' + chalk.red(localVersion));
      console.log();
      console.log('Please update with: \n');
      console.log(chalk.green('  npm update element-migration-hepler -g'));
      process.exit(1);
    }
    done();
  });
}

function versionChecker(done) {
  checkNodeVersion();
  done();
  // checkHelperVersion(done);
}

module.exports = versionChecker