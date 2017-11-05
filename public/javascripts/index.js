$(function(){
    $('.leftnav>ul>li').on('click',function(){
        $('.content').load($(this).attr('p'));
        
    });

    //模拟点击
    $('.leftnav>ul>li').eq(0).trigger('click');
    
});