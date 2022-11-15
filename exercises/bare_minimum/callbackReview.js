/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, {encoding: 'utf-8'}, (err, fileData) => {
    if (err) {
      callback(err, fileData);
    } else {
      callback(err, fileData.split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, (error, response) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, response.statusCode);
    }
  });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
