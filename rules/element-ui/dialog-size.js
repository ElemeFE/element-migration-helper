'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /<el-dialog.*size\s*=\s*['"`]/,
  warning: function(match) {
    return {
      reason: 'The <el-dialog> component no longer has size attributes',
      fix: 'Replace ' + chalk.red('size') + ' with ' + chalk.green('width') + ' or ' + chalk.green('fullscreen') + ' to control the size of dialog on ' + chalk.red(match)
    };
  }
}