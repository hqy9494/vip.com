
var body = document.getElementsByTagName("body")[0];
var cCount=0;
var clickArr = [495,2630,3828,4880,5931,6985,8035,9100];
var scrollArr = [0,2340,3560,4680,5700,6800,7840,8900];
var leftli = document.querySelectorAll("#left>ul>li");
var place = document.getElementById("place");
var province = document.getElementById("province");
var X = document.getElementById('X');
var wodetemai = document.getElementById('wodetemai');
var temai = document.getElementById('temai');
var huiyuanjlb = document.getElementById('huiyuanjlb');
var jlb = document.getElementById('jlb');
var kehufuwu = document.getElementById('kehufuwu');
var fuwu = document.getElementById('fuwu');
var shoujiban = document.getElementById('shoujiban');
var qrcode = document.getElementById('qrcode');
var qiandaobtn = document.getElementById("qiandaobtn");
var circle = document.querySelectorAll(".circle");
var line = document.querySelectorAll(".line");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var scoll = document.getElementById("scoll");
var activity = document.querySelectorAll('#activity>li>a');
var scollline = document.getElementById("scollline");
var tds = document.getElementsByTagName("td");
var left = document.getElementById("left");
var navbar = document.getElementById("navbar");
// 网页滚动事件

window.onload = window.onresize = function(){
	if(window.innerWidth > 1300){
		if(document.body.scrollTop>=400){
			left.style.display = "block";
		}
		
		
		window.onscroll = function() {
			var scrolltop =  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			console.log(scrolltop)
			if(scrolltop >= 400){
				left.style.display = "block";
			}else{
				left.style.display = "none";
			}
			if(scrolltop >= 120){
				navbar.style.position = "fixed";
				navbar.style.top = 0;
			}else{
				navbar.style.position = "static";
				navbar.style.zIndex = 4;
			}
		
			for(var i=0;i<=leftli.length-1;i++){
				if((scrolltop>=scrollArr[i]&&scrolltop<scrollArr[i+1])||scrolltop>=8900){
					clearLeftli();
					leftli[i].style.background = "#f10180";
					leftli[i].children[0].style.color = "white";
					leftli[i].style.color = "white";
				}
			}
		}
		
	}else{
		left.style.display = "none";
	}
}


// 给leftli添加索引
addindex();
function addindex() {
	for(var i=0;i<leftli.length;i++) {
		leftli[i].index = i;
	}
}

// 点击leftli
var clicktimer = 0;
clickLeftli();
function clickLeftli(){
	for(var i=0;i<leftli.length;i++){
		leftli[i].onclick = function() {
			// console.log(this.index)
			var eq = this.index;
			clearLeftli();
			this.style.background = "#f10180";
			this.children[0].style.color = "white";
			this.style.color = "white";
			// cancelAnimationFrame(clicktimer)|| clearTimeout(clicktimer);
			// clicktimer = requestAnimationFrame(function fn(){
			// 	console.log(eq)
			// 	var top = document.body.scrollTop || document.documentElement.scrollTop;
			// 	if(top>clickArr[eq]){
			// 		document.body.scrollTop = document.documentElement.scrollTop = top - 18;
            //     	clicktimer = requestAnimationFrame(fn)||setTimeout(fn, 30);
			// 	}else if(top<clickArr[eq]){
			// 		document.body.scrollTop = document.documentElement.scrollTop = top + 18;
            //     	clicktimer = requestAnimationFrame(fn)||setTimeout(fn, 30);
			// 	}else if(top==clickArr[eq]){
			// 		cancelAnimationFrame(clicktimer);
			// 	}
			// })
			window.scrollTo(0,clickArr[this.index]);
			// document.body.scrollTop = clickArr[this.index] + "px";
			// console.log(clickArr[this.index]);
		}
	}
}



// 清除left里面li的样式
function clearLeftli() {
	for(var i=0;i<leftli.length;i++){
		leftli[i].style.background = "transparent";
		leftli[i].style.color = "#666";
		leftli[i].children[0].style.color = "#bbb";
	}
}

//right里面的X
var cha = document.getElementById("cha");
var zh = document.getElementById("zh");
cha.onclick = function() {
	zh.style.left = 0;
}

zhanghao.onmouseover = function() {
	zh.style.left = (-257) +"px";
}

zhanghao.onmouseleave = function() {
	zh.style.left = 0;
}





