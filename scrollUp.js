function addLoadEvent(func){
	var oldLoad = window.onload;
	if(typeof oldLoad != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldLoad();
			func();
		}
	}
}
var timer;
var height = 30;//li的高度
function move(){
	if(list.scrollTop%height == 0){
		setTimeout(go,3000);
	}else{
		go();
	}
}
function go(){
	if(list.scrollTop >= list.offsetHeight){
			list.scrollTop = 0;
		}else{
			list.scrollTop += 30;
		}
}
function scroll(){
	var list = document.getElementById('list');
	list.innerHTML += list.innerHTML; 
	list.onmouseover = function(){
		clearInterval(timer);
	};
	list.onmouseout = function(){
		timer = setInterval(move,1500);
	};
		timer = setInterval(move,1500);
}
addLoadEvent(scroll);