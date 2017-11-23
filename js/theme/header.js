// 添加公共头部信息
var aop = {
    get: function (port, callback) {
        var url = port;

        var returnd = null;
        $.ajax({
            type: "get",
            url: url,
            contentType: "text/html;charset=utf-8",
            async:false,
            success: function (ajaxdata) {
                if(typeof callback!="undefined"){
                    callback(ajaxdata);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
            }
        });

        return returnd;
    }
}
aop.get("page/header.html",function(t){
    $(".headercontent").html(t);
});