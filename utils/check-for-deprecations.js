'use strict';

var recursiveReaddirSync = require('recursive-readdir-sync');
var path = require('path');
var assertRule = require('./assert-rule');
var reportWarning = require('./report-warning');

var matchedRules = [];
var rulesPath = path.join(__dirname, '../rules');
var rules = recursiveReaddirSync(rulesPath)
  .filter(function (file) {
    return file.indexOf('.js') === file.length - 3 && file.indexOf('.spec') === -1;
  })
  .reduce(function (preResult, file) {
    var component = file.match(/.*\/(.*)\/.*$/)[1];
    var rule = require(file);
    rule.file = file;
    if (!preResult[component]) {
      preResult[component] = [];
    }
    preResult[component].push(rule);
    return preResult;
  }, {});

module.exports = function(fileData) {
  Object.keys(rules).some(function(component) {
    var matches = fileData.line.match(new RegExp('<' + component));
    if (matches) {
      matchedRules = rules[component];
      return true;
    }
    return false;
  });

  return matchedRules.some(function(rule) {
    var warning = assertRule(fileData, rule);
    if (warning) {
      reportWarning(fileData, warning, rule);
      return true;
    }
    return false;
  })
}