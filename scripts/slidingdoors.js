window.onload = function() {
	//获得容器对象
	var box = document.getElementById("container");
	//获得图片NodeList对象集合
	var imgs = box.getElementsByTagName("img");
	//单张图片的宽度
	var imgWidth = imgs[0].offsetWidth;
	//设置掩藏门体的宽度
	var exposeWidth = 160;
	//设置容器总宽度
	var boxWidth = imgWidth + (imgs.length-1)*exposeWidth;
	box.style.width = boxWidth + "px";
	//设置每道门的初始位置
	function setImgPos() {
		for (var i=1,len=imgs.length;i<len ;i++ )
		{
			imgs[i].style.left = imgWidth + exposeWidth*(i-1) + "px";
		}
	}
	setImgPos();
	//每道门打开时应该移动的距离
	var translate = imgWidth - exposeWidth;
	//为每道门绑定事件
	for (var i=0,len=imgs.length;i<len ;i++ )
	{
		//使用立即调用的函数表达式，为了获取不同的i值
		(function(i) {
			imgs[i].onmouseover = function() {
				//先将图片复位
				setImgPos();
				//打开门
				for (var j=1;j<=i ;j++ )
				{
					imgs[j].style.left = parseInt(imgs[j].style.left,10) - translate + "px";
				}
			}
		})(i);
	}

};