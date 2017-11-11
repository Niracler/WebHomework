//定义两个对象？1.获取事件.2.循环控制
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++)
{
    //一个被点击时的动作方法
    acc[i].onclick = function ()
    {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block")
        {
            panel.style.display = "none";
        }
        else
        {
            panel.style.display = "block";
        }
    }
}