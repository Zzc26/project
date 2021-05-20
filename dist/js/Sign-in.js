$(function(){
    var boxs = $('<div class="boxs"></div>')

    var English = $('<div class="English"><ul><li>‎‎中文(繁體)‎</li><li>English</li></ul></div>')

    $(".p").append(boxs)
    $(".p").append(English)   
    $(".p").mouseover(function(e){
        boxs.css('border-top-color','orange');
    })
    $(".p").mouseleave(function(e){
        boxs.css('border-top-color','white');
    })
	
	
	
	this.arr = [false,false,false];
	
	let that = this;
	$(".tex").click(function(){
		$(".tex").css('border','1px solid orange');
	})
	
	
	$(".psw").click(function(){
		$(".psw").css('border','1px solid orange');
	})
	
	$('.tex').focus(function(){
		$(".tex").val('');
		$(".tex").css('color','black')
			$('.tex').on('blur',function(){
				let re = /^[\u4e00-\u9fa5]+$/;
				let str = $('.tex').val();
				console.log(str)
				if(str === ''){
					$('.account-number').css('display','block')
				}else{
					$('.account-number').css('display','none')
				}
				if(re.test(str)){
					$('.tex').css('background','yellowgreen');
					that.arr[2] = true;
				}else{
					$('.tex').css('background','#ff5c00');
					that.arr[2] = true;
					
			}
		})
	})
	
	
	$(".psw").focus(function(){
		$(".psw").val('');
		$(".psw").css('color','black')
		$(".psw").on('blur',function(){
			let re = /^\w+$/;
			
			let str = $(".psw").val();
			
			if(str === ''){
				$('.password').css('display','block')
			}else{
				$('.password').css('display','none')
			}
			if(re.test(str)){
				$('.psw').css('background','yellowgreen');
				that.arr[1] = true;
			}else{
				$('.psw').css({'background':'#ff5c00'});
				that.arr[1] = true;
			}
		})
	})
	
	$(".cipher").focus(function(){
		$(".cipher").val('');
		$(".cipher").css('color','black')
			$(".cipher").on('blur',function(){
				let one = $(".psw").val();
				
				let str = $(".cipher").val();
				
				if(str === ''){
					$('.cipher-word').css('display','block')
				}else{
					$('.cipher-word').css('display','none')
				}
				if(one === str){
					$('.cipher').css('background','yellowgreen');
					that.arr[1] = true;
				}else{
					$('.cipher').css({'background':'#ff5c00'});
					that.arr[0] = true;
				}
		})
	})
	
	
	
	$(".inp").click(function(){
		
		let unname = $('.tex').val();
		
		let upwd = $(".psw").val();
		
		if(that.arr.indexOf(false) === -1){
			let cookie_str = $.getCookie('user') ? $.getCookie('users') : '';
			
			let cookie_obj = tools.converStrToObj(cookie_str);
			
			if(unname in cookie_obj){
				alert('用户名已注册')
				return;
			}else{
					cookie_obj[unname] = upwd;
			}	
				
			$.cookie('users',JSON.stringify(cookie_obj),{expires : 3,path : "/"});
			alert('注册成功');
		}else{
			alert('请完善信息')
		}
	})
})


