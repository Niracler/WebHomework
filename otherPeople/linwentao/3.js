function textBlurOne(){
	var creatDiv=document.createElement("div");
	var value=document.getElementById("txt").value;
	var txt=document.createTextNode(value);
	creatDiv.setAttribute("ondblclick","textBlurTwo(this)");
	creatDiv.setAttribute("onclick","textBlurThree(this)");
	creatDiv.appendChild(txt);
	creatDiv.setAttribute("name","0");
	creatDiv.style.width="458px";
	creatDiv.style.height="30px";
	creatDiv.style.border="solid";
	creatDiv.style.marginTop="10px";
	creatDiv.style.marginLeft="10px";
	var div=document.lastChild;
	var div1=div.lastChild;
	var div2=div1.childNodes;
	div2[3].insertBefore(creatDiv,document.getElementById("input"));
}
var clickTimer=null;

function textBlurTwo(obj){         //双击
	if(clickTimer){
		window.clearTimeout(clickTimer);
		clickTimer=null;
	}
	var div=document.lastChild;
	var div1=div.lastChild;
	var div2=div1.childNodes;
	div2[3].removeChild(obj);
}

function textBlurThree(obj){        //单击
	if(clickTimer){
		window.clearTimeout(clickTimer);  //第一次点击时会延迟，如果在延迟的时间内点击第二次的话，会把定时器取消，此时将会执行ondblclick
		clickTimer=null;
	}
	clickTimer=setTimeout(function(){
		var lastObj=document.getElementsByName("1");
		if(lastObj.length!=0){
			lastObj[0].style.backgroundColor="#FFFFFF";
			lastObj[0].setAttribute("name","0");
		}

		//obj.name="1";
		obj.setAttribute("name","1");
		obj.style.backgroundColor="#DFEFFF";
	},300);
}

function textInsert(){
	var div=document.lastChild;
	var div1=div.lastChild;
	var div2=div1.childNodes;
	var obj=document.getElementsByName("1");
	if(obj.length==0)
	   div2[3].insertBefore(creatDiv,document.getElementById("input"));
	else
	   div2[3].insertBefore(creatDiv,obj[0]);
}

function textOver(){
	var div=document.getElementsByClassName("divFrame");
	var divDelete=div[0].childNodes;
	var i=1;
	while(divDelete[i].className!="divMid")
	      div[0].removeChild(divDelete[i]);
}

