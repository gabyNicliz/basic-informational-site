const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
  let q = url.parse(req.url, true);
  let filepath = '.' + q.pathname;

  fs.readFile(filepath, function(err, data) {
    if (err) {
      fs.readFile('404.html', function(err, errData) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(errData);
        return res.end();
      });
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}).listen(3000);