// 地区
addPlace();
var ctimer;
function returnTop() {
	// document.body.scrollTop = 0;
	cancelAnimationFrame(ctimer)||clearTimeout(ctimer);    
	ctimer = requestAnimationFrame(function fn() {
		var top = document.body.scrollTop || document.documentElement.scrollTop;
		if (top > 0) {
			document.body.scrollTop = document.documentElement.scrollTop = top - 500;
			ctimer = requestAnimationFrame(fn)||setTimeout(fn, 30)
		} else {
			cancelAnimationFrame(ctimer);
		}
	})
}

function addPlace() {
	for(var i =0;i<tds.length;i++){
		tds[i].index = i;
		tds[i].children[0].onclick = function() {
			place.children[0].innerHTML = this.innerHTML;
			province.style.display = "none";
			place.style.background = "transparent";
		}
	}
}


place.onclick = function() {
	this.style.background =  "white";
	province.style.display = "block";
}
X.onclick = function() {
	province.style.display = "none";
	place.style.background = "transparent";
}

qiandaobtn.onclick = function() {
	cCount++;
	cCount=cCount%8;	
	clearCircle();
	for(var j=0;j<=cCount;j++){
		if(j==0){
			clearCircle();
		}else if(j==1){
			circle[j-1].style.borderColor = "#f10180";
		}else{
			circle[j-1].style.borderColor = "#f10180";
			line[j-2].style.borderColor = "#f10180";
		}
	}	
}

	function clearCircle() {
		for(var i=0;i<circle.length;i++){
			if(i==0){
				circle[i].style.borderColor = "#ccc";
			}else{
				circle[i].style.borderColor = "#ccc";
				line[i-1].style.borderColor = "#ccc";
			}
		}
	}

// 轮播图
	var picNum = 0,roll=0,wid=860,isPN=true;
	var changePic = setInterval(Starting,3000);
	scollline.style.left = picNum * 167 + "px";
	scoll.style.left = -(picNum*wid) + "px";
	
	changingPic();
	function changingPic() {
		for(var i=0;i<activity.length;i++){
			activity[i].index = i;
			activity[i].onmouseover = function() {
				clearInterval(changePic);
				picNum = this.index;
				clearActivity();
				activity[picNum].style.color = "#f10180";
				scollline.style.left = picNum * 167 + "px";
				scoll.style.left = -(picNum*wid) +"px";
			}
			activity[i].onmouseleave = function() {
				changePic = setInterval(Starting,3000);
			}
		}
	} 

	function clearActivity() {
		for(var i=0;i<activity.length;i++){
			activity[i].style.color = "#666";
		}
	}



	function Prev() {
		clearInterval(changePic);
		changePic = setInterval(Starting,3000);
		picNum--;
		picNum=picNum<0?picNum+5:picNum;
		scoll.style.left = -(picNum*wid)+"px";
		clearActivity();
		activity[picNum].style.color = "#f10180";
		scollline.style.left = picNum*167 + "px";
	}

	function Next() {
		clearInterval(changePic);
		changePic = setInterval(Starting, 3000);
		picNum++;
		picNum = picNum > 4 ? picNum - 5 : picNum;
		scoll.style.left = -(picNum * wid) + "px";
		clearActivity();
		activity[picNum].style.color = "#f10180";
		scollline.style.left = picNum * 167 + "px";
	}

	function Starting() {
		if(isPN == true){
			picNum++;
			if(picNum>4){
				isPN = false;
				picNum-=2;				
			}
			roll = -(picNum*wid);
			scoll.style.left = roll + "px";
		}else if(isPN==false){
			picNum--;
			if(picNum<0){
				isPN = true;
				picNum+=2;
			}
			roll = -(picNum * wid);
			scoll.style.left = roll + "px";
		}
		clearActivity();
		activity[picNum].style.color = "#f10180";
		scollline.style.left = picNum*167 + "px";
	}


				
	//倒计时
	var hour = document.getElementById("hour");
	var min = document.getElementById("min");
	var second = document.getElementById("second");
	var ms = document.getElementById("ms");
	var daojishi = setInterval(timeout,1000);
	function timeout() {
		var mss = ms.innerText - 0;;
		var seconds = second.innerText - 0;
		var mins = min.innerText - 0;
		var hours = hour.innerText - 0;
		mss --;
		if(mss<0){
			mss = 9;
			seconds--;
		}
		if(seconds<0){
			seconds = 59;
			mins--;
		}
		if(mins<0){
			mins=59;
			hours--;
		}
		if(hours<0){
			mss=9;
			seconds=59;
			mins=59;
			hours=23;
		}
		ms.innerText = mss;
		second.innerText = seconds;
		min.innerText = mins;
		hour.innerText = hours;
		// console.log(mss,seconds,mins,hours);
	}
	

