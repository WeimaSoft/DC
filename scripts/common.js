var url = "http://localhost:8124/";
var response = null;

var xhr=new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.onreadystatechange=function(){
	if(xhr.readyState==4){
		if(xhr.status==200){
				debugger;
			response=xhr.responseText;
		}
	}
}
xhr.send(null);