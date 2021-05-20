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
	
	
	
	this.arr = [false,false];
	
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
					that.arr[0] = true;
				}else{
					$('.tex').css('background','#ff5c00');
					that.arr[0] = true;
					
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
				that.arr[0] = true;
			}
		})
	})
	
	
	$(".inp").click(function(){
		
		let unname = $('.tex').val();
		
		let upwd = $(".psw").val();
		
		if(that.arr.indexOf(false) === -1){
			let cookie_str = $.getCookie('user');
			
			let cookie_obj = tools.converStrToObj(cookie_str);
			
			if(unname in cookie_obj){
				if(upwd === cookie_obj[unname]){
					location.href = '';
				}else{
					alert('密码不正确')
				}
				return;
			}else{
				alert("用户名不存在");	
			}
		}else{
			alert('请完善信息')
		}
	})
})


