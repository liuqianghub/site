/**
 * Created by Administrator on 2016/11/28.
 */
$(function(){
    $('#fullpage').fullpage({
        sectionsColor:['#BFF0FF','#82FACA','#6CE0D1','#5898E8','#7931C9'],//每一层背景颜色
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],//每一屏锚点值
        navigation: true,
        navigationTooltips: ['首页', '个人信息', '专业技术', '项目案例', '联系我'],//小圆点提醒
        menu: '#menu',
        afterLoad:function(anchorsLink,index){
            //第二屏文字显示特效
            if(index == 2){
                $('.person-info').each(function(i){
                    var that = this;
                    setTimeout(function(){
                        $(that).fadeIn();
                    },200*i)
                })
            }else{
                $('.person-info').hide();
            }
            //第三屏边框动画
            if(index == 3) {
                $('.section').removeClass("current");
                setTimeout(function () {
                    $('.section').eq(index - 1).addClass("current");
                }, 50)

                $('.text-input').each(function (j) {
                    var that = this;
                    setTimeout(function () {
                        $(that).fadeIn();
                    }, 300 * j)
                })
            }else{
                $('.text-input').hide();
            }
                $('.skill-click').click(function(){
                    $('.animated').each(function(k){
                        var that = this
                        setTimeout(function(){
                            $(that).css('transform','translateX(0)');
                        },100*k)
                    })
                })
            //第5屏
            if(index == 5){
                setTimeout(function() {
                    $('#fifth .overT,#fifth .overB').animate({ 'height': '30%' }, 400).find('#callme').addClass("callme");
                }, 400);
            }

        },

        //离开屏幕前
        onLeave:function(index,nextIndex ,direction){
            if(index === 3){
                $('.animated').css('transform','translateX(120%)');
            }
            if(index===5){
                $('#fifth .overT,#fifth .overB').animate({ 'height': '50%' }, 400).find('#callme').removeClass("callme");
            }
            var $anim = $(".section").eq(index - 1).find(".animated");
            $anim.each(function(i) {
                var that = this;
                setTimeout(function() {
                    $(that).removeClass($(that).data('anim')).css({ visibility: 'hidden' });
                }, 100 * i)
            });
        }
    });

});

//旋转木马
$(function(){
    $("#wrap").carousel();
})



