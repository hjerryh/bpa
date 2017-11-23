function openNew(){

    //获取页面的高度和宽度
    var sWidth=document.documentElement.scrollWidth;
    var sHeight=document.documentElement.scrollHeight; //获取页面的高度

    // 创建遮罩层
    var oMask=document.createElement("div");
    oMask.id="mask";
    oMask.height=sHeight+"px";
    oMask.width=sWidth+"px";
    document.body.appendChild(oMask);

    //获取页面的可视区域高度和宽度
    var wHeight=document.documentElement.clientHeight;// 获取页面可视区域的高度
    var wWidth=document.documentElement.clientWidth;

    // var oLogin=document.createElement("div");
    // oLogin.id="login";
    // oLogin.innerHTML="<div class='loginCon'><div id='close'>点击关闭</div></div>";
    // document.body.appendChild(oLogin);      //插入创建的登陆框


    //获取登陆框的宽和高
    // var dHeight=oLogin.offsetHeight;   // 获取登陆框的高度
    // var dWidth=oLogin.offsetWidth;      // 获取登陆框的宽度
    //设置登陆框的left和top
    // oLogin.style.left=wWidth/2-dWidth/2+"px";
    // oLogin.style.top=wHeight/2-dHeight/2+"px";//设置登陆框top值
    // var oClose=document.getElementById("close");

    //点击登陆框以外的区域也可以关闭登陆框
    oMask.onclick=oClose.onclick=function()
    {
        document.body.removeChild(oMask);
        document.body.removeChild(oLogin);
    }
}
window.onload=function()
{
    var oBtn=document.getElementById("menuEdit");
    //点击登录按钮
    oBtn.onclick=function()
    {
        openNew();   //执行openNew函数
    }

}