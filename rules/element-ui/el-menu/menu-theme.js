'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\btheme\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'Removed theme attribute. The color of Menu can be configured using background-color, text-color and active-text-color',
      fix: 'Replace ' + chalk.red('theme') + ' with ' + chalk.green('background-color') + ', ' + chalk.green('text-color') + ' and ' + chalk.green('active-text-color') + ' to configure the color of Menu on ' + chalk.red(match)
    };
  }
}