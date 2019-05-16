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