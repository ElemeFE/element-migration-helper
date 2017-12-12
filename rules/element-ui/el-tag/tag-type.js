'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\btype\s*=\s*['"`{](primary|gray)['"`}]/,
  warning: function(match, typeValue) {
    return {
      reason: 'type attribute now accepts success, info, warning and danger',
      fix: 'Replace ' + chalk.red(typeValue) + ' with ' + chalk.green('success/info/warning/danger') + ' on ' + chalk.red(match)
    };
  }
}