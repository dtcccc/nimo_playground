    //图片的过程中，横坐标的轨迹是以一点为中心的正弦曲线
    //利用了setTimeout函数完成了动画的功能
    //图片
    var snowsrc="image/snow.png"
    //雪花个数控制
    var no = 0,cr = 0,myPace = 0;
    //声明变量，xp表示横坐标，yp表示纵坐标>
    var dx, xp, yp;
    //声明变量，am表示左右摆动的幅度，stx表示横坐标的偏移步长，sty表示纵坐标的步长>
    var am, stx, sty;  
    {
      //获取当前窗口的宽度
      clientWidth = document.body.clientWidth;
      //获取当前窗口的高度
      clientHeight = document.body.clientHeight;
    }
    var dx = new Array();
    var xp = new Array();
    var yp = new Array();
    var am = new Array();
    var stx = new Array();
    var sty = new Array();
    var snowFlakes = new Array();
    function snow() {  
	//生成新的雪花
	if(cr!=no)
	{
	  dx[cr] = 0;                        
      //第cr个图片的横坐标初始值
      xp[cr] = Math.random()*(clientWidth-20);  
      //yp[i] = Math.random()*clientHeight;//第cr个图片的纵坐标初始值
	  yp[cr]=0;
      am[cr] = Math.random()*10;         //第cr个图片的左右摆动的幅度
      stx[cr] = 0.02 + Math.random()/10; //第cr个图片x方向的步长
      sty[cr] = 0.7 + Math.random();     //第cr个图片y方向的步长
      //生成一个容纳雪花图片的div，并设置其绝对坐标
      var snowFlakeDiv = document.createElement('div');
      snowFlakeDiv.setAttribute('id', 'dot'+ cr);
      snowFlakeDiv.style.position = 'fixed';
      snowFlakeDiv.style.top = 15;
      snowFlakeDiv.style.left = 15;
      //生成一个雪花图片对象，设置宽高，并加入div
      var snowFlakeImg = document.createElement('img');
      snowFlakeImg.setAttribute('src', snowsrc);
      snowFlakeImg.style.width = 12;
      snowFlakeImg.style.height = 12;
      //将雪花div加入到document中，并通过数组保存
      snowFlakeDiv.appendChild(snowFlakeImg);
      document.body.appendChild(snowFlakeDiv);
      snowFlakes[cr] = snowFlakeDiv;
	  cr=no;
	}
      for (i = 0; i < no; ++ i) {  
        //第i个图片的纵坐标加上步长
        yp[i] += sty[i];
        //如果新坐标超过了屏幕下沿，重置该图片的信息，包括横坐标、纵坐标以及x方向的步长和y方向的步长
        if (yp[i] > clientHeight-20) {
          //重新赋值图片的横坐标
          xp[i] = Math.random()*(clientWidth-am[i]-12);
          //重新赋值图片的纵坐标
          yp[i] = 0;
        }
        dx[i] += stx[i];//dx变量加上一个步长
        //直接操作数组中对应的雪花div
        var snowFlakeDiv = snowFlakes[i];
        //更新图片的纵坐标
        snowFlakeDiv.style.top = yp[i];
        //更新图片的横坐标
        snowFlakeDiv.style.left = xp[i] + am[i]*Math.sin(dx[i]);
      }
	  //逐渐增加个数并设置上限
	  if(no<80)
	  {
	     myPace++;
	     no=Math.floor(myPace/30);
	  }
      //设定动画刷新的时间周期
      setTimeout("snow()", 30);
    }
    //调用snowIE()函数 
    snow();