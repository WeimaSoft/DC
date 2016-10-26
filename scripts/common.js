var url = "http://localhost:8124/insert";
var response = null;
var name ="Ale Su";
var sex = "Male";

$.ajax({
	type : 'POST',
	url : url,
	data : '{"p": 5}',
	dataType : 'json',
	success : function (data) {
		alert(data);
	}
});
