'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\bchange\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'change event now behaves like the native input element, which triggers only on blur or pressing enter. If you need to respond to user input in real time, you can use input event',
      fix: 'Warning for using ' + chalk.red('change') + ' on ' + chalk.red(match)
    };
  }
}