 //自己模拟bind
    function myBind(callBack,context) {
        //将arguments类数组对象改为数组并且给slice传递了一个2，表示从索引2开始截取到末尾
        var arr = Array.prototype.slice.call(arguments,2);
        //返回一个匿名函数
        return function () {
             callBack.apply(context,arr);
        }
    }

     function fn() {
         console.log(this);
         console.log(arguments);
     }

    var obj = {};
    //形成了一个不销毁私有作用域（闭包）
    var bind = myBind(fn,obj,[1,2,3]);
    bind();


    //第一次调用bind(),告诉bind要执行谁，改变this为谁，传递参数
    //执行第一次bind返回值的时候才把这个函数执行，并且改变this，然后去传递参数