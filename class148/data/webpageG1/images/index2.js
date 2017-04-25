// JavaScript Document
var aspeed= 66;
var speed= 1;
GDTP2.innerHTML=GDTP1.innerHTML
function Marquee(){
if(GDTP2.offsetWidth-GDTP.scrollLeft<=0)
GDTP.scrollLeft-=GDTP1.offsetWidth
else{
GDTP.scrollLeft++
}}
var MyMar=setInterval(Marquee,aspeed)
GDTP.onmouseover=function(){clearInterval(MyMar)}
GDTP.onmouseout=function() {MyMar=setInterval(Marquee,speed)}