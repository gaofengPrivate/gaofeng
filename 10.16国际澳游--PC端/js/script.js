//头部下拉菜单效果
$('.tab_1 div').on('click',function(){
    $(this).find('ul').toggle();

});
$('.tab_1 ul li').hover(function(){
    $(this).toggleClass('hover');
});
//头部提交表单
$('')
//导航
$('.mainnav ul li').hover(function(){
    var index=$(this).index()-1;
    $(this).toggleClass('on');
    if(index>=0){
        $('.subnav ul').eq(index).find('li').addClass('cur').parents('ul').siblings().find('li').removeClass('cur');
    }

});
//检测表单是否提交
/*
;(function($){
    $.extend($.fn,{
       clearInput:function(){
           $('#word').on('click',function(){
            $(this).css('display','none');
               $(this).next().val('');
           })
       }
    })
})(jQuery);
$('.text').clearInput();*/
