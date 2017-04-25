var xp=false;
function music()
{
    document.getElementById('B1').style.opacity="0.3";
    document.getElementById('B1').style.filter = "alpha(opacity=30%)";
    document.getElementById('B3').style.opacity="0.3";
    document.getElementById('B3').style.filter = "alpha(opacity=30%)";
var date = new Date();
var play=date.getMinutes();
if(play<48)
{
	document.getElementById('music1').play();
}
else
{
	document.getElementById('music2').play();
}
}
function cs(name)
{
	document.getElementById(name).style.display="";
}
function css(name)
{
	document.getElementById(name).style.display="none";
}
function laoshikmove(name1,name2)
{
	document.getElementById(name1).style.display="";	
}
function laoshikout(name1,name2)
{
	document.getElementById(name1).style.display="none";
	document.getElementById(name2).style.display="";
}
function zpkl(name)
{
    var zhebi=document.getElementById(name);
    zhebi.style.display=""
    zhebi.innerHTML="<img src='image/test.png'/>";
    zhebi.style.opacity="0.9";
    zhebi.style.filter = "alpha(opacity=90%)";
}
function zpks(name)
{
document.getElementById(name).style.display="";
}
function zpk(name)
{
document.getElementById(name).style.display="";
}
function zpkout(name)
{
document.getElementById(name).style.display="none";		
}
function zpkss(name)
{
document.getElementById(name).style.display="";
}
function dd(name)
{
	document.getElementById('QQ').src=name;
	document.getElementById('Q').style.display="";
}
function ddqx()
{
	document.getElementById('Q').style.display="none";
}
function xs()
{
if(xp==false)
{
	document.getElementById('xpcaidan').style.display="";
	xp=true;
}
else
{
	document.getElementById('xpcaidan').style.display="none";
	xp=false;
}
}
function guanji()
{
	document.getElementById('xpcaidan').style.display="none";
	xp=false;
	document.getElementById('guanji').style.display="";
	document.getElementById('guanjicaidan').style.display="";
}
function guanjicaidan2()
{
	document.getElementById('guanjicaidan').style.display="none";
	document.getElementById('guanji').style.display="none";
}
function guanbi()
{
	document.getElementById('guanji').style.backgroundImage="url(image/guanji.png)";
	document.getElementById('guanjicaidan').style.display="none";
    setTimeout("guabixy()",3000);
}
function guabixy()
{
	document.getElementById('nameblockz').style.display="none";
	document.getElementById('hua').style.display="none";
	document.getElementById('nameblock').style.display="";
    document.getElementById('fujian').style.display="";
}
function zhonghongqi()
{
	document.getElementById('hongqi').style.display="";
}
function zhonghongqiout()
{
	document.getElementById('hongqi').style.display="none";
}
function windowc(n)
{
	switch(n)
	{
case '1':
	document.getElementById('windowc').style.backgroundImage="url(image/jisuanji.png)";
	document.getElementById('windowc').style.display="";
	document.getElementById('windowk1').style.display="";
	document.getElementById('windowk3').style.display="";
	document.getElementById('windowk5').style.display="none";
	break;
case '88':
	document.getElementById('windowc').style.display="none";
	document.getElementById('windowk4').style.display="none";
	break;
case '2':
	document.getElementById('windowk1').style.display="none";
	document.getElementById('windowk2').style.display="";
	document.getElementById('windowk3').style.display="none";
	document.getElementById('windowc').style.backgroundImage="url(image/E.png)";
	break;
case '3':
	document.getElementById('windowc').style.backgroundImage="url(image/dianying.PNG)";
	document.getElementById('windowk2').style.display="none";
	break;
case '4':
	document.getElementById('windowc').style.backgroundImage="url(image/C.PNG)";
	document.getElementById('windowk3').style.display="none";
	document.getElementById('windowk1').style.display="none";
	document.getElementById('windowk5').style.display="";
	document.getElementById('windowk4').style.display="";
	break;		
case '6':
    document.getElementById('windowc').style.backgroundImage="url(image/text.jpg)";
	document.getElementById('windowk5').style.display="none";
	document.getElementById('windowk4').style.display="none";
	break;
	}
}
function BS(id)
{
	switch(id)
	{
	case '1':
	document.getElementById('B').src="image/B11.jpg";
	document.getElementById('B1').style.opacity="1";
    document.getElementById('B1').style.filter = "alpha(opacity=100%)";
    document.getElementById('B2').style.opacity="0.3";
    document.getElementById('B2').style.filter = "alpha(opacity=30%)";
	document.getElementById('B3').style.opacity="0.3";
    document.getElementById('B3').style.filter = "alpha(opacity=30%)";
	break;
	case '2':
	document.getElementById('B').src="image/B22.jpg";
	document.getElementById('B1').style.opacity="0.3";
    document.getElementById('B1').style.filter = "alpha(opacity=30%)";
    document.getElementById('B2').style.opacity="1";
    document.getElementById('B2').style.filter = "alpha(opacity=100%)";
	document.getElementById('B3').style.opacity="0.3";
    document.getElementById('B3').style.filter = "alpha(opacity=30%)";
	break;
	case '3':
	document.getElementById('B').src="image/B33.jpg";
	document.getElementById('B1').style.opacity="0.3";
    document.getElementById('B1').style.filter = "alpha(opacity=30%)";
    document.getElementById('B2').style.opacity="0.3";
    document.getElementById('B2').style.filter = "alpha(opacity=30%)";
	document.getElementById('B3').style.opacity="1";
    document.getElementById('B3').style.filter = "alpha(opacity=100%)";
	break;
	}
}
function ima(src)
{
window.alert("点击下方可以下载原图啊！下面框框啊。"); 
}