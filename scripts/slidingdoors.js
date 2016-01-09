window.onload = function() {
	//�����������
	var box = document.getElementById("container");
	//���ͼƬNodeList���󼯺�
	var imgs = box.getElementsByTagName("img");
	//����ͼƬ�Ŀ��
	var imgWidth = imgs[0].offsetWidth;
	//�����ڲ�����Ŀ��
	var exposeWidth = 160;
	//���������ܿ��
	var boxWidth = imgWidth + (imgs.length-1)*exposeWidth;
	box.style.width = boxWidth + "px";
	//����ÿ���ŵĳ�ʼλ��
	function setImgPos() {
		for (var i=1,len=imgs.length;i<len ;i++ )
		{
			imgs[i].style.left = imgWidth + exposeWidth*(i-1) + "px";
		}
	}
	setImgPos();
	//ÿ���Ŵ�ʱӦ���ƶ��ľ���
	var translate = imgWidth - exposeWidth;
	//Ϊÿ���Ű��¼�
	for (var i=0,len=imgs.length;i<len ;i++ )
	{
		//ʹ���������õĺ������ʽ��Ϊ�˻�ȡ��ͬ��iֵ
		(function(i) {
			imgs[i].onmouseover = function() {
				//�Ƚ�ͼƬ��λ
				setImgPos();
				//����
				for (var j=1;j<=i ;j++ )
				{
					imgs[j].style.left = parseInt(imgs[j].style.left,10) - translate + "px";
				}
			}
		})(i);
	}

};