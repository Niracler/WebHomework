var number = 0;
var newobj;

/*
函数功能：删除内容
* */
function deletethis(obj) {
    obj.innerHTML = "";
}

/*
* 函数功能：改变内容
* */
function changecss(obj) {
    var names = document.getElementsByName("word");
    for (var i = 0; i < number; i++) {
        names[i].style.background = "#48D1CC";
    }
    obj.style.background = "rgb(124,0,198)";
}

/*函数功能：获得该对象*/
function getDiv(obj) {
    newobj = obj;
}

/*函数功能：构造一个div
*   step1:构造一个div对象
    step2:为该对象起名word
    step3:双击事件=>删除内容
    step4:单击事件=>修改内容
    step5:失去焦点=>获得该对象，
    step6:让其可编辑
    step7:放到放文字的地方
    step8:清空content
* */
function creatDiv() {
    var div = document.createElement("div");
    div.setAttribute("name", "word");
    div.setAttribute("ondblclick", "deletethis(this)");
    div.setAttribute("onclick", "changecss(this)");
    div.setAttribute("onblur", "getDiv(this)");
    div.setAttribute("contenteditable","true");
    div.innerHTML = document.getElementById("content").value;
    document.getElementById("content").value = "";
    number++;

    return div;
}

/*
函数功能：添加信息
具体步骤，
    step1:找到放文字的地方
    step2:构造新的div
    step3:添加到word-place
* */
function addElementDiv() {
    var wordPlace= document.getElementById("word-place");
    var div = creatDiv();
    wordPlace.appendChild(div);
}

/*
函数功能：清空信息
具体步骤，
    step1:找到文字
    step2:循环删除
    step3:清空content
* */
function clearall() {
    var names = document.getElementsByName("word");
    for (var i = 0; i < number; i++) {
        names[i].innerHTML = "";
    }
    var content = document.getElementById("content");
    content.value = "";
}

/*
函数功能：插入信息
具体步骤，
    step1:找到放文字的地方
    step2:构造一个div对象
    step3:插入
* */
function insertDiv() {
    var wordPlace = document.getElementById("word-place");
    var div = creatDiv();
    if (newobj)
        wordPlace.insertBefore(div, newobj.nextSibling);
    else
        wordPlace.appendChild(div);

}

