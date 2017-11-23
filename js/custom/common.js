
// 设置左侧菜单类
$(".vernav ul li").click(function(){
    $(this).siblings().removeClass("current");
    $(this).addClass("current");
    $(".centercontent").css("display","none");
})
$('.togglemenu').click(function(){
    if(!$(this).hasClass('togglemenu_collapsed')) {

        //if(jQuery('.iconmenu').hasClass('vernav')) {
        if($('.vernav').length > 0) {
            if($('.vernav').hasClass('iconmenu')) {
                $('body').addClass('withmenucoll');
                $('.iconmenu').addClass('menucoll');
            } else {
                $('body').addClass('withmenucoll');
                $('.vernav').addClass('menucoll').find('ul').hide();
            }
        } else if($('.vernav2').length > 0) {
            //} else {
            $('body').addClass('withmenucoll2');
            $('.iconmenu').addClass('menucoll2');
        }

        $(this).addClass('togglemenu_collapsed');

        $('.iconmenu > ul > li > a').each(function(){
            var label = $(this).text();
            $('<li><span>'+label+'</span></li>')
                .insertBefore($(this).parent().find('ul li:first-child'));
        });
    } else {

        //if(jQuery('.iconmenu').hasClass('vernav')) {
        if($('.vernav').length > 0) {
            if($('.vernav').hasClass('iconmenu')) {
                $('body').removeClass('withmenucoll');
                $('.iconmenu').removeClass('menucoll');
            } else {
                $('body').removeClass('withmenucoll');
                $('.vernav').removeClass('menucoll').find('ul').show();
            }
        } else if($('.vernav2').length > 0) {
            //} else {
            $('body').removeClass('withmenucoll2');
            $('.iconmenu').removeClass('menucoll2');
        }
        $(this).removeClass('togglemenu_collapsed');

        $('.iconmenu ul ul li:first-child').remove();
    }
});


// 设置弹窗
function openNew(id){

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

    var oLogin=document.getElementById(id);

    //获取登陆框的宽和高
    var dHeight=oLogin.offsetHeight;   // 获取登陆框的高度
    var dWidth=oLogin.offsetWidth;      // 获取登陆框的宽度
    //设置登陆框的left和top
    oLogin.style.left=wWidth/2-dWidth/2+"px";
    oLogin.style.top=wHeight/2-dHeight/2+"px";//设置登陆框top值

    function select_form(myform){
        myform.find("input,textarea").val("");
    }
    // var oClose=document.getElementById("close");
    $(".close").click(function(){
        $(this).parents("#"+id).hide();
        select_form($(this).parents("#"+id));
        $("#mask").remove();
    })
    $(".oclose").click(function(){
        $(this).parents("#"+id).hide();
        select_form($(this).parents("#"+id));
        $("#mask").remove();
    })
    // $("#mask").click(function(){
    //     $("#"+id).hide();
    //     $("#mask").remove();
    // })
}


//获取基本datatable设置
// var gettableinfo = function(surl,param,returndval,paramfunc,callbackfunc){
//     return {
//
//         ajax : function(data, callback, settings) {
//             $.ajax({
//                 type: "POST",
//                 url: surl,
//                 contentType: "html/text;charset=utf-8",
//                 cache : false,  //禁用缓存
//                 data:JSON.stringify(paramfunc(param,data)),    //传入已封装的参数
//                 async:true,
//                 dataType: "json",
//                 success: function(result) {
//                     //异常判断与处理
//                     if (result.errorCode) {
//                         console.log("查询失败");
//                         return;
//                     }
//                     if(typeof callbackfunc!="undefined"){
//                         callbackfunc(result);
//                     }
//                     //封装返回数据
//                     var returnData = {};
//                     returnData.draw = data.draw;//这里直接自行返回了draw计数器,应该由后台返回
//                     returnData.recordsTotal = result.totalCount;//总记录数
//                     returnData.recordsFiltered = result.totalCount;//后台不实现过滤功能，每次查询均视作全部结果
//                     returnData.data = result[returndval];
//                     //调用DataTables提供的callback方法，代表数据已封装完成并传回DataTables进行渲染
//                     //此时的数据需确保正确无误，异常判断应在执行此回调前自行处理完毕
//                     callback(returnData);
//                 },
//                 error: function(XMLHttpRequest, textStatus, errorThrown) {
//                     console.log("查询失败");
//                 }
//             });
//         },
//     };
// }
//datatable配置
var CONSTANT = {
    DATA_TABLES : {
        DEFAULT_OPTION : { //DataTables初始化选项
            language: {
                "sProcessing":   "处理中...",
                "sLengthMenu":   "每页 _MENU_ 项",
                "sZeroRecords":  "没有匹配结果",
                "sInfo":         "当前显示第 _START_ 至 _END_ 项，共 _TOTAL_ 项。",
                "sInfoEmpty":    "当前显示第 0 至 0 项，共 0 项",
                "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                "sInfoPostFix":  "",
                "sSearch":       "搜索:",
                "sUrl":          "",
                "sEmptyTable":     "表中数据为空",
                "sLoadingRecords": "载入中...",
                "sInfoThousands":  ",",
                "oPaginate": {
                    "sFirst":    "首页",
                    "sPrevious": "上页",
                    "sNext":     "下页",
                    "sLast":     "末页",
                    "sJump":     "跳转"
                },
                "oAria": {
                    "sSortAscending":  ": 以升序排列此列",
                    "sSortDescending": ": 以降序排列此列"
                }
            },
            autoWidth: false,   //禁用自动调整列宽
            stripeClasses: ["odd", "even"],//为奇偶行加上样式，兼容不支持CSS伪类的场合
            processing: false,  //隐藏加载提示,自行处理
            serverSide: true,   //启用服务器端分页
            searching: false,    //禁用原生搜索
            ordering: false,
            /*      dom: "Bfrtip",
                  buttons: [
                  {
                      extend: "copy",
                      className: "btn-sm",
                      text:"复制"
                  },
                  {
                      extend: "csv",
                      className: "btn-sm"
                  },
                  {
                      extend: "print",
                      className: "btn-sm"
                  }
              ]*/
        },
        COLUMN: {
            CHECKBOX: { //复选框单元格
                className: "td-checkbox",
                orderable: false,
                width: "30px",
                data: null,
                render: function (data, type, row, meta) {
                    return '<input type="checkbox" class="iCheck">';
                }
            }
        },
        RENDER: {   //常用render可以抽取出来，如日期时间、头像等
            ELLIPSIS: function (data, type, row, meta) {
                data = data||"";
                return '<span title="' + data + '">' + data + '</span>';
            }
        }
    }
};


$("#a").click(function () {
    $("#aa").css("display","block");
})
$("#b").click(function () {
    $("#bb").css("display","block");
})
$("#c").click(function () {
    $("#cc").css("display","block");
})
$("#d").click(function () {
    $("#dd").css("display","block");
})
$("#e").click(function () {
    $("#ee").css("display","block");
})