var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';
var resultRes = "";

function select(where, collectionName, res) {
	MongoClient.connect(DB_CONN_STR, function (err, db) {
		var collection = db.collection(collectionName);
		collection.find(where).toArray(function (err, result) {
			db.close();
			if (err) {
				console.log('Error:' + err);
				return;
			}
			res.write(JSON.stringify(result));
			res.end();
		});
	});
}

function insert(objects, collectionName, res) {
	MongoClient.connect(DB_CONN_STR, function (err, db) {
		var collection = db.collection(collectionName);
		collection.insert(objects,{safe:true},function (err, result) {
			db.close();
			if (err) {
				console.log('Error:' + err);
				return;
			}
			res.write(JSON.stringify(result));
			res.end();
		});
	});
}

function remove(where, collectionName, res) {
	MongoClient.connect(DB_CONN_STR, function (err, db) {
		var collection = db.collection(collectionName);
		collection.remove(where,{safe:true},function (err, result) {
			db.close();
			if (err) {
				console.log('Error:' + err);
				return;
			}
			res.write(JSON.stringify(result));
			res.end();
		});
	});
}

exports.select = select;
exports.insert = insert;
exports.remove = remove;
