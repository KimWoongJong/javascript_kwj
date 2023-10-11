/**
 * 
 */
var sum = 0;
var num1 = Number(prompt("첫번째 숫자를 입력하세요","0"));
var num2 = Number(prompt("두번째 숫자를 입력하세요","0"));
for(var i=num1;i<=num2;i++){
	sum = sum + i; // sum += i;
}
document.write(num1+"부터 "+num2+"까지의 합 : "+sum,"<br>");
