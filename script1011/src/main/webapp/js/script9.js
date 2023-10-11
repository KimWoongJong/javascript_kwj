/**
 * 삼항식
 */
// 두 수를 입력받아 큰 수를 출력하시오.
var a = Number(prompt("1번째 숫자를 입력하세요.")); 
var b = Number(prompt("2번째 숫자를 입력하세요."));
var c = Number(prompt("3번째 숫자를 입력하세요."));

var result = a>=b?(a>=c?a:c):(b>=c?b:c);
document.write(result,"<br>");