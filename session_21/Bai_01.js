let number1 = +prompt("Mời bạn nhập số thứ nhất");
let number2 = +prompt("Mời bạn nhập số thứ hai");
let number3 = +prompt("Mời bạn nhập số thứ ba");
let number4 = +prompt("Mời bạn nhập số thứ tư");
let number5 = +prompt("Mời bạn nhập số thứ năm");
let result = 0;
if(number1 % 2 !=0){
    result=result+number1;
}
if(number2 % 2 != 0){
    result=result+number2;
}
if(number3 % 2 != 0){
    result=result+number3;
}
if(number4 % 2 != 0){
    result=result+number4;
}
if(number5 % 2 != 0){
    result=result+number5;
}
alert("Tổng các số lẻ là "+result);