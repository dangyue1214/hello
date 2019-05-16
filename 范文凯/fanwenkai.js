<script>
//1.创建ajax的实例
	let xhr = new XMLHttpRequest();
//2.请求配置项
	xhr.open("get","txt",true);
	console.log(xhr);
//3.监听状态改变 0~663353端口号范围
	xhr.onreadystatechange = function(){
//ajax的状态为2的时候
	if(xhr.readyState ===2){

	};	//服务器返回的HTTP网络状态码为200并且已经获取了请求主体内容
	if (xhr.readyState === 4&&xhr.status === 200){
		//获取服务器返回的响应内容responseText
		console.log(xhr.responseText);
	};
};
//4.发送请求
	xhr.send(null);
</script>