'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\binline-template\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'Removed support for customizing column template using inline-template',
      fix: 'Remove ' + chalk.red('inline-template') + ' logics on ' + chalk.red(match)
    };
  }
}