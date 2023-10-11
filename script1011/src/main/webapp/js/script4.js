/**
 * 
 */
var sum = 0;
var num = Number(prompt("숫자를 입력하세요.","0"));
for(var i=0;i<=num;i++){
	sum = sum + i; // sum += i;
}
document.write("1부터 "+num+"까지의 합 : "+sum,"<br>");
