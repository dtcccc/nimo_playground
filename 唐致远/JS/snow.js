    //ͼƬ�Ĺ����У�������Ĺ켣����һ��Ϊ���ĵ���������
    //������setTimeout��������˶����Ĺ���
    //ͼƬ
    var snowsrc="image/snow.png"
    //ѩ����������
    var no = 0,cr = 0,myPace = 0;
    //����������xp��ʾ�����꣬yp��ʾ������>
    var dx, xp, yp;
    //����������am��ʾ���Ұڶ��ķ��ȣ�stx��ʾ�������ƫ�Ʋ�����sty��ʾ������Ĳ���>
    var am, stx, sty;  
    {
      //��ȡ��ǰ���ڵĿ��
      clientWidth = document.body.clientWidth;
      //��ȡ��ǰ���ڵĸ߶�
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
	//�����µ�ѩ��
	if(cr!=no)
	{
	  dx[cr] = 0;                        
      //��cr��ͼƬ�ĺ������ʼֵ
      xp[cr] = Math.random()*(clientWidth-20);  
      //yp[i] = Math.random()*clientHeight;//��cr��ͼƬ���������ʼֵ
	  yp[cr]=0;
      am[cr] = Math.random()*10;         //��cr��ͼƬ�����Ұڶ��ķ���
      stx[cr] = 0.02 + Math.random()/10; //��cr��ͼƬx����Ĳ���
      sty[cr] = 0.7 + Math.random();     //��cr��ͼƬy����Ĳ���
      //����һ������ѩ��ͼƬ��div�����������������
      var snowFlakeDiv = document.createElement('div');
      snowFlakeDiv.setAttribute('id', 'dot'+ cr);
      snowFlakeDiv.style.position = 'fixed';
      snowFlakeDiv.style.top = 15;
      snowFlakeDiv.style.left = 15;
      //����һ��ѩ��ͼƬ�������ÿ�ߣ�������div
      var snowFlakeImg = document.createElement('img');
      snowFlakeImg.setAttribute('src', snowsrc);
      snowFlakeImg.style.width = 12;
      snowFlakeImg.style.height = 12;
      //��ѩ��div���뵽document�У���ͨ�����鱣��
      snowFlakeDiv.appendChild(snowFlakeImg);
      document.body.appendChild(snowFlakeDiv);
      snowFlakes[cr] = snowFlakeDiv;
	  cr=no;
	}
      for (i = 0; i < no; ++ i) {  
        //��i��ͼƬ����������ϲ���
        yp[i] += sty[i];
        //��������곬������Ļ���أ����ø�ͼƬ����Ϣ�����������ꡢ�������Լ�x����Ĳ�����y����Ĳ���
        if (yp[i] > clientHeight-20) {
          //���¸�ֵͼƬ�ĺ�����
          xp[i] = Math.random()*(clientWidth-am[i]-12);
          //���¸�ֵͼƬ��������
          yp[i] = 0;
        }
        dx[i] += stx[i];//dx��������һ������
        //ֱ�Ӳ��������ж�Ӧ��ѩ��div
        var snowFlakeDiv = snowFlakes[i];
        //����ͼƬ��������
        snowFlakeDiv.style.top = yp[i];
        //����ͼƬ�ĺ�����
        snowFlakeDiv.style.left = xp[i] + am[i]*Math.sin(dx[i]);
      }
	  //�����Ӹ�������������
	  if(no<80)
	  {
	     myPace++;
	     no=Math.floor(myPace/30);
	  }
      //�趨����ˢ�µ�ʱ������
      setTimeout("snow()", 30);
    }
    //����snowIE()���� 
    snow();