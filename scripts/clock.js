/*
Date, 백틱 참고자료
https://velog.io/@pcwadarong/setTimeout%EA%B3%BC-setInterval
*/
function clock(){
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth()+1).padStart(2,"0");
	const day = String(date.getDate()).padStart(2,"0");

	const hour = String(date.getHours()).padStart(2,"0");
	const min = String(date.getMinutes()).padStart(2,"0");
	const sec = String(date.getSeconds()).padStart(2,"0");

	const dateStr = `${year}/${month}/${day}`;
	const clockStr =  `${hour}:${min}:${sec}`;

	document.getElementById('date').textContent = dateStr;
	document.getElementById('time').textContent = clockStr
}

function battery(){
	let batteryNum = document.getElementById('batteryNum').textContent;
	batteryNum = parseInt(batteryNum);

	if(batteryNum <= 0) {
		document.getElementById('batteryNum').textContent = `0%`;
		document.getElementById('clock').style.backgroundColor = "black"
	} else {
		batteryNum = batteryNum - 1;
		document.getElementById('batteryNum').textContent = `${batteryNum}%`;
	}

	/*배터리가 충전되는 경우 고려해야함*/
	if(batteryNum == 75){
		document.getElementById('1').style.visibility = 'hidden';
	} else if(batteryNum == 50){
		document.getElementById('2').style.visibility = 'hidden';
	} else if(batteryNum == 25){
		document.getElementById('3').style.visibility = 'hidden';
	} else if(batteryNum == 0){
		document.getElementById('4').style.visibility = 'hidden';
	}

}

function addAlarm() {
	let hour = document.getElementById('hour').value;
	let min = document.getElementById('min').value;
	let sec = document.getElementById('sec').value;
	let str = `${hour}시 ${min}분 ${sec}초`

	const element = document.getElementById('alarmBoard');
	const newDiv = document.createElement('div');
	const content = document.createTextNode(str);
	element.appendChild(newDiv);
	newDiv.appendChild(content);
}

setInterval(clock, 1000);/*1000밀리초 = 1초*/
setInterval(battery, 1000);

