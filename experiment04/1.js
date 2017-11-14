/*这个，是自动运行的函数*/
(function () {
    var n1 = document.getElementById('num1'),
        n2 = document.getElementById('num2'),
        s = document.getElementById('symbol'),
        rs = document.getElementById('result'),
        sr = document.getElementById('showResult');

    rs.onclick = function () {
        switch (s.value) {
            case '+':
                sr.value = parseInt(n1.value) + parseInt(n2.value);
                break;
            case '-':
                sr.value = parseInt(n1.value) - parseInt(n2.value);
                break;
            case '*':
                sr.value = parseInt(n1.value) * parseInt(n2.value);
                break;
            case '/':
                sr.value = parseInt(n1.value) / parseInt(n2.value);
                break;
        }
    };
})();