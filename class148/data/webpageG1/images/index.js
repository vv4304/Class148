// JavaScript Document
linkarr = new Array();
picarr = new Array();
textarr = new Array();
var swf_width=590;
var swf_height=300;
//文字颜色|文字位置|文字背景颜色|文字背景透明度|按键文字颜色|按键默认颜色|按键当前颜色|自动播放时间|图片过渡效果|是否显示按钮|打开方式
var configtg='0xffffff|0|0xAE0E11|5|0xffffff|0xC5DDBC|0x000033|1|2|1|_self';
var files = "";
var links = "";
var texts = "";
//这里设置调用标记
picarr[1]  = "dht/1.png";
textarr[1] = "~148班全体同学高一毕业[全班福]~";
picarr[2]  = "dht/2.png";
textarr[2] = "~每一张图片都有自己的故事~";
picarr[3]  = "dht/3.png";
textarr[3] = "~致我们已逝去的童年~";
picarr[4]  = "dht/4.png";
textarr[4] = "~我们可爱的班主任~";
for(i=1;i<picarr.length;i++){
if(files=="") files = picarr[i];
else files += "|"+picarr[i];
}
for(i=1;i<linkarr.length;i++){
if(links=="") links = linkarr[i];
else links += "|"+linkarr[i];
}
for(i=1;i<textarr.length;i++){
if(texts=="") texts = textarr[i];
else texts += "|"+textarr[i];
}
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ swf_width +'" height="'+ swf_height +'">');
document.write('<param name="movie" value="daohang.swf"><param name="quality" value="high">');
document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
document.write('<param name="FlashVars" value="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'">');
document.write('<embed src="daohang.swf" wmode="opaque" FlashVars="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'& menu="false" quality="high" width="'+ swf_width +'" height="'+ swf_height +'" type="application/x-shockwave-flash" pluginspage="http://get.adobe.com/cn/flashplayer" />'); document.write('</object>'); 