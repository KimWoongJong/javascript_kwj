/**
 * 
 */
// 2개의 숫자를 입력받아 두 수를 사칙연산 결과값을 출력하시오.
// prompt(,"0");
function calcu(){
	var num1 = Number(prompt("첫번째 숫자를 입력하세요","0"));
	var num2 = Number(prompt("두번째 숫자를 입력하세요","0"));
	document.write("<h1>첫번째 숫자 : "+num1+"</h1>");
	document.write("<h1>두번째 숫자 : "+num2+"</h1>");
	document.write("<h1>두 수의 합 : "+(num1+num2)+"</h1>");
	document.write("<h1>두 수의 차 : "+(num1-num2)+"</h1>");
	document.write("<h1>두 수의 곱 : "+(num1*num2)+"</h1>");
	document.write("<h1>두 수의 나눗셈 : "+(num1/num2)+"</h1>");
}