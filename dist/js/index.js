// 实现页面功能
$(function(){
    var triangle =  $('<div class ="triangle"></div')
    $(".Apps").append(triangle);

    $('phone li:eq(0)').mouseover(function(e){
            $("box").css({'display':'block','background-color' : 'while'})
    })

    //轮播图
    $('.demo').slider({
     imgList: [
         {
             img: 'img/001.jpg',
             a: '#',
         },
         {
             img: 'img/002.jpg',
             a: '#',
         },
         {
             img: 'img/003.jpg',
             a: '#',
         },
         {
             img: 'img/004.jpg',
             a: '#',
         },
        {
             img: 'img/005.jpg',
             a: '#',
         },
     ], //图片的列表
    width: 1226, //图片的宽
    height: 460, //图片的高
    isAuto: true, //是否自动轮播
    moveTime: 3000, //运动时间
    direction: 'right', //轮播的方向
    btnWidth: 30, //按钮的宽
    btnHeight: 60, //按钮的高
    spanWidth: 10, //span按钮的宽
    spanHeight: 10, //span按钮的高
    spanColor: '#fff', //span按钮的颜色
    activeSpanColor: 'red', //选中的span颜色
    btnBackgroundColor: 'rgba(0, 0, 0, 0.3)', //两侧按钮的颜色
    spanRadius: '50%', //span按钮的圆角程度
    spanMargin: 3, //span之间的距离
    })
	
	
	
	
	//倒计时
	var inputTime =  +new Date('2021-5-22 14:00:00');
	setInterval(ConutDown,1000)
	function ConutDown(time){
		var nowTime = +new Date();
		var times = (inputTime - nowTime) / 1000;
		var h = parseInt(times / 60 / 60 % 24);
		h = h < 10? '0'+ h : h;
		$('.hour').html(h);
		var m = parseInt(times / 60 % 60);
		m = m < 10? '0'+ m : m 
		$('.minute').html(m);
		var s = parseInt(times % 60)
		s = s < 10? '0'+ s : s;
		$('.second').html(s);
	}
	ConutDown('2021-5-22 14:00:00')
})

    
