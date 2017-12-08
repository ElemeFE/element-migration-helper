'use strict';

var chalk = require('chalk');
var warningCount = 0;
module.exports = function(fileData, warning, rule) {
  warningCount++;

  console.log();
  console.log(chalk.yellow(warningCount + '. ' + warning.fix));
  console.log(chalk.blue('  Line ' + fileData.lineNum + ': ' + fileData.file));
  console.log(chalk.cyan.dim('  Reason: ' + warning.reason));
  console.log(chalk.cyan.dim('  More info: ') + chalk.blue('https://github.com/ElemeFE/element/releases/tag/v2.0.0'))
};
