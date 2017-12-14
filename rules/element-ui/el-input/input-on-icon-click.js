'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\b(on-icon-click|click)\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'Removed on-icon-click attribute and click event. Now to add click handler on icons, please use named slots',
      fix: 'Replace ' + chalk.red('on-icon-click') + ' and ' + chalk.red('click') + ' with ' + chalk.blue('named slots') + ' to add click handler on icons of Input on ' + chalk.red(match)
    };
  }
}