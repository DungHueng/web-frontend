let month =prompt("Mời bạn nhập số tháng trong năm");
if(month>=1 &&month <=3){
    alert("Mùa xuân");
}else if(month<=6&&month>=4){
    alert("Mùa hạ");
}else if(month<=9 && month >=7){
    alert("Mùa thu");
}else if(month<=12 && month >=10){
    alert("Mùa đông");
}else{
    alert("Tháng bạn chọn không hợp lệ");
}