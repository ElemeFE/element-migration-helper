#!/usr/bin/env node
'use strict'

var versionChecker = require('./utils/version-checker');

versionChecker(function() {
  var fs = require('graceful-fs');
  var glob = require('glob');
  var split = require('split');
  var checkForDeprecations = require('./utils/check-for-deprecations');
  var printSummary = require('./utils/print-summary');

  var args = process.argv.slice(2);
  var filesAndOrFolders = args.length ?
    args.length === 1 ? args + '{/**/*,}' : '{' + args.join(',') + '}{/**/*,}' :
    '**/*';

  glob(filesAndOrFolders, {
    nodir: true,
    ignore: [
      '**/.git/**/*',
      '**/node_modules/**/*',
      '**/tmp/**/*',
      '**/vender/**/*',
      '**/logs/**/*',
      '**/dist/**/*',
      '**/*.+(jpeg|jpg|gif|png|svg|woff|woff2|ttf|otf|eot|log|zip|map|tar|gz|db|sqlite|sqlite3)',
      '**/(G|g)ulpfile.js'
    ]
  }, function(err, files) {
    if (err) throw err;
    var isDeprecationFound = false;
    var fileChecks = files.map(function(file) {
      return new Promise(function(resolve, reject) {
        var lineNum = 0;
        fs.createReadStream(file)
          .pipe(split())
          .on('data', function(line) {
            lineNum++;
            var lineHasDeprecation = checkForDeprecations({
              line: line,
              lineNum: lineNum,
              file: file
            });
            if (lineHasDeprecation) {
              isDeprecationFound = true;
            }
          })
          .on('end', resolve);
      });
    });
    Promise.all(fileChecks).then(function() {
      if (!isDeprecationFound) {
        printSummary();
      }
    }).catch(function(err) {
      throw err;
    });
  });
});