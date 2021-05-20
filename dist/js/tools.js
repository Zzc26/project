//将字符串转为对象
class Tools{
    constructor(){}
    convertStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
    byClassName(node,className){
        if(node.getElementsByClassName){
            return node.getElementsByClassName(className);
        }else{
            let eles = node.getElementsByTagName('*');
            let arr = [];
            for(let i = 0,len = eles.length;i < len;i ++){
                if(eles[i].className === className){
                    arr.push(eles[i]);
                }
            }
            return arr;
        }
    }
}

let tools = new Tools();