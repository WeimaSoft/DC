var http=require("http");
var MongoClient = require('mongodb').MongoClient;

var server= http.createServer(function(req,res){
	var DB_CONN_STR = 'mongodb://localhost:27017/test';	

	var selectData = function(db, callback) {  
		//连接到表  
		var collection = db.collection('tb2');
		//查询数据w
		var whereStr = {"name":'wilson001'};
		collection.find(whereStr).toArray(function(err, result) {
			if(err)
			{
			  console.log('Error:'+ err);
			  return;
			}     
			callback(result);
			});
	}
		
	MongoClient.connect(DB_CONN_STR, function(err, db) {
	  console.log("连接成功！");
	  selectData(db, function(result) {
		  console.log(result.toString());
		 result = JSON.stringify(result);
		  console.log(result);
		//res.writeHead(200,{'Content-Type':'text/plain'});  
		res.write(result);
		res.end();  
		db.close();
	  });
	});

}).listen(8124);
