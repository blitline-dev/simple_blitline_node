/**
 * Library version.
 */

exports.version = '2.0.0';

var http = require('http');
var url = require('url');
/**
 * Exports.
 */
 
module.exports = function() {
  var jobs = [];
  
  this.addJob = function(jobHash) {
    jobs.push(jobHash);
  };
  
  this.postJobs = function(callback) {
    var siteUrl = url.parse("http://api.blitline.com/job");
    var site = http.createClient(siteUrl.port || 80, siteUrl.host);
    var body = JSON.stringify({ "json" : jobs });

    var request = site.request('POST', siteUrl.pathname, {
            'host' : siteUrl.host,
            'Content-Length': body.length,
            'Content-Type': 'application/json'
            });
        request.write(body);
        request.end();
        
        request.on('response', function (response) {
          response.setEncoding('utf8');
          response.on('data', function (chunk) {
            callback(chunk);
            jobs = []
          });
        });
  }
}