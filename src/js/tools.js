function(e){
    return {
        randInt : function(min,max){
            if(min > max){
                var t = min;
                min = max;
                max = t
            }
            return Math.floor(Math.random() * (max - min) + 1 + min);
        },

        drag : function($obj){
            $obj.mousedown(function(e){
                var dis_x = e.pageX - $(this).offset().left;

                var dis_y = e.pageY - $(this).offset().top;

                $(document).mousemove(function(e){
                    $obj.css({left : e.pageX - dis_x,top : e.pageY - dis_y})
                })
                $(document).mouseup(function(){
                    $(this).off();
                })

                return false;
            })
        },

        ajax : function(url){
            var xhr = new XMLHttpRequest();
            xhr.open('get',url,true)
            xhr.send();
            return new Promise((resolve,reject) =>{
                xhr.onreadystatechange = function(){
                    if(xhr.readyState === 4){
                        if(xhr.status === 200){
                            resolve(xhr.responseText);
                        }else{
                            reject();
                        }
                    }
                }
            })
        }
    }
}