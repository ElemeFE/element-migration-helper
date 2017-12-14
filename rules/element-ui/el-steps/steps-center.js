'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\bcenter\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'Removed center attribute',
      fix: 'Remove ' + chalk.red('center') + ' on ' + chalk.red(match)
    };
  }
}