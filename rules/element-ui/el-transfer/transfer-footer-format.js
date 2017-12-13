'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\bfooter-format\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'footer-format is renamed to format',
      fix: 'Replace ' + chalk.red('footer-format') + ' with ' + chalk.green('format') + ' on ' + chalk.red(match)
    };
  }
}