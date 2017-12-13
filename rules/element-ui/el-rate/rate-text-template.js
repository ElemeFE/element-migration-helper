'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\btext-template\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'text-template is renamed to score-template',
      fix: 'Replace ' + chalk.red('text-template') + ' with ' + chalk.green('score-template') + ' on ' + chalk.red(match)
    };
  }
}