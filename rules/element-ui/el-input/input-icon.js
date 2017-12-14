'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\bicon\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'Removed icon attribute. Now the suffix icon can be configured using suffix-icon attribute or suffix named slot',
      fix: 'Replace ' + chalk.red('icon') + ' with ' + chalk.green('suffix-icon') + ' or ' + chalk.green('suffix') + ' to configure the suffix icon of Input on ' + chalk.red(match)
    };
  }
}