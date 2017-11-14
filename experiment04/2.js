function check() {
    var username = document.getElementById("username").value;
    var temp = /^0?[a-zA-Z][a-zA-Z0-9-_]{4,7}$/;
    //     ^0?[a-zA-Z]   判断第一个字符是否为   字母
    if (temp.test(username))
        document.getElementById("tipMsg-username").innerHTML = "";
    else
        document.getElementById("tipMsg-username").innerHTML = "*用户昵称错误*";


    var signature = document.getElementById("signature").value;
    if (signature === "")
        document.getElementById("tipMsg-signature").innerHTML = "*请填写个人签名*";
    else
        document.getElementById("tipMsg-signature").innerHTML = "";


    var gender = document.getElementById("gender").value;
    if (gender === "0")
        document.getElementById("tipMsg-gender").innerHTML = "*请选择性别*";
    else
        document.getElementById("tipMsg-gender").innerHTML = "";

    var number = 0;
    var hobby = document.getElementsByName("hobby");
    for (var i = 0; i < 6; i++) {
        if (hobby[i].checked) {
            number++;
        }
    }
    if (number === 0)
        document.getElementById("tipMsg-hobby").innerHTML = "*至少选择一个爱好*";
    else
        document.getElementById("tipMsg-hobby").innerHTML = number;


    var email = document.getElementById("email").value;
    var temp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (temp.test(email)) {
        document.getElementById("tipMsg-email").innerHTML = "";
    } else {
        document.getElementById("tipMsg-email").innerHTML = "*邮箱格式错误*";
    }
    ;


    var relation = document.getElementById("relation").value;
    var temp = /^0\d{2,3}-\d{7,8}(-\d{1,6})?$/;
    if (temp.test(relation)) {
        document.getElementById("tipMsg-relation").innerHTML = "";
    } else {
        document.getElementById("tipMsg-relation").innerHTML = "*固定电话格式错误（需带区号xxxx-xxxxxxx）*";
    }
    ;


    var tel = document.getElementById("tel").value;
    var temp = /^0?1[3][7][0-9]\d{7}$/;
    if (temp.test(tel)) {
        document.getElementById("tipMsg-tel").innerHTML = "";
    } else {
        document.getElementById("tipMsg-tel").innerHTML = "*手机号码错误*";
    }
    ;


}
