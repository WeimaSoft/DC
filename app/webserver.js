var http = require("http");
var mongo = require("./mongodbconn.js");
var fs = require("fs");
var url = require("url");
var path = require("path");

var server = http.createServer(function (req, res) {
		var urla = req.url;
		var data = '';
		req.on('data', function (chunk) {
			console.log(chunk);
			data = chunk;
		});
		console.log(data);
		if (urla === '/insert') {
			mongo.insert(JSON.parse(data), "tb2", res);
		} else if (urla === '/remove') {
			mongo.insert(JSON.parse(data), "tb2", res);
		} else if (urla === '/select') {
			mongo.insert(JSON.parse(data), "tb2", res);
		} else {
			var pathname = url.parse(urla).pathname;
			console.log(pathname);
			var realPath = "dc" + pathname;

			fs.exists(realPath, function (exists) {

				if (!exists) {

					res.writeHead(404, {
						'Content-Type' : 'text/plain'
					});

					res.write("This request URL " + pathname + " was not found on this server.");

					res.end();

				} else {

					fs.readFile(realPath, "binary", function (err, file) {

						if (err) {

							res.writeHead(500, {
								'Content-Type' : 'text/plain'
							});

							res.end(err);

						} else {

							res.write(file, "binary");

							res.end();

						}

					});

				}

			});
		}
	}).listen(8124);
