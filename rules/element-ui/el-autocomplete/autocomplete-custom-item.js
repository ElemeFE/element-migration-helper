'use strict';

var chalk = require('chalk');

module.exports = {
  pattern: /\bcustom-item\s*=\s*['"`{].*['"`}]/,
  warning: function(match) {
    return {
      reason: 'Removed custom-item attribute. Now the template of input suggestions can be customized using scoped slot',
      fix: 'Replace ' + chalk.red('custom-item') + ' with ' + chalk.blue('scoped slot') + ' to customize the template of input suggestions on ' + chalk.red(match)
    };
  }
}