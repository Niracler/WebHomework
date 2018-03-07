var number = 4;
var newobj;

function addElementDiv() {
　　　　var parent = document.getElementById("mydiv");
		
　　　　//添加 div
　　　　var div = document.createElement("div");

　　　　//设置 div 属性，如 id     setAttribute();  设置name="information"
　　　　div.setAttribute("name", "information");
　	  div.setAttribute("ondblclick", "deletethis(this)");
	  div.setAttribute("onclick", "changecss(this)");
　　　　div.innerHTML = document.getElementById("article").value;
　　　　parent.appendChild(div);
	  document.getElementById("article").value = "";
	  number++;
}

function clearall(){
	var names = document.getElementsByName("information");
	for(var i=0;i<number;i++){
		names[i].innerHTML = "";
	}
	var content = document.getElementById("article");
		content.value = "";
}

function deletethis(obj){
	obj.innerHTML = "";
}

function changecss(obj){
	var names = document.getElementsByName("information");
	for(var i=0;i<number;i++){
		names[i].style.background = "#48D1CC";
	}
	obj.style.background = "rgb(124,0,198)";
}

function getDiv(obj){
	 newobj = obj;
}

function insertDiv(){
	  var parent = document.getElementById("mydiv");
	  var div = document.createElement("div");
　　　　//设置 div 属性，如 id     setAttribute();  设置name="information"
　　　　div.setAttribute("name", "information");
　	  div.setAttribute("ondblclick", "deletethis(this)");
	  div.setAttribute("onclick", "changecss(this)");
　　　　div.innerHTML = document.getElementById("article").value;
	  document.getElementById("article").value = "";
	  number++;
	if(newobj)
		parent.insertBefore(div, newobj.nextSibling);
	else
		parent.appendChild(div);
	  
}

