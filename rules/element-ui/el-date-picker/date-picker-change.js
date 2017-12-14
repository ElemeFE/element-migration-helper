'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\bchange\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'The params of DatePicker\'s change event is now the binding value itself. Its format is controlled by value-format',
      fix: 'Warning using ' + chalk.red('props') + ' on ' + chalk.red(match)
    };
  }
}