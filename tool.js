/*获取当前元素样式的兼容函数*/
function getStyle(element, property){
	return element.currentStyle ? element.currentStyle[property] : getComputedStyle(element)[property];
};
/*
** 【背景颜色渐变】
** ↓使用方法↓
** var oEle = document.querySelector('类名/#id名/.class名');
** changeColor();
*/
function changeColor(){
	var max=220,//峰值
		min=60,//谷值
		color=[max,127,min],//初始化颜色数组
		timer=null,
		length=color.length,
		change_color;
	timer=setInterval(change,30);//定时器，每20毫秒执行一次
	function change(){
		for(var i = 0;i < length;i++){
			i%=length;
			var arrF = (i+1)%length
			var arrS = (i+2)%length
			if(color[i]==max&&color[arrF]==min){
				color[arrS]++;
			}
			if(color[i]==min&&color[arrF]==max){
				color[arrS]--;
			}
			change_color = 'rgb('+color[0]+','+color[1]+','+color[2]+')';
			arr_color(change_color);
		}
	}
	function arr_color(change_color){
		oEle.style.backgroundColor=change_color;
	}
};
