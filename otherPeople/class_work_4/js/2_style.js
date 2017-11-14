function check() {
    var username = document.getElementById("username").value;
    var newusername = /^0?[a-zA-Z][a-zA-Z0-9-_]{4,7}$/;
    //     ^0?[a-zA-Z]   判断第一个字符是否为   字母
    if (newusername.test(username))
        document.getElementById("newusername").innerHTML = "";
    else
        document.getElementById("newusername").innerHTML = "*用户昵称错误*";


    var signature = document.getElementById("signature").value;
    if (signature == "")
        document.getElementById("newsignature").innerHTML = "*请填写个人签名*";
    else
        document.getElementById("newsignature").innerHTML = "";


    var sex = document.getElementById("sex").value;
    if (sex == "0")
        document.getElementById("newsex").innerHTML = "*请选择性别*";
    else
        document.getElementById("newsex").innerHTML = "";

    var number = 0;
    var i;
    var box = document.getElementById("box1");
    for (i = 0; i < 6; i++) {
        if (box.checked) {
            number++;
        }
        var box = box.nextSibling;
    }
    if (number == 0)
        document.getElementById("newhobby").innerHTML = "*至少选择一个爱好*";
    else
        document.getElementById("newhobby").innerHTML = number;


    var email = document.getElementById("email").value;
    var newemail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (newemail.test(email)) {
        document.getElementById("newemail").innerHTML = "";
    } else {
        document.getElementById("newemail").innerHTML = "*邮箱格式错误*";
    }
    ;


    var relation = document.getElementById("relation").value;
    var newrelation = /^0\d{2,3}-\d{7,8}(-\d{1,6})?$/;
    if (newrelation.test(relation)) {
        document.getElementById("newrelation").innerHTML = "";
    } else {
        document.getElementById("newrelation").innerHTML = "*固定电话格式错误（需带区号xxxx-xxxxxxx）*";
    }
    ;


    var tel = document.getElementById("tel").value;
    var newtel = /^0?1[3][7][0-9]\d{7}$/;
    if (newtel.test(tel)) {
        document.getElementById("newtel").innerHTML = "";
    } else {
        document.getElementById("newtel").innerHTML = "*手机号码错误*";
    }
    ;


}
