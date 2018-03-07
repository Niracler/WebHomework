var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function myLogin() {
    var oUname = document.getElementById("uname")
    var oPass = document.getElementById("upass")
    var oPas = document.getElementById("upas")
    var oError = document.getElementById("error_box")
    oError.innerHTML = "<br>"
    if (oUname.value.length < 6 || oUname.value.length > 20) {
        oError.innerHTML = '请输入6-20位的用户名'
        return;

    } else for (var i = 0; i < oUname.value.length; i++) {
        if (oUname.value.charCodeAt(i) >= 48 || oUname.value.charCodeAt(i) <= 57) {
            oError.innerHTML = '请输入合法字符'
        }
        return;
    }
    if (oUname.value.charCodeAt(0) >= 48 && oUname.value.charCodeAt(0) <= 57) {
        oError.innerHTML = '首字母不能为数字'
        return;
    }
    if (oPas.value != oPass.value) {
        oError.innerHTML = '密码输入不正确'
    }

    if (oPass.value.length < 6 || oPass.value.length > 20) {
        oError.innerHTML = '请输入6-20位的密码'
        return;
    }


}

