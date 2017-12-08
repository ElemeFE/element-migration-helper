'use strict';

var chalk = require('chalk');
module.exports = function(isDeprecationsFound) {
   if (isDeprecationsFound) {
     return;
   }
  console.log();
  console.log(chalk.green('No obsolete syntax was detected. Well done!\n'));
  console.log(chalk.yellow('And there are some new features in Element-ui 2.x. See more details: \n'));
  console.log(chalk.blue.underline('https://github.com/ElemeFE/element/releases/tag/v2.0.0'));
}