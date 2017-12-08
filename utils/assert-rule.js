'use strict';

module.exports = function(fileData, rule) {
  var matches = fileData.line.match(rule.pattern);
  return matches && rule.warning.apply(null, matches);
};
