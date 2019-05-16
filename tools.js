function myBind(callBack,context) {
        //将arguments类数组对象改为数组并且给slice传递了一个2，表示从索引2开始截取到末尾
        var arr = Array.prototype.slice.call(arguments,2);
        //返回一个匿名函数
        return function () {
            callBack.apply(context,arr);
        }
    }
     function fn() {
         console.log(this);//obj={}
         console.log(arguments);
     }
function ajaxPromise(options) {
    var _default = {
        url: "",
        type: "GET",
        async: true,
        data: null,
    }

    for(var key in options) {
        if(options.hasOwnProperty(key)) {
            _default[key] = options[key];
        }
    }
    var pro = new Promise(function(reslove, reject) {

        var xhr = new XMLHttpRequest();
        if(_default.type == "GET") {
            var suffix = _default.url.indexOf("?") > -1 ? "&" : "?";
            _default.url += suffix + "_=" +Math.random();
        }

        xhr.open(_default.type, _default.url, _default.async);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                reslove(xhr.responseText);
            }
        }
        setTimeout(function() {
            reject("数据请求失败");
        }, 1000);
        
        xhr.send(_default.data);
        
    });
    return pro;
} 


//createDocumentFragment():创建文档碎片,是固定的写法
var frag = document.createDocumentFragment();
//一般真实项目中字符串拼接的方式+文档碎片的方式
//wo men xiao zu bang bang da
示列代码
var frag = document.createDocumentFragment();
for (var i = 0;i<100;i++){
var curLi = document.createElement("li");
curLi.innerHTML = "皮卡丘"+"丶"+i+"号";
frag.appendChild(curLi);
}
//只回流一次
document.body.appendChild(frag);
//手动释放
<<<<<<< HEAD
frag = null;

var arr=[];
arr.push();
=======
frag = null;   

张轶博到此一游 var zyb = zyb；
>>>>>>> 049540bc00bd8b5b0c5191c6178eb937dfe93f67
