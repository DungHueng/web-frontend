let a = +prompt("Mời bạn nhập số nguyên thứ nhất");
let b = +prompt("Mời bạn nhập số nguyên thứ hai");
let c = +prompt("Mời bạn nhập số nguyên thứ ba");
let d = +prompt("Mời bạn nhập số nguyên thứ tư");
let e = +prompt("Mời bạn nhập số nguyên thứ năm");
let odd = 0;
let even = 0;
if(a % 2 ==0){
    even++
}else{
    odd++
}
if(b % 2 ==0){
    even++
}else{
    odd++
}
if(c % 2 ==0){
    even++
}else{
    odd++
}
if(d % 2 ==0){
    even++
}else{
    odd++
}
if(e % 2 ==0){
    even++
}else{
    odd++
}

alert("Số lượng số chẵn là "+even);
alert("Số lượng số lẻ là " +odd);