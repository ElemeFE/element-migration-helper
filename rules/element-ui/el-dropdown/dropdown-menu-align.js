'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\bmenu-align\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'menu-align is renamed to placement. Now it supports more positions',
      fix: 'Replace ' + chalk.red('menu-align') + ' with ' + chalk.green('placement') + ' on ' + chalk.red(match)
    };
  }
}