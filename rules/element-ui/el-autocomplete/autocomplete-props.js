'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\bprops\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'Removed props attribute. Now you can use value-key attribute to designate key name of the input suggestion object for display',
      fix: 'Replace ' + chalk.red('props') + ' with ' + chalk.blue('value-key') + ' to customize the template of input suggestions on ' + chalk.red(match)
    };
  }
}