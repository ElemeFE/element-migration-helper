'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\bv-model\s*=\s*['"`].*['"`]/,
  warning: function(match) {
    return {
      reason: 'Now the visibility of Dialog cannot be controlled by v-model',
      fix: 'Replace ' + chalk.red('v-model') + ' with ' + chalk.green('visible') + ' or ' + chalk.green('visible.sync') + ' to control the visibility of dialog on ' + chalk.red(match)
    };
  }
}