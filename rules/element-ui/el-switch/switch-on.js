'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\b((on|off)-(icon\-class|text|color|value))\s*=\s*['"`{].*['"`}]/,
  warning: function(match, attr, prefix, postfix) {
    return {
      reason: 'Attributes starting with on-* will be parsed to events in JSX, making all on-* attributes of Switch not able to work in JSX. So on-* attributes are renamed to active-*, and accordingly off-* attributes are renamed to inactive-*. This change affects the following attributes: on-icon-class, off-icon-class, on-text, off-text, on-color, off-color, on-value, off-value',
      fix: 'Replace all ' + chalk.red('on-*') + ' and ' + chalk.red('off-*') + ' with ' + chalk.green('active-*') + ' and ' + chalk.green('inactive-*') + ' on ' + chalk.red(match)
    };
  }
}